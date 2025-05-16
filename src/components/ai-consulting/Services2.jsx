import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";
import services from "@/constant/photo-studio/services-items";
import ServicesItem from "@/components/photo-studio/ServicesItem";

const Services2 = () => {
  return (
    <section className="section-padding-top-bottom overflow-hidden bg-white" id="entertainment">
      <div className="container">
        <div className="row">
          <h2 className="text-uppercase text-center text-black pb-5">entertainment & workshop</h2>
          
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

export default Services2;
