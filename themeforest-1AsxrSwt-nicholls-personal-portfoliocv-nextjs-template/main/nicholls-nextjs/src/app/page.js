import Header from "@/components/photo-studio/Header";
import HeroSection from "@/components/photo-studio/Hero";
import AboutSection from "@/components/photo-studio/About";
import FunfactSection from "@/components/photo-studio/Funfact";
import VideoSection from "@/components/photo-studio/Video";
import Award from "@/components/photo-studio/Award";
import Portfolio from "@/components/photo-studio/Portfolio";
import Brands from "@/components/photo-studio/Brands";
import Services from "@/components/photo-studio/Services";
import Testimonial from "@/components/photo-studio/Testimonial";
import Faq from "@/components/photo-studio/Faq";
import Blog from "@/components/photo-studio/Blog";
import Instagram from "@/components/photo-studio/Instagram";
import Footer from "@/components/photo-studio/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FunfactSection />
        <VideoSection />
        <Award />
        <Portfolio />
        <Brands />
        <Services />
        <Testimonial />
        <Faq />
        <Blog />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
