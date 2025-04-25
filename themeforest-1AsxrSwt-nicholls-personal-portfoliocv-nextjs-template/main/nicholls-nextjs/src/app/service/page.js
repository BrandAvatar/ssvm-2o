import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import ServiceHero from "@/components/service/ServiceHero";
import Testimonial from "@/components/service/Testimonial";
import PricingSection from "@/components/service/PricingSection";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Service || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header />
      <main>
        <ServiceHero/>
        <Testimonial/>
        <PricingSection/>
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
