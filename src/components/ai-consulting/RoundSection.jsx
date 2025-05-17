import React from "react";
import Marquee from "react-fast-marquee";

const marquee = {
  repeatCount: 5,
  marqueeText: [ "September 1, 2 & 3  Location: SSVM World School, Coimbatore     |      "],
};
const RoundSection = () => {
  return (
    <section className="round-area">

        <Marquee
          pauseOnHover
          speed={150}
          autoFill
          className="round__content overflow-hidden"
        >
          {marquee?.marqueeText?.map((item, index) => (
            <div key={index} className="marquee-item d-flex align-items-center">
              {/* <img src="./assets/images/round-area/shape.png" alt="shape" /> */}
              <h4 className="tag gothic-bold text-white" style={{fontSize: "3.3rem"}}>{item}</h4>
            </div>
          ))}
        </Marquee>

    </section>
  );
};

export default RoundSection;
