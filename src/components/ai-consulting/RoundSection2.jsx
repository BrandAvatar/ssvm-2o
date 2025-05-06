import React from "react";
import Marquee from "react-fast-marquee";

const marquee = {
  repeatCount: 5,
  marqueeText: [ "Ready to Join? Registration is Open!"],
};
const RoundSection2 = () => {
  return (
    <section className="round-area round2">
      <div className="container-fluid">
        <Marquee
          pauseOnHover
          speed={150}
          autoFill
          className="round__content overflow-hidden"
        >
          {marquee?.marqueeText?.map((item, index) => (
            <div key={index} className="marquee-item d-flex align-items-center">
              <img src="./assets/images/round-area/shape.png" alt="shape" />
              <h4 className="tag gothic-bold" style={{fontSize: "3.3rem"}}>{item}</h4>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default RoundSection2;
