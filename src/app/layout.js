// global css File
import "./globals.css";

// bootstrap css File
import "bootstrap/dist/css/bootstrap.min.css";

// swiperJS css File
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

// app scss file
import "@fortawesome/fontawesome-free/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./sass/style.scss";
import "react-modal-video/scss/modal-video.scss";

// Components
import AnimationProvider from "@/components/providers/AnimationProvider";
import BackTopTop from "@/components/BackToTop";

export const metadata = {
  title: "Photo Studio - Personal Portfolio/CV NextJS Template",
  description: "Personal Portfolio/CV NextJS Template",
  keywords:
    "Personal Portfolio, CV, Resume, HTML5 Template, NextJS Template, Freelancer, Web Developer, Designer, Digital Portfolio, Nicholls, Sakebul islam",
  creator: "Sakebul islam",
  other: {
    developer: "Sakebul islam",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimationProvider>{children}</AnimationProvider>
        <BackTopTop smooth top={100} />
      </body>
    </html>
  );
}
