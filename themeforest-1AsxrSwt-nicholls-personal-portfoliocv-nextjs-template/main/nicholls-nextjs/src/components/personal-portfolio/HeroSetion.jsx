import React from "react";
import {
  heroContent,
  skillsData,
} from "@/constant/personal-portfolio/hero-data";
import HeroMain from "@/components/personal-portfolio/HeroMain";
import HeroInfo from "@/components/personal-portfolio/HeroInfo";

const HeroSetion = () => {
  return (
    <section className="hero-area">
      <HeroMain skillsData={skillsData} heroContent={heroContent}/>
      <HeroInfo heroContent={heroContent}/>
    </section>
  );
};

export default HeroSetion;
