import LightMode from "@/components/LightMode";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found || Nicholls - Personal Portfolio/CV NextJS Template",
};

const NotFound = () => {
  return (
    <LightMode className="d-flex flex-column justify-content-between">
      <Header />
      <main>
        <div className="error-area section-mini-padding-top-bottom">
          <div className="container text-center">
            <Image
              src="/assets/images/404.png"
              alt="Page Not Found"
              priority
              width={648}
              height={648}
              style={{ maxWidth: "100%", height: "auto", marginInline: "auto" }}
            />
          </div>
        </div>
      </main>
      <Footer bottomOnly />
    </LightMode>
  );
};

export default NotFound;
