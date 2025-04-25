import CommonCountUp from "@/components/CommonCountUp";

const Funfact = () => {
  return (
    <section className="funfact-area">
      <div className="container section-padding-top-bottom">
        <div className="row">
          <div className="col-12">
            <div className="achievement__items">
              <div className="achievement__item item-stagger">
                <h3 className="item-counter counter-count ff-six-caps fw-normal text-uppercase gap-1">
                  <CommonCountUp
                    end={15}
                    duration={3}
                  />
                </h3>
                <p className="item-info color-dark-gray">
                  <span> Awards </span>
                  <span> and recognition </span>
                </p>
              </div>
              <div className="achievement__item item-stagger">
                <h3 className="item-counter counter-count ff-six-caps fw-normal text-uppercase gap-1">
                  <CommonCountUp end={5000} duration={3} />
                </h3>
                <p className="item-info color-dark-gray">
                  <span>Projects</span>
                  <span>completed</span>
                </p>
              </div>
              <div className="achievement__item item-stagger">
                <h3 className="item-counter counter-count ff-six-caps fw-normal text-uppercase gap-1">
                  <CommonCountUp end={3000} duration={3} />
                </h3>
                <p className="item-info color-dark-gray">
                  <span>Happy</span>
                  <span>customers</span>
                </p>
              </div>
              <div className="achievement__item item-stagger">
                <h3 className="item-counter counter-count ff-six-caps fw-normal text-uppercase gap-1">
                  <CommonCountUp end={15} duration={3} />
                </h3>
                <p className="item-info color-dark-gray">
                  <span>Years</span>
                  <span>experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfact;
