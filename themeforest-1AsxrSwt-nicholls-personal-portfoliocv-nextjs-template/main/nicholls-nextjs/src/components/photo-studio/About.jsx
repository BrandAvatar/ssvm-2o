import React from "react";
import aboutData from "@/constant/photo-studio/aboutData";
const About = () => {
  return (
    <section className="about-4-area section-mini-padding-top" id="about-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h3 className="section__title">{aboutData}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
