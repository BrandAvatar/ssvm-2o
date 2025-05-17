import Countdown from "./countdown";
import Leftright from "./Leftright";
import RoundSection from "@/components/ai-consulting/RoundSection";

export default function LightWrap() {
    return (
        <section className='position-relative '>    
        <div className="clip-bg">
                <div className="backdrop">
                    <div className="row justify-content-center position-relative blur">
                    <div className="light"></div>
                        <Countdown />
                        <Leftright />
                        <RoundSection />
                    </div>
                </div>

        </div> 
   
      </section>
    )
}
