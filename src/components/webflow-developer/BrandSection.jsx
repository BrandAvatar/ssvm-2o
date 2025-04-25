// BrandsComponent.js
import React from "react";
import brandsData from "@/constant/webflow-developer/brand-data";
import BrandItem from "@/components/webflow-developer/BrandItem";

const BrandsComponent = () => {
  return (
    <section className="brands-area bg-vampire-black section-padding-top-bottom">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12 section-mini-padding-bottom">
            <h2 className="brands__title">{brandsData.title}</h2>
          </div>
          <div className="col-12">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-3 g-lg-4">
              {brandsData.brands.map((brand) => (
                <BrandItem
                  key={brand.id}
                  brand={brand}
                  className="brands__item--extend"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsComponent;
