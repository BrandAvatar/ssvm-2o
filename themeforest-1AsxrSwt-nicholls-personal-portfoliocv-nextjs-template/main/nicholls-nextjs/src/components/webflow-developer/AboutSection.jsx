import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import aboutData from "@/constant/webflow-developer/about-data";
import { FaCircle } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div id="about" className="about-2-area section-padding-top">
      <div className="container container--extend">
        <div className="row">
          <div className="col-xl-10">
            <div className="section__header">
              <span className="section__sub-title pill-sub-title">
                <FaCircle size={6} />
                {aboutData?.sectionSubTitle}
              </span>
              <h2 className="section__title text-indent">
                {aboutData?.sectionTitle}
              </h2>
            </div>
          </div>
          <div className="col-12 ms-auto section-mini-padding-top">
            <div className="section__info" data-bgcolor="#dddddd">
              <h4 className="info-title">{aboutData?.aboutMeText?.title}</h4>
              <p>{aboutData?.aboutMeText?.description}</p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-between pining-area section-mini-padding-top position-relative pining-area">
          <div className="col-lg-6 col-xl-5 order-2 order-lg-1 content-scroll">
            <div className="about-2__content">
              {/* Looping through the sections */}
              {aboutData?.sections?.map((section, index) => (
                <div className="content-box" key={index}>
                  <h3 className="content-title">{section.title}</h3>
                  <div className="coltent-list section-mini-margin-top">
                    <ul>
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {/* Conditional rendering based on the presence of duration (list-year) */}
                          {item.duration ? (
                            // If duration exists, it's an experience
                            <>
                              <span className="list-title">{item.company}</span>
                              <span className="list-catagory">
                                {item.position}
                              </span>
                              <span className="list-year">{item.duration}</span>
                            </>
                          ) : (
                            // If no duration, it's a recognition
                            <>
                              <span className="list-title ff-montserrat">
                                {item.award}
                              </span>
                              <span className="list-catagory ff-montserrat tag">
                                {item.category}
                              </span>
                              <Link
                                href={item.link}
                                className="list-link ff-montserrat"
                              >
                                <FiArrowUpRight />
                              </Link>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-xl-6 order-1 order-lg-2 content-pining">
            <figure className="about-2__thumb h-100">
              <img
                src={aboutData?.imageSrc}
                alt={aboutData?.imageAlt}
                className="img-fluid h-100"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
