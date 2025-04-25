import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="contact-area inner-hero-area section-padding-top-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content text-center">
              <h1
                className="hero-title split-text left text-initial m-0"
                data-delay="1"
              >
                Let’s
                <br />
                Work Together
              </h1>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <div className="contact__wrapper">
              <div className="row g-4 g-xl-5">
                <div className="col-12 col-lg-5">
                  <div className="contact__info">
                    <h3 className="title">
                      Contact<br /> information
                    </h3>
                    <p className="sub-title">stay up to date</p>
                    <div className="digital-contacts">
                      <ul>
                        <li>
                          <Link href="tel:+053625080962" className="phone">
                            (+053) 625 08 09 62
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="mailto:admincontact@gmail.com"
                            className="email"
                          >
                            admincontact@gmail.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p className="sub-title">address</p>
                    <div className="address">
                      <p>223 Thatcher Road St, Brooklyn, Mahattan, NY 10463</p>
                    </div>

                    <div className="social-links">
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
                          <Link href="#">linkedin</Link>
                        </li>
                        <li>
                          <Link href="#">dribbble</Link>
                        </li>
                        <li>
                          <Link href="#">behance</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="contact__form-wrapper">
                    <form action="/" className="contact__form">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              id="contact-name"
                              name="contact-name"
                              placeholder="name"
                            />
                            <label htmlFor="contact-name">name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              id="contact-email"
                              name="contact-email"
                              placeholder="email"
                            />
                            <label htmlFor="contact-email">email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="text"
                              id="contact-subject"
                              name="contact-subject"
                              placeholder="subject"
                            />
                            <label htmlFor="contact-subject">subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <textarea
                              id="contact-message"
                              name="contactmessage"
                              placeholder="message"
                              rows="5"
                              cols="50"
                            ></textarea>
                            <label htmlFor="contact-message">message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="common-btn">
                            Send Message
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
