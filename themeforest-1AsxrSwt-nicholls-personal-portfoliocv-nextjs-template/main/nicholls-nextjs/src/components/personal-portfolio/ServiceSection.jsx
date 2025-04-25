// components/ServiceSection.jsx

import React from "react";
import ServiceItem from "@/components/personal-portfolio/ServiceItem";
import servicesData from "@/constant/personal-portfolio/services-data";

const ServiceSection = () => {
  const { title, services } = servicesData;
  
  const upServices = services?.filter(service => service?.position === "up");
  const downServices = services?.filter(service => service?.position === "down");

  return (
    <section className="service-area section-padding-top-bottom position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="section__header text-center">
              <h2 className="section__title split-text left text-initial">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container container--extend section-mini-padding-top">
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

export default ServiceSection;