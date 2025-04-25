'use client'
import React from "react";
import { Col, Accordion } from "react-bootstrap";
import faqData from "@/constant/contact/faq-data";

const FaqSection = () => {
  return (
    // <section className="faq-area section-padding-top-bottom bg-ecedde before-shape after-shape">
    //   <div className="container">
    //     <div className="row justify-content-center text-center section-mini-padding-bottom">
    //       <div className="col-md-9 col-lg-8">
    //         <div className="section__header">
    //           <h2 className="section__title split-text left text-initial">
    //             Common Questions
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="faq__accordion accordion" id="accordionFaq">
    //           <div className="accordion-item item-popup">
    //             <h5 className="accordion-header">
    //               <button
    //                 className="accordion-button split-text right text-initial"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#collapseOne"
    //                 aria-expanded="true"
    //                 aria-controls="collapseOne"
    //               >
    //                 What are project-based rates?
    //               </button>
    //             </h5>
    //             <div
    //               id="collapseOne"
    //               className="accordion-collapse collapse show"
    //               data-bs-parent="#accordionFaq"
    //             >
    //               <div className="accordion-body">
    //                 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    //                 odit aut fugit, sed quia consequuntur magni dolores eos qui
    //                 ratione voluptatem sequi neque a porro quisquam est, qui
    //                 dolorem ipsum quia dolor sit amet, consectetur, adipisci
    //                 velit, sed quia non numquam eius modi tempora incidunt ut
    //                 labore ullam nisi ut aliquid ex ea commodi consequatur? Quis
    //                 autem vel eum iure reprehenderit qui in ea voluptate
    //               </div>
    //             </div>
    //           </div>
    //           <div className="accordion-item item-popup">
    //             <h5 className="accordion-header">
    //               <button
    //                 className="accordion-button split-text right text-initial collapsed"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#collapseTwo"
    //                 aria-expanded="false"
    //                 aria-controls="collapseTwo"
    //               >
    //                 Developing core web applications
    //               </button>
    //             </h5>
    //             <div
    //               id="collapseTwo"
    //               className="accordion-collapse collapse"
    //               data-bs-parent="#accordionFaq"
    //             >
    //               <div className="accordion-body">
    //                 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    //                 odit aut fugit, sed quia consequuntur magni dolores eos qui
    //                 ratione voluptatem sequi neque a porro quisquam est, qui
    //                 dolorem ipsum quia dolor sit amet, consectetur, adipisci
    //                 velit, sed quia non numquam eius modi tempora incidunt ut
    //                 labore ullam nisi ut aliquid ex ea commodi consequatur? Quis
    //                 autem vel eum iure reprehenderit qui in ea voluptate
    //               </div>
    //             </div>
    //           </div>
    //           <div className="accordion-item item-popup">
    //             <h5 className="accordion-header">
    //               <button
    //                 className="accordion-button split-text right text-initial collapsed"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#collapseThree"
    //                 aria-expanded="false"
    //                 aria-controls="collapseThree"
    //               >
    //                 Design should enrich our day
    //               </button>
    //             </h5>
    //             <div
    //               id="collapseThree"
    //               className="accordion-collapse collapse"
    //               data-bs-parent="#accordionFaq"
    //             >
    //               <div className="accordion-body">
    //                 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    //                 odit aut fugit, sed quia consequuntur magni dolores eos qui
    //                 ratione voluptatem sequi neque a porro quisquam est, qui
    //                 dolorem ipsum quia dolor sit amet, consectetur, adipisci
    //                 velit, sed quia non numquam eius modi tempora incidunt ut
    //                 labore ullam nisi ut aliquid ex ea commodi consequatur? Quis
    //                 autem vel eum iure reprehenderit qui in ea voluptate
    //               </div>
    //             </div>
    //           </div>
    //           <div className="accordion-item item-popup">
    //             <h5 className="accordion-header">
    //               <button
    //                 className="accordion-button split-text right text-initial collapsed"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#collapseFour"
    //                 aria-expanded="false"
    //                 aria-controls="collapseFour"
    //               >
    //                 Are you working with Wordpress?
    //               </button>
    //             </h5>
    //             <div
    //               id="collapseFour"
    //               className="accordion-collapse collapse"
    //               data-bs-parent="#accordionFaq"
    //             >
    //               <div className="accordion-body">
    //                 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    //                 odit aut fugit, sed quia consequuntur magni dolores eos qui
    //                 ratione voluptatem sequi neque a porro quisquam est, qui
    //                 dolorem ipsum quia dolor sit amet, consectetur, adipisci
    //                 velit, sed quia non numquam eius modi tempora incidunt ut
    //                 labore ullam nisi ut aliquid ex ea commodi consequatur? Quis
    //                 autem vel eum iure reprehenderit qui in ea voluptate
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="faq-area section-padding-top-bottom bg-ecedde before-shape after-shape">
      <div className="container">
        <div className="row justify-content-center text-center section-mini-padding-bottom">
          <div className="col-md-9 col-lg-8">
            <div className="section__header">
              <h2 className="section__title split-text left text-initial">
                Common Questions
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Accordion defaultActiveKey="1" className="faq__accordion">
              {faqData.map((faq) => (
                <Accordion.Item
                  key={faq.id}
                  eventKey={faq.id}
                  className="item-popup"
                >
                  <Accordion.Header as='h5' className="split-text right text-initial">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
