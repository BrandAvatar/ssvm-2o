import React from 'react'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa6";
import aboutData from '@/constant/ai-consulting/about-data'
import HeroPhotostudioSlider from '@/components/photo-studio/HeroPhotostudioSlider';


const Awards = () => {
  return (
    <>
    <HeroPhotostudioSlider />
  
    <section className="about-3-area section-padding-top-bottom position-relative overflow-hidden">
    <figure className="about-3__shape d-none d-md-block ">
      <img src={aboutData?.image} alt="shape" />
    </figure>
    <div className="container container--extend moving-border">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="section__header text-center">
            <h2 className="section__title split-text left text-initial gothic-bold">
             <img src="/assets/images/ele.png" alt="" width={70} /> {aboutData?.title}
            </h2>
            <div className="d-flex gap-2">
              <img src="/assets/images/guruaward-c.gif" alt="" className='flex-shrink-0 w-50'/>
              <div>
                <h3 className=''>Studentpreneur Awards</h3>
               <p>The Inspirational Guru Award honors educators who go the extra mile to make a lasting impact. These teachers foster a nurturing classroom environment, inspire students to pursue their dreams, and help shape them into well-rounded individuals.</p>
               <p>Do you know a teacher who deserves recognition for their dedication and influence? Nominate them for the Inspirational Guru Award today!</p>

              </div>
              <h2 className='uppercase'>Reg <span className='stroke'>i</span>stration</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Awards