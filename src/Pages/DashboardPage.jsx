import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import SettingsView from '../Component/SettingsView';
import '../assets/registration/DashboardPage.css';

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeCategory, setActiveCategory] = useState(localStorage.getItem('activeCategory') || 'overview');
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [toasts, setToasts] = useState([]);
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    // Pagination & Search States
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);

    const navigate = useNavigate();
    const mainRef = useRef(null);
    const cardsRef = useRef([]);
    const searchTimeoutRef = useRef(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (!storedUser || !token) {
            navigate('/login');
            return;
        }

        setUser(JSON.parse(storedUser));

        if (window.innerWidth < 992) {
            setSidebarOpen(false);
        }
    }, [navigate]);

    // Reset pagination when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    // Fetch data when activeCategory, page, or searchTerm changes
    useEffect(() => {
        localStorage.setItem('activeCategory', activeCategory);

        // Debounce search
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

        searchTimeoutRef.current = setTimeout(() => {
            if (activeCategory === 'overview') {
                fetchRegistrations(null, currentPage, searchTerm);
            } else if (activeCategory !== 'settings') {
                fetchRegistrations(activeCategory, currentPage, searchTerm);
            }
        }, 300); // 300ms debounce

        return () => clearTimeout(searchTimeoutRef.current);
    }, [activeCategory, currentPage, searchTerm]);

    const fetchRegistrations = async (categoryId = null, page = 1, search = '') => {
        setLoading(true);
        const token = localStorage.getItem('token');

        let url = `https://new.ssvmtransformingindia.com/public/api/registrations?page=${page}`;

        const cleanSearch = (search || '').trim();
        if (cleanSearch) {
            url += `&search=${encodeURIComponent(cleanSearch)}`;
        }

        if (categoryId && categoryId !== 'overview') {
            if (categoryId.startsWith('guru-')) {
                const typeMap = {
                    'guru-internal-self': 'internal-self',
                    'guru-internal-others': 'internal-other',
                    'guru-external-self': 'external-self',
                    'guru-external-others': 'external-other'
                };
                url += `&award_group=guru&nomination_type=${typeMap[categoryId]}`;
            } else if (categoryId.startsWith('student-')) {
                const typeMap = {
                    'student-internal': 'internal',
                    'student-external': 'external'
                };
                url += `&award_group=studentpreneur&nomination_type=${typeMap[categoryId]}`;
            }
        }

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            const result = await response.json();
            if (result.success) {
                setRegistrations(result.data);
                setCurrentPage(result.current_page);
                setLastPage(result.last_page);
                setTotalRecords(result.total);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    const showToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const handleView = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`https://new.ssvmtransformingindia.com/public/api/registrations/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            const result = await response.json();
            if (result.success) {
                setSelectedRegistration(result.data);
                setIsViewModalOpen(true);
            } else {
                showToast(result.message || 'Failed to fetch details', 'error');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            showToast('Error fetching details', 'error');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this registration?')) return;
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`https://new.ssvmtransformingindia.com/public/api/registrations/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            const result = await response.json();
            if (result.success) {
                showToast('Registration deleted successfully', 'success');
                fetchRegistrations(activeCategory === 'overview' ? null : activeCategory, currentPage, searchTerm);
            } else {
                showToast(result.message || 'Failed to delete', 'error');
            }
        } catch (error) {
            console.error('Delete error:', error);
            showToast('Error deleting registration', 'error');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleExport = () => {
        if (registrations.length === 0) {
            showToast('No records to export', 'error');
            return;
        }

        const isStudent = activeCategory.startsWith('student');
        const isGuru = activeCategory.startsWith('guru');

        let headers = [];
        if (isStudent) {
            headers = [
                'S No', 'Reg No', 'Student Name', 'Grade', 'Applicant Email', 'Applicant Mobile No',
                'School Name', 'School City', 'School Phone no', 'School Email',
                'Business Idea', 'Total Members',
                'Member 2 Name', 'Member 2 Phone',
                'Member 3 Name', 'Member 3 Phone',
                'Member 4 Name', 'Member 4 Phone',
                'Member 5 Name', 'Member 5 Phone',
                'Key Achievements', 'Why Join', 'Pitch Deck URL', 'Date'
            ];
        } else if (isGuru) {
            headers = [
                'S No', 'Reg No', 'Teacher Name', 'Email', 'Phone', 'School Name',
                'Subjects', 'Experience', 'PE Teacher', 'PE Details', 'Vision', 'Impact', 'Profile',
                'Nominator Name', 'Nominator Phone', 'Nominator Email', 'Nominator Address', 'References', 'Photo URL', 'Date'
            ];
        } else {
            headers = ['S No', 'Reg No', 'Name', 'Email', 'Phone', 'Category', 'Nomination', 'Date'];
        }

        const csvRows = [
            headers.join(','), // Header row
            ...registrations.map((reg, index) => {
                if (isStudent) {
                    const extraMembers = reg.team_members || [];
                    return [
                        index + 1,
                        `"${reg.register_number || reg.id || ''}"`,
                        `"${reg.student_name || ''} ${reg.last_name || ''}"`,
                        `"${reg.grade || ''}"`,
                        `"${reg.email || ''}"`,
                        `"${reg.phone || ''}"`,
                        `"${reg.school_name || ''}"`,
                        `"${reg.school_city || ''}"`,
                        `"${reg.school_phone || ''}"`,
                        `"${reg.school_email || ''}"`,
                        `"${(reg.business_idea || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${reg.total_members || ''}"`,
                        `"${extraMembers[0]?.name || ''}"`, `"${extraMembers[0]?.phone || ''}"`,
                        `"${extraMembers[1]?.name || ''}"`, `"${extraMembers[1]?.phone || ''}"`,
                        `"${extraMembers[2]?.name || ''}"`, `"${extraMembers[2]?.phone || ''}"`,
                        `"${extraMembers[3]?.name || ''}"`, `"${extraMembers[3]?.phone || ''}"`,
                        `"${(reg.achievements || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${(reg.why_join || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${reg.pitch_deck_path ? 'https://new.ssvmtransformingindia.com/public/registrations/' + reg.pitch_deck_path : ''}"`,
                        `"${new Date(reg.created_at).toLocaleDateString()}"`
                    ].join(',');
                } else if (isGuru) {
                    return [
                        index + 1,
                        `"${reg.register_number || reg.id || ''}"`,
                        `"${reg.student_name || ''} ${reg.last_name || ''}"`,
                        `"${reg.email || ''}"`,
                        `"${reg.phone || ''}"`,
                        `"${reg.school_name || ''}"`,
                        `"${reg.subjects || ''}"`,
                        `"${reg.experience || ''}"`,
                        `"${reg.is_pe_teacher || ''}"`,
                        `"${(reg.pet_details || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${(reg.vision || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${(reg.impact || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${(reg.teacher_profile || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${reg.nominator_name || ''}"`,
                        `"${reg.nominator_phone || ''}"`,
                        `"${reg.nominator_email || ''}"`,
                        `"${(reg.nominator_address || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${(reg.references || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
                        `"${reg.photo_path ? 'https://new.ssvmtransformingindia.com/public/registrations/' + reg.photo_path : ''}"`,
                        `"${new Date(reg.created_at).toLocaleDateString()}"`
                    ].join(',');
                } else {
                    return [
                        index + 1,
                        `"${reg.register_number || reg.id || ''}"`,
                        `"${reg.student_name || ''} ${reg.last_name || ''}"`,
                        `"${reg.email || ''}"`,
                        `"${reg.phone || ''}"`,
                        `"${reg.award_group || ''}"`,
                        `"${reg.nomination_type || ''}"`,
                        `"${new Date(reg.created_at).toLocaleDateString()}"`
                    ].join(',');
                }
            })
        ];

        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${activeCategory}_registrations_full_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    return (
        <div className={`dashboard-layout ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
            {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                handleLogout={handleLogout}
            />

            <div className="main-wrapper">
                <header className="top-bar">
                    <button className="menu-toggle" onClick={toggleSidebar}>
                        <i className={`bi ${isSidebarOpen ? 'bi-text-indent-left' : 'bi-list'}`}></i>
                    </button>

                    <div className="top-bar-right">
                        <div className="search-box">
                            <i className="bi bi-search"></i>
                            <input
                                type="text"
                                placeholder="Auto search records..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="user-profile-mini">
                            <div className="avatar">{user?.name?.charAt(0)}</div>
                            <div className="user-info">
                                <span className="name">{user?.name}</span>
                                <span className="role">Administrator</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="content-area" ref={mainRef}>
                    <div className="welcome-section">
                        <h1>{activeCategory === 'overview' ? 'Dashboard Overview' : activeCategory.replace(/-/g, ' ').toUpperCase()}</h1>
                        <p>Found {totalRecords} total registrations.</p>
                    </div>

                    {activeCategory === 'settings' ? (
                        <SettingsView user={user} setUser={setUser} showToast={showToast} />
                    ) : (
                        <>
                            {activeCategory === 'overview' && (
                                <div className="stats-container">
                                    {[
                                        { label: 'Total Registrations', value: totalRecords, icon: 'bi-person-plus', color: '#000000', trend: '+100%' },
                                        { label: 'Guru Awards', value: 'Live', icon: 'bi-award', color: '#333333', trend: '' },
                                        { label: 'Studentpreneur', value: 'Live', icon: 'bi-mortarboard', color: '#666666', trend: '' }
                                    ].map((stat, i) => (
                                        <div key={i} className="stat-card-premium" ref={el => cardsRef.current[i] = el}>
                                            <div className="stat-card-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                                                <i className={`bi ${stat.icon}`}></i>
                                            </div>
                                            <div className="stat-card-info">
                                                <span className="stat-label">{stat.label}</span>
                                                <div className="stat-row">
                                                    <span className="stat-value">{stat.value}</span>
                                                    <span className="stat-trend">{stat.trend}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="dashboard-grid full-width">
                                <section className="table-section">
                                    <div className="section-header">
                                        <h2>{activeCategory === 'overview' ? 'Recent Registrations' : 'Inbound Details'}</h2>
                                        <div className="table-header-actions">
                                            <span className="records-count">{totalRecords} Records Found</span>
                                            <div className="action-buttons">
                                                {activeCategory !== 'overview' && (
                                                    <button className="export-btn" onClick={handleExport}>
                                                        <i className="bi bi-download"></i> Export CSV
                                                    </button>
                                                )}
                                                <button className="view-all-btn" onClick={() => fetchRegistrations(activeCategory, currentPage, searchTerm)}>
                                                    <i className="bi bi-arrow-clockwise"></i> Refresh
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        {loading ? (
                                            <div className="loading-state">Updating records...</div>
                                        ) : (
                                            <table className="custom-table">
                                                <thead>
                                                    <tr>
                                                        <th>Nominee Details</th>
                                                        <th>School / Institution</th>
                                                        <th>Category / Type</th>
                                                        <th>Details</th>
                                                        <th>File / Pitch Deck</th>
                                                        <th>Date</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {registrations.map((reg, i) => (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="td-name">
                                                                    <div className="small-avatar">{(reg.student_name || 'U').charAt(0)}</div>
                                                                    <div>
                                                                        <span style={{ fontWeight: '600' }}>{reg.student_name} {reg.last_name}</span><br />
                                                                        <small style={{ color: 'var(--text-muted)' }}>{reg.email}</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span style={{ fontSize: '0.9rem' }}>{reg.school_name}</span><br />
                                                                <small style={{ color: 'var(--text-muted)' }}>{reg.school_city || reg.phone}</small>
                                                            </td>
                                                            <td>
                                                                <span className="category-tag">{reg.award_group}</span><br />
                                                                <span className="status-pill reviewing">{reg.nomination_type}</span>
                                                            </td>
                                                            <td>
                                                                {reg.award_group === 'guru' ? (
                                                                    <div style={{ fontSize: '0.85rem' }}>
                                                                        <strong>Exp:</strong> {reg.experience} Years<br />
                                                                        <strong>Sub:</strong> {reg.subjects}
                                                                    </div>
                                                                ) : (
                                                                    <div style={{ fontSize: '0.85rem' }}>
                                                                        <strong>Grade:</strong> {reg.grade}<br />
                                                                        <strong>Members:</strong> {reg.total_members}
                                                                        {reg.team_members && reg.team_members.length > 0 && (
                                                                            <div className="team-names-list" style={{ marginTop: '5px', padding: '4px', background: '#f5f5f5', borderRadius: '4px', fontSize: '0.75rem' }}>
                                                                                <small style={{ fontWeight: '700', color: '#666' }}>Team Details:</small>
                                                                                {reg.team_members.map((m, idx) => (
                                                                                    <div key={idx} style={{ borderTop: '1px solid #eee', marginTop: '2px', paddingTop: '2px' }}>
                                                                                        • {m.name} ({m.phone})
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {(reg.pitch_deck_path) ? (
                                                                    <a href={`https://new.ssvmtransformingindia.com/public/registrations/${reg.pitch_deck_path}`} target="_blank" rel="noopener noreferrer" className="file-link">
                                                                        <i className="bi bi-file-earmark-pdf"></i> Pitch Deck
                                                                    </a>
                                                                ) : (reg.photo_path) ? (
                                                                    <a href={`https://new.ssvmtransformingindia.com/public/registrations/${reg.photo_path}`} target="_blank" rel="noopener noreferrer" className="file-link">
                                                                        <i className="bi bi-person-bounding-box"></i> View Photo
                                                                    </a>
                                                                ) : (
                                                                    <span className="no-file">No File</span>
                                                                )}
                                                            </td>
                                                            <td>{new Date(reg.created_at).toLocaleDateString()}</td>
                                                            <td>
                                                                <button className="action-btn view" onClick={() => handleView(reg.id)} title="View Details" style={{border: 'none', background: 'transparent', cursor: 'pointer', color: '#007bff'}}>
                                                                    <i className="bi bi-eye"></i>
                                                                </button>
                                                                <button className="action-btn delete" onClick={() => handleDelete(reg.id)} title="Delete" style={{border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '10px', color: '#dc3545'}}>
                                                                    <i className="bi bi-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {registrations.length === 0 && (
                                                        <tr>
                                                            <td colSpan="7">
                                                                <div className="no-records">
                                                                    <i className="bi bi-folder-x"></i>
                                                                    <p>No records match your search criteria.</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>

                                    {/* Pagination Controls */}
                                    {lastPage > 1 && (
                                        <div className="pagination-wrapper">
                                            <div className="pag-left">
                                                <button
                                                    disabled={currentPage === 1}
                                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                                    className="pag-btn prev-next"
                                                >
                                                    <i className="bi bi-chevron-left"></i>
                                                </button>
                                            </div>

                                            <div className="pag-numbers">
                                                {[...Array(lastPage)].map((_, i) => {
                                                    const pageNum = i + 1;
                                                    // Show first, last, current, and pages around current
                                                    if (
                                                        pageNum === 1 ||
                                                        pageNum === lastPage ||
                                                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                                                    ) {
                                                        return (
                                                            <button
                                                                key={pageNum}
                                                                className={`pag-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                                                                onClick={() => setCurrentPage(pageNum)}
                                                            >
                                                                {pageNum}
                                                            </button>
                                                        );
                                                    } else if (
                                                        pageNum === currentPage - 2 ||
                                                        pageNum === currentPage + 2
                                                    ) {
                                                        return <span key={pageNum} className="pag-dots">...</span>;
                                                    }
                                                    return null;
                                                })}
                                            </div>

                                            <div className="pag-right">
                                                <button
                                                    disabled={currentPage === lastPage}
                                                    onClick={() => setCurrentPage(prev => Math.min(lastPage, prev + 1))}
                                                    className="pag-btn prev-next"
                                                >
                                                    <i className="bi bi-chevron-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            </div>
                        </>
                    )}
                </main>
            </div>

            {/* Toast Container */}
            <div className="toast-container">
                {toasts.map(toast => (
                    <div key={toast.id} className={`toast-message ${toast.type}`}>
                        <i className={`bi ${toast.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'}`}></i>
                        <span>{toast.message}</span>
                    </div>
                ))}
            </div>

            {/* View Modal */}
            {isViewModalOpen && selectedRegistration && (
                <div className="modal-overlay" onClick={() => setIsViewModalOpen(false)} style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999}}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: '800px', width: '90%', maxHeight: '90vh', overflowY: 'auto', padding: '30px', borderRadius: '12px', background: '#fff', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
                        <button className="close-btn" onClick={() => setIsViewModalOpen(false)} style={{position: 'absolute', top: '15px', right: '15px', border: 'none', background: '#f0f0f0', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', color: '#333'}}>&times;</button>
                        <h2 style={{marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '15px', color: '#333'}}>Registration Details</h2>
                        <div className="view-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px', fontSize: '0.95rem'}}>
                            <div><strong>Register No:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.register_number}</span></div>
                            <div><strong>Date:</strong> <br/><span style={{color: '#555'}}>{new Date(selectedRegistration.created_at).toLocaleDateString()}</span></div>
                            <div><strong>Name:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.student_name} {selectedRegistration.last_name}</span></div>
                            <div><strong>Email:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.email}</span></div>
                            <div><strong>Phone:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.phone}</span></div>
                            <div><strong>School:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.school_name}</span></div>
                            <div><strong>Award Group:</strong> <br/><span style={{color: '#555', textTransform: 'capitalize'}}>{selectedRegistration.award_group}</span></div>
                            <div><strong>Nomination Type:</strong> <br/><span style={{color: '#555', textTransform: 'capitalize'}}>{selectedRegistration.nomination_type}</span></div>
                            
                            {selectedRegistration.award_group === 'studentpreneur' && (
                                <>
                                    <div><strong>Grade:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.grade}</span></div>
                                    <div><strong>Total Members:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.total_members}</span></div>
                                    <div><strong>School City:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.school_city || 'N/A'}</span></div>
                                    <div><strong>School Phone:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.school_phone || 'N/A'}</span></div>
                                    <div><strong>School Email:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.school_email || 'N/A'}</span></div>
                                    
                                    {selectedRegistration.team_members && Array.isArray(selectedRegistration.team_members) && selectedRegistration.team_members.length > 0 && (
                                        <div style={{gridColumn: '1 / -1'}}>
                                            <strong>Team Members:</strong>
                                            <ul style={{margin: '8px 0 0', paddingLeft: '20px', color: '#555', background: '#f8f9fa', padding: '15px 15px 15px 35px', borderRadius: '6px', border: '1px solid #eee'}}>
                                                {selectedRegistration.team_members.map((tm, idx) => (
                                                    <li key={idx} style={{marginBottom: '5px'}}><strong>{tm.name}</strong> - {tm.phone}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedRegistration.pitch_deck_path && (
                                        <div style={{gridColumn: '1 / -1'}}>
                                            <strong>Pitch Deck:</strong> <br/>
                                            <a href={`https://new.ssvmtransformingindia.com/public/registrations/${selectedRegistration.pitch_deck_path}`} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '8px', color: '#007bff', textDecoration: 'none', background: '#e9ecef', padding: '8px 12px', borderRadius: '4px', fontWeight: '500'}}>
                                                <i className="bi bi-file-earmark-pdf"></i> View Pitch Deck
                                            </a>
                                        </div>
                                    )}

                                    <div style={{gridColumn: '1 / -1'}}><strong>Business Idea:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.business_idea}</p></div>
                                    <div style={{gridColumn: '1 / -1'}}><strong>Achievements:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.achievements}</p></div>
                                    <div style={{gridColumn: '1 / -1'}}><strong>Why Join:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.why_join}</p></div>
                                </>
                            )}
                            {selectedRegistration.award_group === 'guru' && (
                                <>
                                    <div><strong>Experience:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.experience} Years</span></div>
                                    <div><strong>Subjects:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.subjects}</span></div>
                                    <div><strong>SSVM Teacher:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.is_ssvm_teacher || 'N/A'}</span></div>
                                    <div><strong>PE Teacher:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.is_pe_teacher}</span></div>
                                    
                                    {selectedRegistration.is_pe_teacher === 'Yes' && selectedRegistration.pet_details && (
                                        <div style={{gridColumn: '1 / -1'}}><strong>PE Details:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.pet_details}</p></div>
                                    )}

                                    <div><strong>Nominator Name:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.nominator_name || 'N/A'}</span></div>
                                    <div><strong>Nominator Phone:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.nominator_phone || 'N/A'}</span></div>
                                    <div><strong>Nominator Email:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.nominator_email || 'N/A'}</span></div>
                                    <div><strong>Nominator Address:</strong> <br/><span style={{color: '#555'}}>{selectedRegistration.nominator_address || 'N/A'}</span></div>

                                    {selectedRegistration.photo_path && (
                                        <div style={{gridColumn: '1 / -1'}}>
                                            <strong>Photo:</strong> <br/>
                                            <a href={`https://new.ssvmtransformingindia.com/public/registrations/${selectedRegistration.photo_path}`} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '8px', color: '#007bff', textDecoration: 'none', background: '#e9ecef', padding: '8px 12px', borderRadius: '4px', fontWeight: '500'}}>
                                                <i className="bi bi-image"></i> View Photo
                                            </a>
                                        </div>
                                    )}

                                    <div style={{gridColumn: '1 / -1'}}><strong>Teacher Profile:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.teacher_profile}</p></div>
                                    <div style={{gridColumn: '1 / -1'}}><strong>Vision:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.vision}</p></div>
                                    <div style={{gridColumn: '1 / -1'}}><strong>Impact:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.impact}</p></div>
                                    
                                    {selectedRegistration.awards_won && (
                                        <div style={{gridColumn: '1 / -1'}}><strong>Awards Won:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.awards_won}</p></div>
                                    )}

                                    <div style={{gridColumn: '1 / -1'}}><strong>References:</strong> <p style={{margin: '8px 0 0', padding: '15px', background: '#f8f9fa', borderRadius: '6px', border: '1px solid #eee', color: '#444', lineHeight: '1.5'}}>{selectedRegistration.references}</p></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
