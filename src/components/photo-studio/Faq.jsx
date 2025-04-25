import FaqAccordion from '@/components/photo-studio/FaqAccordion';

const Faq = () => {
  return (
    <div className="faq-2-area bg-smoky-black section-padding-top-bottom">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
             <h2
              className="section__title ff-six-caps fs-200 fw-normal title-stretch"
              data-stretch="stretch-up"
            >
              FREQUENTLY ASKED QUESTION
            </h2>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <FaqAccordion/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
