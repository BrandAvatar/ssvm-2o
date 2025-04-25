import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer-area section-padding-top bg-vampire-black">
      <div className="footer__top section-padding-bottom">
        <div className="container container--extend">
          <div className="row justify-content-end">
            <div className="col-12">
              <div className="footer__top-header text-center">
                <h2
                  className="footer-title ff-six-caps title-stretch"
                  data-stretch="stretch-up"
                >
                  Contact me today!
                </h2>
                <Link
                  href="mailto:hello@dominnames.com"
                  className="footer-mail"
                >
                  hello@dominnames.com
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom bg-black">
        <div className="container container--extend">
          <div className="row gx-4 gy-3">
            <div className="col-lg-4 order-3 order-lg-1">
              <p className="footer__copyright">
                © 2025. All rights reserved Nicholls
              </p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="footer__bottom-social">
                <ul>
                  <li>
                    <Link href="#">facebook</Link>
                  </li>
                  <li>
                    <Link href="#">twitter</Link>
                  </li>
                  <li>
                    <Link href="#">instagram</Link>
                  </li>
                  <li>
                    <Link href="#">dribbble</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 order-2 order-lg-3">
              <div className="footer__nav">
                <ul>
                  <li>
                    <Link href="#">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
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
