import React from "react";
import Marquee from "react-fast-marquee";

const marqueeImages = [
  "/assets/images/mediathumb.png",
  "/assets/images/mediathumb.png",
  "/assets/images/mediathumb.png",
  "/assets/images/mediathumb.png",
  "/assets/images/mediathumb.png",
  "/assets/images/mediathumb.png",
];

const MediaCoverage = () => {
  return (
    <section className="media-coverage-section py-5">
      <Marquee
        pauseOnHover
        speed={150}
        gradient={false}
        className="overflow-hidden"
      >
        {marqueeImages.map((image, index) => (
          <div key={index} className="mx-4">
            <img 
              src={image} 
              alt={`Media coverage ${index + 1}`} 
              style={{
                height: "200px",
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MediaCoverage;
