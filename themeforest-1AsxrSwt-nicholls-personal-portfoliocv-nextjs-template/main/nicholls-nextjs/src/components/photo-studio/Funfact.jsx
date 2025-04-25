import CommonCountUp from "@/components/CommonCountUp";
import funfactData from "@/constant/photo-studio/funfactData";

const Funfact = () => {
  return (
    <section className="funfact-area">
      <div className="container section-padding-top-bottom">
        <div className="row">
          <div className="col-12">
            <div className="achievement__items">
              {funfactData.map((item, index) => (
                <div className="achievement__item item-stagger" key={index}>
                  <h3 className="item-counter counter-count ff-six-caps fw-normal text-uppercase gap-1">
                    <CommonCountUp end={item?.value} duration={3} />
                  </h3>
                  <p className="item-info color-dark-gray">
                    <span>{item?.label1}</span>
                    <span>{item?.label2}?</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfact;
