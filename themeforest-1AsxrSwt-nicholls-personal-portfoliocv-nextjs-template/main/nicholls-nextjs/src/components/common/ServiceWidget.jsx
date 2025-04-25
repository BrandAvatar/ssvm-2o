import React from "react";

const ServiceWidget = ({ services }) => {
  return (
    <div className="widget widget__service">
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-item item-popup ${index === 0 ? "active" : ""}`}
        >
          <p>{service}</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      ))}
    </div>
  );
};

export default ServiceWidget;
