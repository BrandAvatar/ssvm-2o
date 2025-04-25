import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import Breadcrumb from "@/components/portfolio-details/Breadcrumb";
import PortfolioDetails from "@/components/portfolio-details/PortfolioDetails";
import Footer from "@/components/common/Footer";

export const metadata = {
  title:
    "Portfolio Details || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode className="bg-isabelline">
      <Header className="bg-isabelline"/>
      <main>
        <Breadcrumb />
        <PortfolioDetails/>
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
