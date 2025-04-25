import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import Breadcrumb from "@/components/service-details/Breadcrumb";
import ServiceDetails from "@/components/service-details/ServiceDetails";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Service Details || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode className="bg-isabelline">
      <Header className='bg-isabelline'/>
      <main>
        <Breadcrumb />
        <ServiceDetails />
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
