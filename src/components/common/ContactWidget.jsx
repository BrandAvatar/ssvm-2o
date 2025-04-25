import React from "react";
import Link from "next/link";

const ContactWidget = ({ contactImage }) => {
  return (
    <div className="widget widget__contact">
      <div className="contact-content reveal zoom-out">
        <img src='./assets/images/widget/widget-contact-img.png' alt="widget-contact-img" />
        <div className="btn-wrapper">
          <Link href="/contact" className="common-btn">
            Get In Touch
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
