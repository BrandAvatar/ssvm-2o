// SuccessLayout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessLayout = ({ title, message, regNumber, category, type }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.fbq) {
            const eventName = "Lead"; // keep standard event for Meta optimization

            window.fbq('track', eventName, {
                content_name: title,
                content_category: category,
                form_type: type,
                registration_id: regNumber,
                value: 1,
                currency: "INR"
            });

            // 🔥 OPTIONAL: Custom Event (VERY USEFUL)
            window.fbq('trackCustom', 'FormSubmitted', {
                category,
                type,
                registration_id: regNumber
            });
        }

        // ✅ GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "form_success",
            regNumber,
            category,
            type
        });

    }, [regNumber, category, type, title]);

    return (
        <section className="registration-section">
            <div className="registration-container">
                <div className="success-card">
                    <div className="success-icon">✓</div>

                    <h2 style={{ fontSize: "48px", color: "var(--primary)" }}>
                        {title}
                    </h2>

                    <p style={{ fontSize: "18px", margin: "15px 0" }}>
                        {message}
                    </p>

                    <div className="reg-number-display">
                        <span>Your Registration Number</span>
                        <div style={{ fontSize: "28px", fontWeight: "800" }}>
                            {regNumber}
                        </div>
                    </div>

                    <button
                        className="nav-btn btn-next"
                        onClick={() => navigate("/")}
                    >
                        Return Home
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessLayout;