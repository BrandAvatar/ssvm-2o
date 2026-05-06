import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import '../assets/registration/RegistrationForm.css';

const awardTypes = {
    guru: [
        { id: 'internal-self', label: 'Internal - Self Nomination', desc: 'Nominate yourself as an SSVM educator ' },
        { id: 'internal-other', label: 'Internal - Nominate Others', desc: 'Nominate an educator from SSVM institutions' },
        { id: 'external-self', label: 'External - Self Nomination', desc: 'Nominate yourself' },
        { id: 'external-other', label: 'External - Nominate Others', desc: 'Nominate an educator you know' },
    ],
    studentpreneur: [
        { id: 'internal', label: 'Internal Studentpreneur', desc: 'For students currently studying at SSVM' },
        { id: 'external', label: 'External Studentpreneur', desc: 'For student entrepreneurs from other schools' },
    ]
};

const RegistrationForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [utmData, setUtmData] = useState({});

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const urlUtm = {
            category: params.get('category'),
            type: params.get('type'),
            utm_source: params.get('utm_source'),
            utm_medium: params.get('utm_medium'),
            utm_campaign: params.get('utm_campaign'),
            utm_term: params.get('utm_term'),
            utm_content: params.get('utm_content'),
        };

        const stored = localStorage.getItem('utmData');
        const storedUtm = stored ? JSON.parse(stored) : {};

        // ✅ Only override if value exists in URL
        const finalUtm = { ...storedUtm };

        Object.keys(urlUtm).forEach(key => {
            if (urlUtm[key]) {
                finalUtm[key] = urlUtm[key];
            }
        });

        setUtmData(finalUtm);
        localStorage.setItem('utmData', JSON.stringify(finalUtm));

    }, [location.search]);

    const searchParams = new URLSearchParams(location.search);

    const [mainCategory, setMainCategory] = useState(() => {
        return searchParams.get('category') || '';
    });

    const [filterType, setFilterType] = useState(() => {
        return searchParams.get('type') || '';
    });

    const [formData, setFormData] = useState({
        awardGroup: '',
        nominationType: '',
        studentName: '',
        lastName: '',
        schoolName: '',
        phone: '',
        email: '',
        subjects: '',
        impact: '',
        vision: '',
        awardsWon: '',
        teacherProfile: '',
        experience: '',
        nominatorName: '',
        nominatorPhone: '',
        nominatorEmail: '',
        nominatorAddress: '',
        references: '',
        achievements: '',
        whyJoin: '',
        // Studentpreneur Specific
        schoolCity: '',
        schoolEmail: '',
        businessIdea: '',
        totalMembers: '1',
        teamMembers: [], // Array of { name: '', phone: '' }
        grade: '',
        schoolPhone: '',
        isPETeacher: '',
        petDetails: '',
        photo: null // Store photo file here
    });

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [regNumber, setRegNumber] = useState('');
    const formRef = useRef(null);

    const isNominateOther = formData.nominationType?.includes('other');

    // Auto-select if unique filter
    useEffect(() => {
        if (mainCategory && filterType && awardTypes[mainCategory]) {
            const possibleTypes = awardTypes[mainCategory].filter(t => !filterType || t.id.startsWith(filterType));
            if (possibleTypes.length === 1 && !formData.nominationType) {
                setFormData(prev => ({
                    ...prev,
                    nominationType: possibleTypes[0].id,
                    awardGroup: mainCategory
                }));
                // Auto skip to details if it's a direct choice (Studentpreneur)
                if (mainCategory === 'studentpreneur') {
                    setStep(2);
                }
            }
        }
    }, [mainCategory, filterType, formData.nominationType]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let finalValue = value;

        // Fields that should only allow numbers and be non-negative
        const numericFields = ['phone', 'schoolPhone', 'nominatorPhone', 'experience', 'totalMembers'];

        if (numericFields.includes(name)) {
            // Remove non-digit characters
            finalValue = value.replace(/[^0-9]/g, '');
        }

        if (name === 'totalMembers') {
            const count = parseInt(finalValue) || 1;
            setFormData(prev => {
                const currentMembers = prev.teamMembers || [];
                let newMembers = [...currentMembers];
                const extraCount = count - 1;

                if (newMembers.length < extraCount) {
                    for (let i = newMembers.length; i < extraCount; i++) {
                        newMembers.push({ name: '', phone: '' });
                    }
                } else {
                    newMembers = newMembers.slice(0, extraCount);
                }
                return { ...prev, totalMembers: finalValue, teamMembers: newMembers };
            });
        } else {
            setFormData(prev => ({ ...prev, [name]: finalValue }));
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleTeamMemberChange = (index, field, value) => {
        let finalValue = value;
        if (field === 'phone') {
            finalValue = value.replace(/[^0-9]/g, '');
        }
        setFormData(prev => {
            const newMembers = [...(prev.teamMembers || [])];
            newMembers[index] = { ...newMembers[index], [field]: finalValue };
            return { ...prev, teamMembers: newMembers };
        });
    };

    const [fileName, setFileName] = useState('');
    const [showCamera, setShowCamera] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploadPreview, setUploadPreview] = useState(null);
    const [uploadMode, setUploadMode] = useState('upload'); // 'upload' or 'camera'

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

            if (!allowedTypes.includes(file.type)) {
                alert('Only JPG, JPEG, and PNG files are accepted');
                e.target.value = '';
                return;
            }

            setFormData(prev => ({ ...prev, photo: file }));
            setFileName(file.name);

            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setCapturedImage(null);
        }
    };

    const removeImage = () => {
        setFileName('');
        setUploadPreview(null);
        setCapturedImage(null);
        setFormData(prev => ({ ...prev, photo: null }));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        stopCamera();
    };

    const startCamera = async () => {
        setShowCamera(true);
        setCapturedImage(null);
        setUploadPreview(null);
        setFileName('');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error("Camera error:", err);
            setShowCamera(false);
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
        setShowCamera(false);
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            const dataUrl = canvas.toDataURL('image/png');
            setCapturedImage(dataUrl);
            stopCamera();
        }
    };

    const scrollToFormTop = () => {
        const section = document.querySelector('.registration-section');
        if (section) {
            const yOffset = -100;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Scroll to top on step change
    useEffect(() => {
        // Small timeout to ensure DOM update and avoid GSAP conflicts
        const timer = setTimeout(scrollToFormTop, 100);
        return () => clearTimeout(timer);
    }, [step, submitted]);

    const handleStepChange = (nextStep) => {
        if (formRef.current) {
            gsap.to(formRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                onComplete: () => {
                    setStep(nextStep);
                    gsap.to(formRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            });
        } else {
            setStep(nextStep);
        }
    };

    const validateStep = (currentStep) => {
        const newErrors = {};
        if (currentStep === 2) {
            const isGuru = mainCategory === 'guru';
            const isNominateOther = formData.nominationType?.includes('other');
            const requiredFields = isGuru ?
                ['studentName', 'lastName', 'schoolName', 'phone', 'email', 'subjects', 'impact', 'vision', 'teacherProfile', 'experience', 'isPETeacher'] :
                ['studentName', 'grade', 'email', 'phone', 'schoolName', 'schoolCity', 'schoolPhone', 'schoolEmail', 'businessIdea', 'totalMembers'];

            if (isGuru && formData.isPETeacher === 'yes') {
                requiredFields.push('petDetails');
            }

            for (let field of requiredFields) {
                if (!formData[field]) {
                    newErrors[field] = 'This field is required';
                }
            }

            // Email Format Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formData.email && !emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }

            // Spam/Disposable Email Validation
            if (formData.email && !newErrors.email) {
                const disposableDomains = [
                    'mailinator.com', 'yopmail.com', 'tempmail.com', 'guerrillamail.com',
                    '10minutemail.com', 'sharklasers.com', 'trashmail.com', 'dispostable.com',
                    'getairmail.com', 'maildrop.cc', 'temp-mail.org', 'fake-mail.com'
                ];
                const emailParts = formData.email.split('@');
                const emailDomain = emailParts.length > 1 ? emailParts[1].toLowerCase() : '';
                if (disposableDomains.includes(emailDomain)) {
                    newErrors.email = 'Disposable or spam emails are not allowed.';
                }
            }

            // Phone Number Validation (10 digits)
            if (formData.phone && formData.phone.length !== 10) {
                newErrors.phone = 'Mobile number must be exactly 10 digits';
            }

            if (!isGuru && formData.schoolPhone && formData.schoolPhone.length !== 10) {
                newErrors.schoolPhone = 'School phone must be exactly 10 digits';
            }

            if (!isGuru && formData.schoolEmail && !emailRegex.test(formData.schoolEmail)) {
                newErrors.schoolEmail = 'Please enter a valid school email';
            }

            if (isGuru && !isNominateOther) {
                if (uploadMode === 'upload' && !uploadPreview) {
                    newErrors.photo = 'Please upload a candidate photo';
                }
                if (uploadMode === 'camera' && !capturedImage) {
                    newErrors.photo = 'Please capture a photo';
                }
            }
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            scrollToFormTop();
            return false;
        }
        return true;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            handleStepChange(step + 1);
        }
    };

    const handleSubmit = async () => {
        // Final validation for Step 3
        const newErrors = {};
        const isGuru = mainCategory === 'guru';
        const isNominateOther = formData.nominationType?.includes('other');
        const requiredStep3 = isGuru ?
            (isNominateOther ?
                ['nominatorName', 'nominatorPhone', 'nominatorEmail', 'nominatorAddress', 'references'] :
                ['nominatorAddress', 'references']) :
            ['achievements', 'whyJoin'];

        for (let field of requiredStep3) {
            if (!formData[field]) {
                newErrors[field] = 'This field is required';
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isGuru && isNominateOther) {
            if (formData.nominatorEmail && !emailRegex.test(formData.nominatorEmail)) {
                newErrors.nominatorEmail = 'Please enter a valid email';
            }
            if (formData.nominatorPhone && formData.nominatorPhone.length !== 10) {
                newErrors.nominatorPhone = 'Mobile number must be 10 digits';
            }
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            scrollToFormTop();
            return;
        }

        setSubmitting(true);

        const data = new FormData();
        data.append('utm_data', JSON.stringify(utmData));
        // Append all text fields
        Object.keys(formData).forEach(key => {
            if (!['pitchDeck', 'awardGroup', 'teamMembers'].includes(key)) {
                let value = formData[key];

                // If Self Nomination, copy teacher details to nominator fields
                if (!isNominateOther && isGuru) {
                    if (key === 'nominatorName') value = `${formData.studentName} ${formData.lastName}`;
                    if (key === 'nominatorPhone') value = formData.phone;
                    if (key === 'nominatorEmail') value = formData.email;
                }

                data.append(key, value);
            }
        });

        // Append Team Members as JSON string
        if (formData.teamMembers && formData.teamMembers.length > 0) {
            data.append('teamMembers', JSON.stringify(formData.teamMembers));
        }

        // Append awardGroup specifically
        data.append('awardGroup', mainCategory);

        // Append image/photo if present (For Guru)
        if (uploadMode === 'upload' && formData.photo) {
            data.append('photo', formData.photo);
        } else if (uploadMode === 'camera' && capturedImage) {
            data.append('capturedImage', capturedImage);
        }

        // Append Pitch Deck (For Studentpreneur)
        if (formData.pitchDeck) {
            data.append('pitchDeck', formData.pitchDeck);
        }

        try {
            const apiEndpoint = 'https://new.ssvmtransformingindia.com/public/api/register';
            console.log('Submitting to:', apiEndpoint);
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                }
            });

            const result = await response.json();

            if (response.ok && result.success) {
                const reg = result.data.register_number;

                setRegNumber(reg);

                // ✅ redirect to success page
                navigate(`/success/${mainCategory}/${filterType}?reg=${reg}`);
            } else {
                alert(result.message || 'Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(`Network Error: ${error.message}. Please check if the backend server is running.`);
        } finally {
            setSubmitting(false);
        }
    };

    const renderFormBanner = () => {
        const stepNames = {
            1: 'Step 1: Category Selection',
            2: 'Step 2: Registration Details',
            3: 'Step 3: Final Submission'
        };

        const getBannerTitle = () => {
            if (mainCategory) {
                return mainCategory === 'guru' ? 'INSPIRATIONAL GURU AWARDS' : 'STUDENTPRENEUR AWARDS';
            }
            return 'SSVM AWARDS & RECOGNITION';
        };

        return (
            <div className="form-banner">
                <h1 className="banner-title-en">{getBannerTitle()}</h1>
                <div className="banner-path">
                    {stepNames[step] || 'REGISTRATION FORM'}
                </div>
            </div>
        );
    };

    const renderStepper = () => (
        <div className="stepper-wrapper">
            <div className="stepper-progress">
                {[1, 2, 3].map(num => (
                    <div key={num} className={`step-node ${step === num ? 'active' : step > num ? 'completed' : ''}`}>
                        {step > num ? '✓' : num}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                <span className="step-label">Category</span>
                <span className="step-label">Details</span>
                <span className="step-label">Submission</span>
            </div>
        </div>
    );

    const renderHighlightNote = () => {
        if (!mainCategory) return null;

        let note = "";
        if (mainCategory === 'guru') {
            note = "Previously nominated educators are not eligible to apply again.";
        } else if (mainCategory === 'studentpreneur') {
            note = "Previous winners of the Studentpreneur Award are not eligible to reapply.";
        }

        if (!note) return null;

        return (
            <div className="highlight-note">
                <i className="bi bi-info-circle-fill"></i>
                <p>{note}</p>
            </div>
        );
    };

    const renderStepContent = () => {
        const isNominateOther = formData.nominationType?.includes('other');
        const isGuru = mainCategory === 'guru';

        switch (step) {
            case 1:
                return (
                    <div ref={formRef} key="step1">
                        {!mainCategory ? (
                            <div className="nomination-cards">
                                <div
                                    className="nomination-card"
                                    onClick={() => setMainCategory('guru')}
                                >
                                    <i className="bi bi-person-workspace"></i>
                                    <h4>Inspirational Guru Awards</h4>
                                    <p>Honouring educators who shape mindsets and lives.</p>
                                </div>
                                <div
                                    className="nomination-card"
                                    onClick={() => setMainCategory('studentpreneur')}
                                >
                                    <i className="bi bi-lightbulb"></i>
                                    <h4>Studentpreneur Awards</h4>
                                    <p>Recognizing young innovative minds and student ventures.</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="nomination-cards">
                                    {awardTypes[mainCategory]
                                        .filter(type => {
                                            if (mainCategory === 'studentpreneur') return true;
                                            return !filterType || type.id.startsWith(filterType);
                                        })
                                        .map(type => (
                                            <div
                                                key={type.id}
                                                className={`nomination-card ${formData.nominationType === type.id ? 'selected' : ''}`}
                                                onClick={() => setFormData(prev => ({ ...prev, nominationType: type.id, awardGroup: mainCategory }))}
                                            >
                                                {formData.nominationType === type.id && (
                                                    <span className="selected-badge">Selected</span>
                                                )}
                                                <i className={`bi ${formData.nominationType === type.id ? 'bi-check-circle-fill' : 'bi-check2-circle'}`}></i>
                                                <h4>{type.label}</h4>
                                                <p>{type.desc}</p>
                                            </div>
                                        ))}
                                </div>
                                <div className="form-footer" style={{ marginTop: '30px' }}>
                                    <button type="button" className="nav-btn btn-back" onClick={() => setMainCategory('')}>Back to Main</button>
                                    <button
                                        type="button"
                                        className="nav-btn btn-next"
                                        disabled={!formData.nominationType}
                                        onClick={() => handleStepChange(2)}
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case 2:
                return (
                    <div ref={formRef} key="step2">
                        <div className="registration-form">
                            {isGuru ? (
                                <>
                                    <div className={`input-group ${errors.studentName ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Teacher's First Name" : "Your First Name"} <span className="required-asterisk">*</span></label>
                                        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="First Name" required />
                                        {errors.studentName && <span className="error-text">{errors.studentName}</span>}
                                    </div>
                                    <div className={`input-group ${errors.lastName ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Teacher's Last Name" : "Your Last Name"} <span className="required-asterisk">*</span></label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                                        {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.schoolName ? 'has-error' : ''}`}>
                                        <label>Name of the School <span className="required-asterisk">*</span></label>
                                        <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="School Name" required />
                                        {errors.schoolName && <span className="error-text">{errors.schoolName}</span>}
                                    </div>

                                    <div className={`input-group ${errors.phone ? 'has-error' : ''}`}>
                                        <label>Phone <span className="required-asterisk">*</span></label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" maxLength="10" required />
                                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                                    </div>
                                    <div className={`input-group ${errors.email ? 'has-error' : ''}`}>
                                        <label>Email <span className="required-asterisk">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>
                                    <div className={`input-group full-width ${errors.subjects ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Which subjects do they teach?" : "Which subjects do you teach?"} <span className="required-asterisk">*</span></label>
                                        <input type="text" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="e.g. Mathematics, Science" required />
                                        {errors.subjects && <span className="error-text">{errors.subjects}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.isPETeacher ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Are they a physical educational teacher?" : "Are you a physical educational teacher?"} <span className="required-asterisk">*</span></label>
                                        <div className="radio-group" style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                                <input
                                                    type="radio"
                                                    name="isPETeacher"
                                                    value="yes"
                                                    checked={formData.isPETeacher === 'yes'}
                                                    onChange={handleChange}
                                                /> Yes
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                                <input
                                                    type="radio"
                                                    name="isPETeacher"
                                                    value="no"
                                                    checked={formData.isPETeacher === 'no'}
                                                    onChange={handleChange}
                                                /> No
                                            </label>
                                        </div>
                                        {errors.isPETeacher && <span className="error-text">{errors.isPETeacher}</span>}
                                    </div>

                                    {formData.isPETeacher === 'yes' && (
                                        <div className={`input-group full-width ${errors.petDetails ? 'has-error' : ''}`}>
                                            <label>Please specify sports specialization or achievements <span className="required-asterisk">*</span></label>
                                            <textarea
                                                name="petDetails"
                                                value={formData.petDetails}
                                                onChange={handleChange}
                                                rows="3"
                                                placeholder="e.g. Athletics Coach, National Level Player, etc."
                                                required
                                            ></textarea>
                                            {errors.petDetails && <span className="error-text">{errors.petDetails}</span>}
                                        </div>
                                    )}
                                    <div className={`input-group full-width ${errors.impact ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "How have they impacted their student’s lives?" : "How have you impacted your student’s lives?"} <span className="required-asterisk">*</span></label>
                                        <textarea name="impact" value={formData.impact} onChange={handleChange} rows="3" required></textarea>
                                        {errors.impact && <span className="error-text">{errors.impact}</span>}
                                    </div>
                                    <div className={`input-group full-width ${errors.vision ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Vision for the younger generation" : "Your vision for the younger generation"} <span className="required-asterisk">*</span></label>
                                        <textarea name="vision" value={formData.vision} onChange={handleChange} rows="3" required></textarea>
                                        {errors.vision && <span className="error-text">{errors.vision}</span>}
                                    </div>
                                    <div className={`input-group full-width ${errors.teacherProfile ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Brief profile about the teacher" : "Brief profile about yourself"} <span className="required-asterisk">*</span></label>
                                        <textarea name="teacherProfile" value={formData.teacherProfile} onChange={handleChange} rows="3" required></textarea>
                                        {errors.teacherProfile && <span className="error-text">{errors.teacherProfile}</span>}
                                    </div>
                                    <div className={`input-group full-width ${errors.photo ? 'has-error' : ''}`}>
                                        <label>Candidate Photo {!isNominateOther && <span className="required-asterisk">*</span>}</label>
                                        <div className="upload-choices">
                                            <div
                                                className={`choice-btn ${uploadMode === 'upload' ? 'active' : ''}`}
                                                onClick={() => { setUploadMode('upload'); stopCamera(); setErrors(p => ({ ...p, photo: null })); }}
                                            >
                                                <i className="bi bi-upload"></i> Upload Photo
                                            </div>
                                            <div
                                                className={`choice-btn ${uploadMode === 'camera' ? 'active' : ''}`}
                                                onClick={() => { setUploadMode('camera'); startCamera(); setErrors(p => ({ ...p, photo: null })); }}
                                            >
                                                <i className="bi bi-camera"></i> Live Capture
                                            </div>
                                        </div>

                                        <div className="file-upload-wrapper" style={{ marginTop: '15px' }}>
                                            {uploadMode === 'upload' ? (
                                                <>
                                                    {!uploadPreview ? (
                                                        <div className="file-upload-area">
                                                            <i className="bi bi-image"></i>
                                                            <span>Select photo from device</span>
                                                            <input
                                                                type="file"
                                                                ref={fileInputRef}
                                                                name="photo"
                                                                onChange={(e) => { handleFileChange(e); setErrors(p => ({ ...p, photo: null })); }}
                                                                accept="image/*"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="photo-preview-wrap">
                                                            <img src={uploadPreview} alt="Selected" />
                                                            <div className="preview-overlay">
                                                                <span className="file-name-tag">{fileName}</span>
                                                                <button type="button" className="retake-btn" style={{ background: '#ff4757' }} onClick={removeImage}>
                                                                    <i className="bi bi-trash"></i> Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <div className="camera-wrap">
                                                    {showCamera && (
                                                        <div className="camera-container">
                                                            <video ref={videoRef} autoPlay playsInline className="camera-video"></video>
                                                            <div className="camera-controls">
                                                                <button type="button" className="capture-btn" onClick={() => { capturePhoto(); setErrors(p => ({ ...p, photo: null })); }} title="Capture"></button>
                                                            </div>
                                                            <button type="button" className="camera-close-btn" onClick={stopCamera}>×</button>
                                                        </div>
                                                    )}

                                                    {capturedImage && (
                                                        <div className="photo-preview-wrap">
                                                            <img src={capturedImage} alt="Captured" />
                                                            <div className="preview-overlay">
                                                                <button type="button" className="retake-btn" onClick={startCamera}>
                                                                    <i className="bi bi-arrow-clockwise"></i> Retake
                                                                </button>
                                                                <button type="button" className="retake-btn" style={{ right: '90px', background: '#ff4757' }} onClick={removeImage}>
                                                                    <i className="bi bi-trash"></i> Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {!showCamera && !capturedImage && (
                                                        <div className="file-upload-area" onClick={startCamera}>
                                                            <i className="bi bi-camera-fill"></i>
                                                            <span>Click to start camera</span>
                                                        </div>
                                                    )}
                                                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                                                </div>
                                            )}
                                        </div>
                                        {errors.photo && <span className="error-text">{errors.photo}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.experience ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "How many years of experience do they have?" : "How many years of experience do you have?"} <span className="required-asterisk">*</span></label>
                                        <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Number of years" min="0" required />
                                        {errors.experience && <span className="error-text">{errors.experience}</span>}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`input-group ${errors.studentName ? 'has-error' : ''}`}>
                                        <label>Student Name <span className="required-asterisk">*</span></label>
                                        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Name" required />
                                        {errors.studentName && <span className="error-text">{errors.studentName}</span>}
                                    </div>
                                    <div className={`input-group ${errors.grade ? 'has-error' : ''}`}>
                                        <label>Grade/Class <span className="required-asterisk">*</span></label>
                                        <input type="text" name="grade" value={formData.grade} onChange={handleChange} placeholder="e.g., 10th Grade" required />
                                        {errors.grade && <span className="error-text">{errors.grade}</span>}
                                    </div>

                                    <div className={`input-group ${errors.email ? 'has-error' : ''}`}>
                                        <label>Applicant Email <span className="required-asterisk">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>
                                    <div className={`input-group ${errors.phone ? 'has-error' : ''}`}>
                                        <label>Applicant Mobile No <span className="required-asterisk">*</span></label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" maxLength="10" required />
                                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.schoolName ? 'has-error' : ''}`}>
                                        <label>School Name <span className="required-asterisk">*</span></label>
                                        <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="Full School Name" required />
                                        {errors.schoolName && <span className="error-text">{errors.schoolName}</span>}
                                    </div>

                                    <div className={`input-group ${errors.schoolCity ? 'has-error' : ''}`}>
                                        <label>School City <span className="required-asterisk">*</span></label>
                                        <input type="text" name="schoolCity" value={formData.schoolCity} onChange={handleChange} placeholder="City" required />
                                        {errors.schoolCity && <span className="error-text">{errors.schoolCity}</span>}
                                    </div>
                                    <div className={`input-group ${errors.schoolPhone ? 'has-error' : ''}`}>
                                        <label>School Phone no <span className="required-asterisk">*</span></label>
                                        <input type="tel" name="schoolPhone" value={formData.schoolPhone} onChange={handleChange} placeholder="School Contact" maxLength="10" required />
                                        {errors.schoolPhone && <span className="error-text">{errors.schoolPhone}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.schoolEmail ? 'has-error' : ''}`}>
                                        <label>School email <span className="required-asterisk">*</span></label>
                                        <input type="email" name="schoolEmail" value={formData.schoolEmail} onChange={handleChange} placeholder="school.email@example.com" required />
                                        {errors.schoolEmail && <span className="error-text">{errors.schoolEmail}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.businessIdea ? 'has-error' : ''}`}>
                                        <label>Business Idea / Venture Details <span className="required-asterisk">*</span></label>
                                        <textarea name="businessIdea" value={formData.businessIdea} onChange={handleChange} rows="3" placeholder="Describe your innovative idea..." required></textarea>
                                        {errors.businessIdea && <span className="error-text">{errors.businessIdea}</span>}
                                    </div>

                                    <div className={`input-group full-width ${errors.totalMembers ? 'has-error' : ''}`}>
                                        <label>Total members in Team <span className="required-asterisk">*</span></label>
                                        <select
                                            name="totalMembers"
                                            value={formData.totalMembers}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                            required
                                        >
                                            <option value="1">1 (Solo)</option>
                                            <option value="2">2 Members</option>
                                            <option value="3">3 Members</option>
                                            <option value="4">4 Members</option>
                                            <option value="5">5 Members</option>
                                        </select>
                                        {errors.totalMembers && <span className="error-text">{errors.totalMembers}</span>}
                                    </div>

                                    {formData.teamMembers && formData.teamMembers.map((member, index) => (
                                        <div key={index} className="team-member-provision" style={{ gridColumn: '1 / -1', padding: '20px', background: '#f8f9fa', borderRadius: '12px', marginTop: '10px' }}>
                                            <h5 style={{ marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.1rem' }}>Team Member {index + 2} Details</h5>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                <div className="input-group">
                                                    <label>Member Name <span className="required-asterisk">*</span></label>
                                                    <input
                                                        type="text"
                                                        value={member.name}
                                                        onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                                                        placeholder="Full Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="input-group">
                                                    <label>Member Phone <span className="required-asterisk">*</span></label>
                                                    <input
                                                        type="tel"
                                                        value={member.phone}
                                                        onChange={(e) => handleTeamMemberChange(index, 'phone', e.target.value)}
                                                        placeholder="Phone Number"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className={`input-group ${errors.pitchDeck ? 'has-error' : ''}`}>
                                        <label>Presentation / Pitch Deck (PDF/Image)</label>
                                        <input type="file" name="pitchDeck" onChange={(e) => { setFormData(prev => ({ ...prev, pitchDeck: e.target.files[0] })); setErrors(p => ({ ...p, pitchDeck: null })); }} accept=".pdf,image/*" />
                                        {errors.pitchDeck && <span className="error-text">{errors.pitchDeck}</span>}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="form-footer">
                            <button type="button" className="nav-btn btn-back" onClick={() => handleStepChange(1)}>Back</button>
                            <button type="button" className="nav-btn btn-next" onClick={handleNext}>Next Step</button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div ref={formRef} key="step3">
                        <div className="registration-form">
                            {isGuru ? (
                                <>
                                    {isNominateOther ? (
                                        <>
                                            <div className="section-header full-width" style={{ gridColumn: '1 / -1', marginBottom: '10px' }}>
                                                <h3 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '5px' }}>NOMINATOR DETAILS</h3>
                                            </div>
                                            <div className={`input-group ${errors.nominatorName ? 'has-error' : ''}`}>
                                                <label>Nominator Name <span className="required-asterisk">*</span></label>
                                                <input type="text" name="nominatorName" value={formData.nominatorName} onChange={handleChange} placeholder="Your Name" required />
                                                {errors.nominatorName && <span className="error-text">{errors.nominatorName}</span>}
                                            </div>
                                            <div className={`input-group ${errors.nominatorPhone ? 'has-error' : ''}`}>
                                                <label>Nominator Mobile Number <span className="required-asterisk">*</span></label>
                                                <input type="tel" name="nominatorPhone" value={formData.nominatorPhone} onChange={handleChange} placeholder="Your Phone" maxLength="10" required />
                                                {errors.nominatorPhone && <span className="error-text">{errors.nominatorPhone}</span>}
                                            </div>
                                            <div className={`input-group full-width ${errors.nominatorEmail ? 'has-error' : ''}`}>
                                                <label>Nominator Email <span className="required-asterisk">*</span></label>
                                                <input type="email" name="nominatorEmail" value={formData.nominatorEmail} onChange={handleChange} placeholder="your.email@example.com" required />
                                                {errors.nominatorEmail && <span className="error-text">{errors.nominatorEmail}</span>}
                                            </div>
                                        </>
                                    ) : null}

                                    <div className={`input-group full-width ${errors.nominatorAddress ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Nominator Address" : "Your Address"} <span className="required-asterisk">*</span></label>
                                        <textarea name="nominatorAddress" value={formData.nominatorAddress} onChange={handleChange} rows="2" placeholder="Your Residential Address" required></textarea>
                                        {errors.nominatorAddress && <span className="error-text">{errors.nominatorAddress}</span>}
                                    </div>
                                    <div className={`input-group full-width ${errors.references ? 'has-error' : ''}`}>
                                        <label>{isNominateOther ? "Are there any more references for the nominated teacher?" : "Are there any more references for you?"} <span className="required-asterisk">*</span></label>
                                        <textarea name="references" value={formData.references} onChange={handleChange} rows="2" placeholder="List other references..." required></textarea>
                                        {errors.references && <span className="error-text">{errors.references}</span>}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`input-group full-width ${errors.achievements ? 'has-error' : ''}`}>
                                        <label>Key Achievements (Medals, Honors, Awards) <span className="required-asterisk">*</span></label>
                                        <textarea name="achievements" value={formData.achievements} onChange={handleChange} rows="3" placeholder="Describe your biggest wins..." required></textarea>
                                        {errors.achievements && <span className="error-text">{errors.achievements}</span>}
                                    </div>
                                    <div className={`input-group full-width ${errors.whyJoin ? 'has-error' : ''}`}>
                                        <label>Why do you want to join SSVM Excellence? <span className="required-asterisk">*</span></label>
                                        <textarea name="whyJoin" value={formData.whyJoin} onChange={handleChange} rows="3" placeholder="Tell us about your aspirations..." required></textarea>
                                        {errors.whyJoin && <span className="error-text">{errors.whyJoin}</span>}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="form-footer">
                            <button type="button" className="nav-btn btn-back" onClick={() => handleStepChange(2)}>Back</button>
                            <button
                                type="button"
                                className="nav-btn btn-next"
                                onClick={handleSubmit}
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="registration-section">
            <div className="registration-container">
                {renderFormBanner()}
                {/* {!submitted && renderStepper()} */}

                <div className="form-content-area" style={{ background: '#f8f9fa' }}>
                    <>
                        {renderHighlightNote()}
                        {renderStepContent()}
                    </>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
