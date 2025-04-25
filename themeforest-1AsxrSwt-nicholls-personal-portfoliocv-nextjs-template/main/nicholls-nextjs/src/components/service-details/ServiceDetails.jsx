import React from "react";
import { serviceDetailsData } from "@/constant/service-details/serviceDetailsData";
import { serviceWidget } from "@/constant/widget/widget-data";
import ServiceWidget from "@/components/common/ServiceWidget";
import ContactWidget from "@/components/common/ContactWidget";

const ServiceDetails = () => {
  const { htmlContent, sidebar } = serviceDetailsData;

  return (
    <section className="service-details-area section-mini-padding-top section-padding-bottom overflow-hidden">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-8 col-xxl-8">
            <React.Fragment>
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </React.Fragment>
          </div>
          <div className="col-lg-4 col-xxl-4">
            <div className="widget__sidebar">
              <ServiceWidget services={serviceWidget} />
              <ContactWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
