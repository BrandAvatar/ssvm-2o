import LightMode from "@/components/LightMode";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";

export const metadata = {
  title: "Contact || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header/>
      <main>
        <ContactSection/>
        <FaqSection/>
      </main>
      <Footer/>
    </LightMode>
  );
};

export default Home;
