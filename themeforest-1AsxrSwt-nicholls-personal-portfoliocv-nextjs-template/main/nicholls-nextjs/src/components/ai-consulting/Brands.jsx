import React from "react";
import CommonCountUp from "@/components/CommonCountUp";
import brandsData from "@/constant/ai-consulting/brandsData";

const Brands = () => {
  const { header,brands } = brandsData;
  return (
    <section className="brands-2-area section-padding-top-bottom bg-white">
      <div className="container container--extend">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6">
            <div className="section__header">
              <span className="section__sub-title code text-black">
                {header?.subTitle}
                <CommonCountUp
                  end={header?.brandsNumber}
                  duration={3}
                />
                &nbsp;
                {header?.endText}
              </span>
              <h2 className="section__title text-black split-text left text-initial">
                {header?.title}
              </h2>
              <figure className="brands-2__thumb section-mini-padding-top">
                <img
                  src="./assets/images/brand-area/brand-2-thumb.png"
                  alt="brand-thumb"
                  className="w-100 reveal left"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="brands-2__item-row">
              {brands?.map((brand, index) => (
                <div key={index} className="brands-2__item">
                  {brand.src ? (
                    <img src={brand.src} alt={brand.alt} />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
