import React from "react";
import awards from "@/constant/photo-studio/photo-studio-awards";
import AwardItem from "@/components/photo-studio/AwardItem";

const Award = () => {
  return (
    <section className="award-2-area">
      <div className="container-fluid px-xxl-0 overflow-hidden">
        <div className="row">
          <div className="col-12">
            {awards.map((award) => (
              <AwardItem key={award?.id} award={award} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
