import React from "react";
import Marquee from "react-fast-marquee";

const marquee = {
  repeatCount: 5,
  marqueeText: [ "September 1, 2 & 3  Location: SSVM World School, Coimbatore‎ | ‎ "],
};
const RoundSection_copy = () => {
  return (
    <>
    <section style={{transform: 'rotate(3deg)', top: '40%' }} 
    className="position-absolute "
    >
      
        <Marquee
        
          speed={100}
          autoFill
          className="round__content  py-3 -z-5"
        >
          {marquee?.marqueeText?.map((item, index) => (
            <div key={index} className="marquee-item d-flex align-items-center ">
              {/* <img src="./assets/images/round-area/shape.png" alt="shape" /> */}
              <h4 
                className="tag gothic-bold text-stroke" 
                style={{
                  fontSize: "4.3rem",
                  background: "linear-gradient(90deg, #EE5C28 0%, #FAD208 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >{item}</h4>
            </div>
          ))}
        </Marquee>
        <div className="z-5 ">
        <Marquee
          direction="right"
          speed={100}
          autoFill
          className="round__content overflow-hidden py-3 z-5  "
        >
          {marquee?.marqueeText?.map((item, index) => (
            <div key={index} className="marquee-item d-flex align-items-center ">
              {/* <img src="./assets/images/round-area/shape.png" alt="shape" /> */}
               <h4 
                className="tag gothic-bold text-stroke" 
                style={{
                  fontSize: "4.3rem",
                  background: "linear-gradient(90deg, #EE5C28 0%, #FAD208 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >{item}</h4>
            </div>
          ))}
        </Marquee>
        </div>
    </section>
        <div className="shape  bg-white ">
          <img src="./assets/images/aitouch.gif" alt="" />
        </div>
          <style>
            {`
              .shape {
                height: 500px;
                width: 400px;
                margin: 0 auto;
                border-radius: 80px;
                img{
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                  border-radius: 76px;
                }
              }
            `}
          </style>
    </>
  );
};

export default RoundSection_copy;
