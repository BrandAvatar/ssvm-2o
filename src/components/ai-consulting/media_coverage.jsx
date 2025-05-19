import React from "react";
import Marquee from "react-fast-marquee";

const marqueeImages = [
  "/assets/images/news/Andhra-Jyothi.jpg",
  "/assets/images/news/comail.png",
  "/assets/images/news/Deepika-Emblem.png",
  "/assets/images/news/dinakaran.png",
  "/assets/images/news/dinamalar.png",
  "/assets/images/news/dinamani-logo.webp",
  "/assets/images/news/makkal.jpeg",
  "/assets/images/news/Malai_Murasu.webp",
  "/assets/images/news/malai-malar.webp",
  "/assets/images/news/Malayalamanorama.png",
  "/assets/images/news/Mathrubhumi_English.webp",
  "/assets/images/news/Thanthi.png",
  "/assets/images/news/The-Hindu-Logo.jpg",
  "/assets/images/news/The-Hindu-Tamil.jpg",
  "/assets/images/news/thinathanti.png",
  "/assets/images/news/tm_logo.webp",
  "/assets/images/news/TNIE.webp",
  "/assets/images/news/ttof.png"

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
                height: "100px",
                width: "200px",
                objectFit: "contain",
                borderRadius: "8px",
                backgroundColor: "white",
                padding: "10px",
              }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MediaCoverage;
