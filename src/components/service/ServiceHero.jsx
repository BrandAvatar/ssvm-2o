import Link from "next/link";
import React from "react";
import { heroData } from "@/constant/service/serviceHero-data";
import servicesData from "@/constant/service/services-data";
import ServiceItem from "@/components/service/ServiceItem";
const ServiceHero = () => {
  const upServices = servicesData?.filter(
    (service) => service?.position === "up"
  );
  const downServices = servicesData?.filter(
    (service) => service?.position === "down"
  );

  return (
    <section className="service-main-area inner-hero-area section-padding-top-bottom text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content">
              <h1 className="hero-title split-text right" data-delay="1">
                {heroData?.title?.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
              <p>{heroData?.description}</p>
              <Link
                href={heroData?.ctaButton?.link}
                className="common-btn common-btn--color-reverse"
              >
                {heroData?.ctaButton?.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container container--extend section-padding-top">
        <div className="row">
          <div className="col-12">
            <div className="service__items">
              <div className="service__items-up">
                {upServices.map((service) => (
                  <ServiceItem
                    key={service?.id}
                    title={service?.title}
                    description={service?.description}
                    link={service?.link}
                  />
                ))}
              </div>
              <div className="service__items-down">
                {downServices.map((service) => (
                  <ServiceItem
                    key={service?.id}
                    title={service?.title}
                    description={service?.description}
                    link={service?.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
