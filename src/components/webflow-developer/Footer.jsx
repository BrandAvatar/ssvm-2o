import React from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";


const Footer = () => {
  return (
    <footer className="footer-area section-mini-padding-top bg-vampire-black">
      <div className="footer__top">
        <div className="container container--extend">
          <div className="row justify-content-end">
            <div className="col">
              <div className="footer__top-social">
                <ul>
                  <li>
                    <Link href="#">
                      facebook 
                      <PiArrowUpRightBold size={20}/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      twitter
                      <PiArrowUpRightBold size={20}/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      instagram
                      <PiArrowUpRightBold size={20}/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      dribbble
                      <PiArrowUpRightBold size={20}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__center section-padding-top-bottom">
        <div className="container container--extend">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-6">
              <div className="footer__center-content">
                <h3 className="title">
                  Our vision is to empower users while making their day-to-day
                  activities more effortless.
                </h3>

                <div className="d-flex justify-content-center justify-content-md-start">
                  <Link href="/contact" className="common-btn btn-lime">
                    Schedule a Call
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="footer__center-contact">
                <ul>
                  <li>
                    Email
                    <Link href="mailto:hello@email.com">hello@email.com</Link>
                  </li>
                  <li>
                    phone
                    <Link href="tel:+18001236789">+1 800-1236 789</Link>
                  </li>
                  <li>
                    address
                    <Link href="https://maps.app.goo.gl/JAF3zZEpK4rVmGuD7">
                      Springfield, IL 62704, USA
                    </Link>
                  </li>
                </ul>
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
