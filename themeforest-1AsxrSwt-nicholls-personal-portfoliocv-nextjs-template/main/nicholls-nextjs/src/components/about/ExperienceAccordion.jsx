"use client";
import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import gsap from "gsap";

const ExperienceAccordion = ({ className, accordionItems, defaultopen }) => {
  const [activeKey, setActiveKey] = useState(String(defaultopen));

  const handleAccordionToggle = (key) => {
    setActiveKey(key);
    triggerAnimation(key);
  };

  const triggerAnimation = (key) => {
    const section = document.querySelector(`[data-key="${key}"]`);
    if (!section) return;

    const cards = section.querySelectorAll(".experience__item-cart");
    if (!cards || cards.length === 0) return;

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      }
    );
  };

  const handleAccordionCollapse = (key) => {
    const section = document.querySelector(`[data-key="${key}"]`);
    if (!section) return;

    const cards = section.querySelectorAll(".experience__item-cart");
    if (!cards || cards.length === 0) return;

    gsap.set(cards, {
      y: 100,
      opacity: 0,
      scale: 0.8,
    });
  };

  useEffect(() => {
    const accordionSections = document.querySelectorAll(".accordion-collapse");

    accordionSections.forEach((section) => {
      const key = section.getAttribute("data-key");

      if (section.classList.contains("show")) {
        triggerAnimation(key);
      } else {
        handleAccordionCollapse(key);
      }
    });
  }, [activeKey]);

  return (
    <Accordion
      defaultActiveKey={String(defaultopen)}
      activeKey={activeKey}
      onSelect={handleAccordionToggle}
      className={className}
    >
      {accordionItems?.map((item) => (
        <Accordion.Item
          eventKey={item?.id}
          key={item?.id}
          className="item-popup"
          data-key={item?.id}
        >
          <Accordion.Header as="h3">{item?.header}</Accordion.Header>
          <Accordion.Body className="accordion-collapse">
            <div className="row g-4">
              {item.content.map((contentItem, index) => (
                <div className="col-md-6" key={index}>
                  <div className="experience__item-cart">
                    <span className="year-info">{contentItem.year}</span>
                    <div className="item-info">
                      <h5 className="info-title">{contentItem.title}</h5>
                      <span className="info">({contentItem.company})</span>
                      {contentItem.description && (
                        <p className="info-description">
                          {contentItem.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ExperienceAccordion;
