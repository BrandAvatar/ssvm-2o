'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa6';
import servicesData from '@/constant/webflow-developer/service-data';

const ServicesSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveServiceIndex(index);
  };

  return (
    <div className="services-2-area bg-vampire-black section-padding-bottom">
      <div className="container container--extend">
        <div className="row">
          <div className="col-xl-11 col-xxl-10">
            <div className="section__header">
              <span className="section__sub-title pill-sub-title">
              <FaCircle size={6} />
                my Services
              </span>
              <h2 className="section__title text-indent">
                {servicesData.sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-between align-items-center section-mini-margin-top">
          <div className="col-lg-5 col-xl-5">
            <div className="services-2__thumbs">
              {servicesData?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`service-thumb-${index + 1}`}
                  className={`w-100 ${index === activeServiceIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="services-2__lists">
              <ul>
                {servicesData?.services?.map((service, index) => (
                  <li key={index}>
                    <h2
                      className={`service-title ${index === activeServiceIndex ? 'active' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      <Link href={service.link} className={index === activeServiceIndex ? 'active' : ''}>
                        {service.title}
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;