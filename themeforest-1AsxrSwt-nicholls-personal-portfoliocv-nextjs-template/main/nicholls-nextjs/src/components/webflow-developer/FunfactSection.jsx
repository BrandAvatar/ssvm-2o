import React from "react";
import Marquee from "react-fast-marquee";
import marqueeData from "@/constant/webflow-developer/marquee-data";
import Link from "next/link";

const FunfactSection = () => {
  return (
    <div className="funfact-area section-padding-top-bottom overflow-hidden">
      <div className="container-fluid p-md-0">
        <div className="funfact__marque">
          <Marquee
            direction="left"
            speed={100}
            className="funfact__marque-wrapper left overflow-hidden"
          >
            <Link
              href="/portfolio"
              className="marquee-text d-block"
              data-direction="left"
              data-speed="100"
            >
              {marqueeData?.marqueeLeft}
            </Link>
          </Marquee>
          <Marquee
            direction="right"
            speed={100}
            className="funfact__marque-wrapper right overflow-hidden"
          >
            <Link
              href="/portfolio"
              className="marquee-text d-block"
              data-direction="left"
              data-speed="100"
            >
              {marqueeData?.marqueeRight}
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default FunfactSection;
