import Header from "@/components/ai-consulting/Header";
import Footer from "@/components/ai-consulting/Footer";
import GlitchText from "@/components/GlitchText";

export default function ThankYou() {
  return (
    <div>
         <Header />
         <div className="container">
            <div className="row d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="col-12 text-center">
                    <GlitchText text="Thank You" />
                    <h4 className="mt-4">for Submitting Your Details</h4>
                </div>
            </div>
         </div>
         <Footer />
    </div>
  );
}
