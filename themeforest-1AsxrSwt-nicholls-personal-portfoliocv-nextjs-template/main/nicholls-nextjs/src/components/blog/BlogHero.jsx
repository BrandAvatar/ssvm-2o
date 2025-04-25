import Link from "next/link";
import React from "react";

const BlogHero = () => {
  return (
    <section className="inner-hero-area section-padding-top-bottom text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content">
              <h1
                className="hero-title split-text left text-initial"
                data-delay="0.1"
              >
                Our latest
                <br />
                blogs from nicholls
              </h1>
              <p className="extend">
                Top tips for choosing the perfect design agency for your
                business. Discover the key factors to consider when selecting a
                design agency that aligns with your brand's.
              </p>
              <Link
                href="/contact"
                className="common-btn common-btn--color-reverse"
              >
                Book a Free Call!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
