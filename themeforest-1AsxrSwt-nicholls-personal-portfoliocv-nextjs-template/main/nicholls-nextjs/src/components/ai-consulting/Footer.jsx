import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import footerData from "@/constant/ai-consulting/footer-data";

const Footer = () => {
  const {
    marquee,
    centerContent,
    centerContent: { socialLinks,contactButton },
    bottomContent,
  } = footerData;
  return (
    <footer className="footer-area bg-vampire-black">
      <div className="footer__top section-padding-top-bottom">
        <div className="container-fluid">
          <h2 className="section__big-title marquee-text ff-six-caps fw-normal">
            <Marquee pauseOnHover speed={200}>
              {Array(marquee?.repeatCount)
                .fill()
                .map((_, index) => (
                  <Link href={marquee?.link} key={index}>
                    {marquee?.text}&nbsp;-&nbsp;
                  </Link>
                ))}
            </Marquee>
          </h2>
        </div>
      </div>

      <div className="footer__center">
        <div className="container container--extend">
          <div className="row justify-content-end">
            <div className="col-12">
              <div
                className="footer__center-wrapper section-padding-top-bottom"
                style={{
                  backgroundImage: `url(${centerContent?.footerWrapperBg})`,
                }}
              >
                <h4 className="sub-heading">{centerContent?.subHeading}</h4>
                <h2 className="heading">
                  <Link href={`mailto:${centerContent?.email}`}>
                    {centerContent?.email}
                  </Link>
                </h2>
                <div className="footer__top-social footer-social">
                  <ul>
                    {socialLinks?.map((item, index) => (
                      <li key={item?.id}>
                        <Link href={item?.url}>
                          {item?.name}
                          <FiArrowUpRight />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={contactButton?.link}
                  className="common-btn__circle-move btn-hover btn-item bg-lime text-black flex-column flex-sm-row text-center section-mini-margin-top"
                >
                  {contactButton?.text}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom bg-black">
        <div className="container container--extend">
          <div className="row gx-4 gy-2">
            <div className="col-lg-4 order-3 order-lg-1">
              <p className="footer__copyright">
                {bottomContent?.copyright?.symbol}&nbsp;
                {bottomContent?.copyright?.year}&nbsp;
                {bottomContent?.copyright?.text}
              </p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="footer__back-to-top">
                <Link
                  href={bottomContent?.backToTop?.target}
                  className="section-link"
                >
                  <i className="fas fa-angle-up"></i>
                  {bottomContent?.backToTop?.text}
                </Link>
              </div>
            </div>
            <div className="col-lg-4 order-2 order-lg-3">
              <div className="footer__nav">
                <ul>
                  {bottomContent?.footerNav?.map((item) => (
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
