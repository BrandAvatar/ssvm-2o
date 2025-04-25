import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";
import services from "@/constant/photo-studio/services-items";
import ServicesItem from "@/components/photo-studio/ServicesItem";

const Services = () => {
  return (
    <section className="services-4-area section-padding-top-bottom overflow-hidden bg-white">
      <div className="container container--extend">
        <div className="row align-items-center services-4__header-row g-4">
          <div className="col-md-6">
            <div className="section__header d-flex justify-content-center justify-content-md-start gap-2">
              <span className="headr-icon">
                <BsArrowDown />
              </span>
              <h4 className="section__title">Our Services</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="section__header text-center text-md-end">
              <Link href="/service" className="common-btn btn-lime">
                See All Project
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 services-4__item-wrapper">
            {services.map((service) => (
              <ServicesItem key={service?.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
