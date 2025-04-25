import React from "react";

const imageData = {
  title:
    "I create visual elements that enhance your brand's presence and engagement",
  backgroundImage: "./assets/images/image-area/image.png",
};

const ImageSection = () => {
  return (
    <section className="image-area overflow-hidden">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div
              className="image__thumb"
              style={{
                backgroundImage: `linear-gradient(rgba(27, 28, 30, 0.8), rgba(27, 28, 30, 0)), url(${imageData?.backgroundImage})`,
              }}
            >
              <div className="image__content">
                <h2 className="split-text right text-initial">
                  {imageData?.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
