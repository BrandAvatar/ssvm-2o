import React from "react";
import Link from "next/link";
import breadcrumbData from "@/constant/portfolio-details/breadcrumb-data";

const Breadcrumb = () => {
  const { subTitle, title, client, category, date, location, social } =
    breadcrumbData;

  return (
    <section className="breadcrumb-area section-padding-top">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb__header text-center">
              <span className="breadcrumb__sub-title">{subTitle}</span>
              <h1
                className="breadcrumb__title split-text left text-initial"
                data-delay="1"
              >
                {title}
              </h1>
            </div>
          </div>
          <div className="col-12 section-mini-padding-top">
            <div className="portfolio-details__info">
              <div className="info-item">
                <p className="info-title">Client :</p>
                <p className="info">{client}</p>
              </div>
              <div className="info-item border-sm-left">
                <p className="info-title">Category :</p>
                <p className="info">{category}</p>
              </div>
              <div className="info-item border-md-left">
                <p className="info-title">Date :</p>
                <p className="info">{date}</p>
              </div>
              <div className="info-item border-sm-left border-md-0 border-xl-left">
                <p className="info-title">Location :</p>
                <p className="info">{location}</p>
              </div>
              <div className="info-item border-sm-right border-md-left border-md-right-0">
                <p className="info-title">Follow :</p>
                <div className="info-social">
                  <ul>
                    {social.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>
                          <i className={item.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
