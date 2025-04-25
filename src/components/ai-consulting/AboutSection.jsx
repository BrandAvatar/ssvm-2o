import React from 'react'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa6";
import aboutData from '@/constant/ai-consulting/about-data'


const AboutSection = () => {
  return (
    <section className="about-3-area section-padding-top-bottom position-relative overflow-hidden">
    <figure className="about-3__shape d-none d-md-block">
      <img src={aboutData?.image} alt="shape" />
    </figure>
    <div className="container container--extend">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="section__header text-center">
            <h2 className="section__title split-text left text-initial">
              {aboutData?.title}
            </h2>
            <p>{aboutData?.description}</p>
            <Link href={aboutData?.buttonLink} className="btn-next__jump btn-up-down section-link">
              <FaArrowDown />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection