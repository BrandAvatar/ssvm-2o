import Header from "@/components/ai-consulting/Header";
import Footer from "@/components/ai-consulting/Footer";
import GlitchText from "@/components/GlitchText";

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/assets/images/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/assets/images/favicon.png',
    },
  ],
  title: "SSVM Institutions | Coming Soon - 2026",
};

export default function ThankYou() {
  return (
    <div>

      <div className="container">
        <a href="#" className="text-center text-decoration-none bg-white p-3 rounded-3 d-block " style={{ margin: "10px auto" }}>
          <img src="/assets/images/ssvmlogo.png" alt="SSVM Logo" className="img-fluid" />
        </a>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
          <div className="col-12 text-center">
            <GlitchText text="Thank You" />
            <h4 className="mt-4">for Submitting Your Details</h4>
          </div>
        </div>
        <div className="copy-right text-center p-1  rounded-3 d-block" style={{ backgroundColor: "#a3a3a3 !important" }}>
          <p className="text-black">Copyright © 2025 SSVM Group of Institutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
