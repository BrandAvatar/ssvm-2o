import Countdown from "./countdown";
import Leftright from "./Leftright";
import RoundSection from "@/components/ai-consulting/RoundSection";

export default function LightWrap() {
    return (
        <section className='position-relative'>
            <div className="btmlight"></div>
            <div className="blur-bg">
                <div className="container container--extend">
                <div className="row justify-content-center position-relative">
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
