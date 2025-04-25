import Link from "next/link";
import React from "react";

const Footer = ({ bottomOnly }) => {
  return (
    <footer
      className="footer__common footer-area before-shape"
      style={{
        backgroundImage:
          "url('./assets/images/footer-area/footer-info-bg.png')",
      }}
    >
      {!bottomOnly && (
        <div className="footer__info section-padding-top-bottom">
          <div className="container container--extend">
            <div className="col-12">
              <span className="short-info">Interested in working with us?</span>
              <h2 className="info-title section-mini-margin-top-bottom">
                <span>LET’S Chat</span>
              </h2>
              <Link
                href="/contact"
                className="common-btn__circle-move btn-hover btn-item"
              >
                Let`s Connect
                <i className="fa-solid fa-arrow-right"></i>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="footer__bottom bg-eerie-black before-shape">
        <div className="container container--extend">
          <div className="row gx-4 gy-2">
            <div className="col-lg-4 order-3 order-lg-1">
              <p className="footer__copyright">
                © 2025. All rights reserved Nicholls
              </p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="footer__back-to-top">
                <Link href="#header" className="section-link">
                  <i className="fas fa-angle-up"></i>
                  Back To Top
                </Link>
              </div>
            </div>
            <div className="col-lg-4 order-2 order-lg-3">
              <div className="footer__nav">
                <ul>
                  <li>
                    <Link href="#"> Terms & Condition </Link>
                  </li>
                  <li>
                    <Link href="#"> Privacy Policy </Link>
                  </li>
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
