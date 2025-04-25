import LightMode from "@/components/LightMode";
import HeroSetion from "@/components/personal-portfolio/HeroSetion";
import AboutMain from "@/components/personal-portfolio/AboutMain";
import ServiceSection from "@/components/personal-portfolio/ServiceSection";
import PortfolioSection from "@/components/personal-portfolio/PortfolioSection";
import BrandsSection from "@/components/personal-portfolio/BrandsSection";
import ImageSection from "@/components/personal-portfolio/ImageSection";
import AboutSection from "@/components/personal-portfolio/AboutSection";
import Testimonial from "@/components/personal-portfolio/Testimonial";
import BlogSection from "@/components/personal-portfolio/BlogSection";
import Footer from "@/components/personal-portfolio/Footer";
import Header from "@/components/personal-portfolio/Header";
import LinesContainer from "@/components/personal-portfolio/LinesContainer";

export const metadata = {
  title: "Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header/>
      <main className="position-relative">
        <LinesContainer/>
        <HeroSetion/>
        <AboutMain/>
        <ServiceSection/>
        <PortfolioSection />
        <BrandsSection />
        <ImageSection />
        <AboutSection />
        <Testimonial />
        <BlogSection />
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
