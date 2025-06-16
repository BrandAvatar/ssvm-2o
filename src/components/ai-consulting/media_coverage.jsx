import React from "react";
import Marquee from "react-fast-marquee";

const marqueeImages = [
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/Andhra-Jyothi.jpg",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/comail.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/Deepika-Emblem.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/dinakaran.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/dinamalar.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/dinamani-logo.webp",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/makkal.jpeg",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/Malai_Murasu.webp",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/malai-malar.webp",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/Malayalamanorama.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/Mathrubhumi_English.webp",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/Thanthi.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/The-Hindu-Logo.jpg",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/The-Hindu-Tamil.jpg",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/thinathanti.png",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/tm_logo.webp",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/TNIE.webp",
  "https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/ttof.png"

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
