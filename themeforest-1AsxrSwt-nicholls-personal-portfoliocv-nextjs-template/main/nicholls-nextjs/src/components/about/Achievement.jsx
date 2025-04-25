import React from "react";
import CommonCountUp from "../CommonCountUp";
import achievementData from "@/constant/about/achievements-data"; // Importing JSON data

const Achievement = () => {
  const { sectionTitle, achievements } = achievementData;
  return (
    <section className="achievement-area section-padding-top-bottom bg-ecedde before-shape after-shape">
      <div className="container">
        <div className="row section-mini-padding-bottom">
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title split-text right text-initial">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="achievement__items">
              {/* Dynamically render each achievement */}
              {achievements.map((achievement) => (
                <div
                  key={achievement?.id}
                  className="achievement__item item-stagger"
                >
                  <h3 className="item-counter counter-count">
                    <CommonCountUp
                      end={achievement?.count}
                      duration={achievement?.duration}
                    />
                  </h3>
                  <p className="item-info">
                    {achievement?.title?.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
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

export default Achievement;
