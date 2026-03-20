import Header from "@/components/ai-consulting/Header";
import HeroSection from "@/components/ai-consulting/HeroSection";
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
import Countdown from "@/components/ai-consulting/countdown";
import LightWrap from "@/components/ai-consulting/light_wrap";
import BoxGridSection from "@/components/ai-consulting/box-grid-section";
import Aboutssvm from "@/components/ai-consulting/Aboutssvm";
import PreviousEditions from "@/components/ai-consulting/PreviousEditions";
import Nokia from "@/components/ai-consulting/nokia";
import HeroPhotostudioSlider from "@/components/photo-studio/HeroPhotostudioSlider";

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/assets/images/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/assets/images/favicon.png',
    },
  ],
  title: "SSVM Institutions | Transforming India Conclave 2025 – Humanity and AI co creating Our World Today",
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main style={{ 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden', 
        height: '100vh', 
        width: '100vw', 
        boxSizing: 'border-box',
        background: '#dbdbdb', // Solid grey matching the image
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed', // Use fixed to ensure it covers everything
        top: 0,
        left: 0,
        zIndex: 9999
      }}>
        <img
          src="/2026/coming-soon.jpeg"
          alt="Coming Soon"
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
        />
        {/* <HeroSection />
        <LightWrap />
        <Mam />
        <BoxGridSection /> */}

        {/* <AboutSection />
        <FunFact />
        <RoundSection2 />
        <HeroPhotostudioSlider />
        <Awards />
        <Services2 />
        <Aboutssvm />
        <Nokia />
        <PreviousEditions /> */}

      </main>
      {/* <Footer /> */}
    </>
  );
}
