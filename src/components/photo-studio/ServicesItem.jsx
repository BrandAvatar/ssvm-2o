import React from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

const ServicesItem = ({service}) => {
  return (
    <div className="services-4__item">
      <h2 className="service-title">
        <Link href="/service-details">{service?.title}</Link>
      </h2>
      <figure className="service-thumb">
        <img
          src={service?.image}
          alt={service?.alt}
        />
      </figure>
      <Link href={service?.link} className="common-btn__circle">
        <PiArrowUpRightBold />
      </Link>
    </div>
  );
};

export default ServicesItem;
