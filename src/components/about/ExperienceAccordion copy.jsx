"use client";
import React from "react";
import { Accordion } from "react-bootstrap";

const ExperienceAccordion = ({ className, accordionItems, defaultopen }) => {
  return (
    <Accordion defaultActiveKey={String(defaultopen)} className={className}>
      {accordionItems?.map((item) => (
        <Accordion.Item
          eventKey={item?.id}
          key={item?.id}
          className="item-popup"
        >
          <Accordion.Header as="h3">{item?.header}</Accordion.Header>
          <Accordion.Body>
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
