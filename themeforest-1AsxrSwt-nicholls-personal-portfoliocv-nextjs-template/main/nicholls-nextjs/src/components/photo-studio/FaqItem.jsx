"use client";
import Accordion from "react-bootstrap/Accordion";

const FaqItem = ({ data }) => {
  return (
    <>
      <Accordion.Item eventKey={Number(data?.id)} className="faq-2__item">
        <Accordion.Header as="h6">
          {data?.question}
        </Accordion.Header>
        <Accordion.Body>{data?.answer}</Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default FaqItem;
