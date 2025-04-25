"use client";
import Accordion from "react-bootstrap/Accordion";
import FAQDATA from "@/constant/photo-studio/faq-items";
import FaqItem from "@/components/photo-studio/FaqItem";

const FaqAccordion = () => {
  return (
    <Accordion defaultActiveKey={Number(0)} className="faq-2__accordion">
      {FAQDATA.map((data) => (
        <FaqItem key={data?.id} data={data} />
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
