import RoundSection_copy from "./RoundSection_copy";
import Media_coverage from "./media_coverage";

export default function Nokia() {
  return (
    <section className=" bg-white">
            <img src="/assets/images/hero-area/shape-dark-1.svg" alt="Decorative shape 1
            " style={{transform: 'rotate(180deg) translateY(-1px)',}} />

        <section className=" bg-black position-relative py-5 overflow-hidden">
                <RoundSection_copy />
        </section>


        <div className="py-5 bg-black">
            <h2 className="text-white text-center py-5 text-uppercase">Media coverage</h2>
            <Media_coverage />
        </div>
    </section>
  );
}
