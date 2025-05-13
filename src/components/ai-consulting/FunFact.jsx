import React from "react";
import CommonCountUp from "@/components/CommonCountUp";
import funFactsData from "@/constant/ai-consulting/funFacts-data";
import Image from "next/image";
const FunFact = () => {
  return (
    <section className="funfact-2-area section-padding-bottom overflow-hidden">
      <div className="container container--extend">
        <div className="row row-cols-4 g-4">
          {funFactsData?.map((fact) => (  
            <div className="" key={fact?.id}>
              <div className="funfact-2__item bg-ssvm-grey item-popup d-flex justify-content-center align-items-center flex-col">
                <h2 className="item-counter counter-count">
                  {/* <CommonCountUp end={fact?.value} duration={3} /> */}
                  <Image src={fact?.img} alt=""  width={100} height={100}/>
                  {/* <em>{fact?.suffix}</em> */}
                </h2>
                <p className="text-center">
                  <span className="text-white">{fact?.label.split(" ")[0]}</span><br/>
                  <span className="text-white">{fact?.label.split(" ").slice(1).join(" ")}</span>
                </p>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default FunFact;
