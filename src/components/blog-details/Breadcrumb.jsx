import React from "react";

const Breadcrumb = () => {
  return (
    <section className="breadcrumb-area section-padding-top">
      <div className="container container--extend">
        <div className="row justify-content-center">
          <div className="col-sm-9 col-md-10 col-lg-8 col-xxl-6">
            <div className="breadcrumb__header text-center">
              <span className="breadcrumb__sub-title">creative design</span>
              <h1
                className="breadcrumb__title split-text right text-initial"
                data-delay="1"
              >
                Prioritizing Mobile Navigation App Design Challenges
              </h1>
            </div>
          </div>
          <div className="col-12 section-mini-padding-top">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="blog-details__info">
                  <div className="info-item">
                    <img
                      src="./assets/images/blog-details-area/blog-author.png"
                      alt="author"
                    />
                    <div className="item-content">
                      <p className="info-title">Writen by</p>
                      <p className="info">Willomson</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="item-content">
                      <p className="info-title">Published</p>
                      <p className="info">12 February, 2024</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="item-content">
                      <p className="info-title">Viewed</p>
                      <p className="info">3 min read</p>
                    </div>
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

export default Breadcrumb;
