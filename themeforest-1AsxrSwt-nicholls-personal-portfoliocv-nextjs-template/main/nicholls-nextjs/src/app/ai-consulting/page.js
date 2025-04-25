import Header from "@/components/ai-consulting/Header";
import HeroSection from "@/components/ai-consulting/HeroSection";
import RoundSection from "@/components/ai-consulting/RoundSection";
import AboutSection from "@/components/ai-consulting/AboutSection";
import FunFact from "@/components/ai-consulting/FunFact";
import Services from "@/components/ai-consulting/Services";
import Brands from "@/components/ai-consulting/Brands";
import Portfolio from "@/components/ai-consulting/Portfolio";
import Testimonial from "@/components/ai-consulting/Testimonial";
import Pricing from "@/components/ai-consulting/Pricing";
import Video from "@/components/ai-consulting/Video";
import BlogSection from "@/components/ai-consulting/BlogSection";
import Footer from "@/components/ai-consulting/Footer";

export const metadata = {
  title: "Ai Consulting - Personal Portfolio/CV HTML Template",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RoundSection />
        <AboutSection />
        <FunFact />
        <Services />
        <Brands />
        <Portfolio />
        <Testimonial />
        <Pricing />
        <Video />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
