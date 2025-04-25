import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import AboutHero from "@/components/about/AboutHero";
import Achievement from "@/components/about/Achievement";
import Experience from "@/components/about/Experience";
import Award from "@/components/about/Award";
import SkillsSection from "@/components/about/SkillsSection";
import Testimonial from "@/components/about/Testimonial";
import BrandsSection from "@/components/about/BrandsSection";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "About Me || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header />
      <main>
        <AboutHero />
        <Achievement />
        <Experience />
        <Award />
        <SkillsSection />
        <Testimonial />
        <BrandsSection />
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
