import Header from "@/components/ai-consulting/Header";
import HeroSection from "@/components/ai-consulting/HeroSection";
import RoundSection from "@/components/ai-consulting/RoundSection";
import RoundSection2 from "@/components/ai-consulting/RoundSection2";
import AboutSection from "@/components/ai-consulting/AboutSection";
import Awards from "@/components/ai-consulting/Awards";
import FunFact from "@/components/ai-consulting/FunFact";
import Services from "@/components/ai-consulting/Services";
import Brands from "@/components/ai-consulting/Brands";
import Portfolio from "@/components/ai-consulting/Portfolio";
import Testimonial from "@/components/ai-consulting/Testimonial";
import Pricing from "@/components/ai-consulting/Pricing";
import Video from "@/components/ai-consulting/Video";
import BlogSection from "@/components/ai-consulting/BlogSection";
import Footer from "@/components/ai-consulting/Footer";
import Mam from "@/components/ai-consulting/Mam";
import Leftright from "@/components/ai-consulting/Leftright";
import Services2 from "@/components/ai-consulting/Services2";

export const metadata = {
  title: "SSVM Institutions | Transforming India Conclave 2025 – Humanity and AI co creating Our World Today",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Leftright />
        <RoundSection />
        <Mam />
        <AboutSection />
        <FunFact />
        <RoundSection2 />
        <Awards />
        <Services2 />
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
