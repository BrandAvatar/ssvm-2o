import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const regNumber = params.get("reg") || "";
    const category = params.get("category") || "";

    return (
        <section className="registration-section">
            <div className="registration-container">
                <div className="success-card">
                    <div className="success-icon">✓</div>

                    <h2 style={{ fontSize: "48px", color: "var(--primary)" }}>
                        Application Received!
                    </h2>

                    <p style={{ fontSize: "18px", margin: "15px 0" }}>
                        A confirmation email has been sent to your registered email address.
                    </p>

                    <div className="reg-number-display">
                        <span>Your Registration Number</span>
                        <div style={{ fontSize: "28px", fontWeight: "800" }}>
                            {regNumber}
                        </div>
                    </div>

                    <p style={{ marginTop: "20px", fontSize: "16px" }}>
                        Thank you for applying to{" "}
                        {category === "guru"
                            ? "SSVM Inspirational Guru Awards"
                            : "SSVM Studentpreneur Awards"}.
                    </p>

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

export default SuccessPage;