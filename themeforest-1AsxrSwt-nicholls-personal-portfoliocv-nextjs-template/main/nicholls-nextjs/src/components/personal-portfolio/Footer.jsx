import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import footerData from "@/constant/personal-portfolio/footer-data";

const Footer = () => {
  const renderSocialLinks = () => {
    return footerData?.centerSection?.socialLinks?.map((link) => (
      <li className="border-bottom" key={link?.id}>
        <Link href={link?.url}>{link?.name}</Link>
      </li>
    ));
  };

  return (
    <footer className="footer-area section-padding-top bg-eerie-black before-shape">
      <div className="footer__top">
        <div className="overflow-hidden">
          <Marquee pauseOnHover speed={200}>
            {Array(footerData?.marquee?.repeatCount)
              .fill()
              .map((_, index) => (
                <h2
                  key={index}
                  className="section__big-title color-white marquee-text overflow-hidden"
                >
                  <Link href={footerData?.marquee?.link}>
                    {footerData?.marquee?.text}&nbsp;-&nbsp;
                    <span className="text-stroke">
                      {footerData?.marquee?.text}&nbsp;-&nbsp;
                    </span>
                  </Link>
                </h2>
              ))}
          </Marquee>
        </div>
      </div>
      <div className="footer__center border-top border-bottom section-mini-padding-top-bottom">
        <div className="container container--extend">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-md-6 col-xl-5 overflow-hidden">
              <div className="footer__avatar-thumb">
                <div className="circle-avatar reveal right overflow-hidden">
                  <img
                    src={footerData?.centerSection?.avatar?.src}
                    alt={footerData?.centerSection?.avatar?.alt}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="footer__center-content">
                <ul>{renderSocialLinks()}</ul>
                <Link
                  href={footerData?.centerSection?.hireButton?.link}
                  className="hore-me"
                >
                  {footerData?.centerSection?.hireButton?.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container container--extend">
          <div className="row gx-4 gy-2">
            <div className="col-lg-4 order-3 order-lg-1">
              <p className="footer__copyright">
                {footerData?.bottomSection?.copyright?.text}
              </p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="footer__back-to-top">
                <Link href="#header" className="section-link">
                  <i className="fas fa-angle-up"></i>
                  {footerData?.bottomSection?.backToTop?.text}
                </Link>
              </div>
            </div>
            <div className="col-lg-4 order-2 order-lg-3">
              <div className="footer__nav">
                <ul>
                  {footerData?.bottomSection?.footerNav?.map((item) => (
                    <li key={item?.id}>
                      <Link href={item?.url}>{item?.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
