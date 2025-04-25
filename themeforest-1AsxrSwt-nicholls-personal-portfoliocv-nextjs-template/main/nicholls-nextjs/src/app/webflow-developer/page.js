import Header from "@/components/webflow-developer/Header";
import HeroSection from "@/components/webflow-developer/HeroSection";
import AboutSection from "@/components/webflow-developer/AboutSection";
import FunfactSection from "@/components/webflow-developer/FunfactSection";
import SkillsSection from "@/components/webflow-developer/SkillsSection";
import PortfolioSection from "@/components/webflow-developer/PortfolioSection";
import BrandSection from "@/components/webflow-developer/BrandSection";
import ServicesSection from "@/components/webflow-developer/ServicesSection";
import TestimonialSection from "@/components/webflow-developer/TestimonialSection";
import BlogSection from "@/components/webflow-developer/BlogSection";
import Footer from "@/components/webflow-developer/Footer";

export const metadata = {
  title: "Creative Webflow developer - Personal Portfolio/CV NextJS Template",
};

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <HeroSection />
        <AboutSection />
        <FunfactSection />
        <SkillsSection />
        <PortfolioSection />
        <BrandSection />
        <ServicesSection />
        <TestimonialSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
