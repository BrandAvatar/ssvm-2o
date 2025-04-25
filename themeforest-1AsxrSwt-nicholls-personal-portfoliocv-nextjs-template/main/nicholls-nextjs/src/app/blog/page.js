import LightMode from "@/components/LightMode";
import Header from "@/components/common/Header";
import BlogHero from "@/components/blog/BlogHero";
import BlogSection from "@/components/blog/BlogSection";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Blog || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode>
      <Header />
      <main>
        <BlogHero/>
        <BlogSection/>
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
