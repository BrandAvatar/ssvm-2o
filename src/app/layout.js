import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./sass/style.scss";
import "react-modal-video/scss/modal-video.scss";

import AnimationProvider from "@/components/providers/AnimationProvider";
import BackTopTop from "@/components/BackToTop";

import Script from "next/script";

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
  title: "SSVM Institutions | Coming Soon - 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/eiq0gee.css" />
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M79FS9NN');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M79FS9NN" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>


        <AnimationProvider>{children}</AnimationProvider>
        <BackTopTop smooth top={100} />
      </body>
    </html>
  );
}
