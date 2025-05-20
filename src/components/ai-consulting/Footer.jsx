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
    <footer className="text-black px-5" id="footer">
          <div className="row justify-content-end px-2 py-5 p-md-5 " style={{borderRadius: "10px" , backgroundColor: "#F6F5F5E5"}}>
            
            <div className="col-12 col-lg-6" >
              <a href="/"  >
                <img src="/assets/images/ssvmlogo.png" className="pb-5"/>
                
              </a>
              
             
              <div className="d-flex flex-column flex-lg-row gap-3 gap-md-5 my-5 align-items-center 
              justify-content-center justify-content-lg-start
              ">
                  <h4 className="text-uppercase">soci<span className="stroke-black" >a</span>L Med<span className="stroke-black" >i</span>A</h4>
                  <ul className="d-flex gap-3 align-items-center">
                  {socialLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.id === 'facebook' && <i className="fab fa-facebook-f"></i>}
                        {link.id === 'twitter' && <i className="fab fa-x-twitter"></i>}
                        {link.id === 'instagram' && <i className="fab fa-instagram"></i>}
                        {link.id === 'youtube' && <i className="fab fa-youtube"></i>}
                      </a>
                    </li>
                  ))}
                  </ul>
              </div>

            </div>
            <div className="col-12 col-lg-6">
            <div className="d-flex mt-5 mb-3 gap-1 align-items-center"><img src="/assets/images/ele.png" alt="" className="strike" /><h3 className="text-black">CONTACT US</h3></div>
              <ul>
                <li className="mb-3"><i className="fas fa-map-marker-alt me-2" style={{color: '#F2821E'}}></i><a href="https://maps.google.com/?q=Sf No 72/2, Pattanam, To, Vellalore Rd, Vaigai Nagar, Singanallur, Coimbatore, Tamil Nadu 641016" target="_blank" rel="noopener noreferrer">Sf No 72/2, Pattanam, To, Vellalore Rd, Vaigai Nagar, Singanallur, Coimbatore, Tamil Nadu 641016</a></li>
                <li className="mb-3"><i className="fas fa-envelope me-2" style={{color: '#F2821E'}}></i><a href="mailto:tic@ssvminstitutions.ac.in">tic@ssvminstitutions.ac.in</a></li>
                <li className="mb-3"><i className="fas fa-phone me-2" style={{color: '#F2821E'}}></i><a href="tel:+91 93444 51888">+91 93444 51888</a></li>
               
              </ul>
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
                   <img src={"/assets/newimages/uparrow.png"}  />
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
