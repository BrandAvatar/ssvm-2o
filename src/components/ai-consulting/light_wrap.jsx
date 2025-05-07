import Countdown from "./countdown";
import Leftright from "./Leftright";
export default function LightWrap() {
    return (
        <section className='light-bg'>
            <div className="container container--extend">
            <div className="row justify-content-center position-relative">
                <div className="light"></div>
                    <Countdown />
                    <Leftright />
                </div>
            </div>
      </section>
    )
}
