import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import BrandsSection from "@/components/portfolio/BrandsSection";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Portfolio || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header />
      <main>
        <PortfolioHeroSection />
        <PortfolioSection />
        <BrandsSection/>
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
