import React from "react";
import Marquee from "react-fast-marquee";

const marquee = {
  repeatCount: 5,
  marqueeText: ["Skilled Experts", "Creativity", "Magical World"],
};
const RoundSection = () => {
  return (
    <section className="round-area">
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
              <h4 className="tag">{item}</h4>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default RoundSection;
