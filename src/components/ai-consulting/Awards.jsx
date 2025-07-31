import React from 'react'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa6";
import aboutData from '@/constant/ai-consulting/about-data'
import HeroPhotostudioSlider from '@/components/photo-studio/HeroPhotostudioSlider';


const Awards = () => {
  return (
    <>

  
    <section className="about-3-area section-padding-top-bottom position-relative overflow-hidden" id='awards'>
 
    <div className="container container--extend moving-border">
      <div className="row justify-content-center overlay">
        <div className="p-0">
          <div className="section__header">
            <h2 className="d-flex text-center justify-content-center align-items-center">
             <img src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/ele.webp" alt="" className='strike' /> AWARDS
            </h2>
            <div className="d-flex flex-column flex-lg-row gap-2 align-items-center">
              <img src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/guruaward-c.gif" alt="" className='flex-shrink-0 w-50'/>
              <div>
          

                <h3 className=''>INSPIR<span className='stroke'>A</span>T<span className='stroke'>I</span>ONAL GURU  AWARDS</h3>
               <p className='text-start mb-1'>The Inspirational Guru Award honors educators who go the extra mile to make a lasting impact. These teachers foster a nurturing classroom environment, inspire students to pursue their dreams, and help shape them into well-rounded individuals.</p>
               <p className='text-start'>Do you know a teacher who deserves recognition for their dedication and influence? Nominate them for the Inspirational Guru Award today!</p>
              </div>
            </div>
            <h2 className='text-uppercase pb-5 pt-5 pt-lg-0 text-center'>Award Category</h2>
            <div className="d-flex flex-column flex-lg-row justify-content-center gap-5 text-uppercase">
              {/* <div className="registerbox text-center">
                  <h3 className='py-3'>For SSVM INSTITUTIONS</h3>
                  <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row gap-2">
                    <a href="/guru-awards-ssvm-self-nomination" className='yellow-btn'>Closed </a>
                  </div>
              </div> */}
              <div className="registerbox text-center mb-5 mb-lg-0">
                  <h3 className='py-3'>Awards List</h3>
                  <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row gap-2">
                    {/* <a href="/guru-awards-other-institutions-self-nomination" className='yellow-btn'>Self nomination </a> */}
                    <a href="./2025/awards-list.pdf" className='yellow-btn'>Know More</a>
                  </div>
                  {/* <p className='m-0 py-3  text-black'>Last date to apply: 30th June </p> */}

              </div>
            </div>
          </div>
{/* 2nd award  */}
          <div className="section__header pt-5">
            
            <div className="d-flex flex-column flex-lg-row gap-2 align-items-center">
              <img src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/studentaward.gif" alt="" className='flex-shrink-0 w-50'/>
              <div>
               
              <h3>STUDENTPRENEUR AWARDS</h3>
               <p className='text-start mb-1'>This is your chance to transform your entrepreneurial vision into reality. Picture yourself presenting your ideas to industry experts, potential investors, and fellow innovators who are eager to see your innovative solutions!</p>
               <p className='text-start'>Have a business idea that can change the game? Apply for the Studentpreneur Award and showcase your entrepreneurial spirit! We can't wait to see what you create.</p>
              </div>
            </div>
            {/* <h2 className='text-uppercase pb-5 pt-5 pt-lg-0 text-center'>Registr<span className='stroke'>A</span>t<span className='stroke'>i</span>on</h2> */}
            {/* <div className="row d-flex flex-column flex-lg-row justify-content-center gap-5 text-uppercase">
              <div className="col-12 col-lg-5 registerbox text-center">
                  <h3 className='py-3'>For SSVM INSTITUTIONS</h3>
                  <div className="d-flex flex-column flex-lg-row justify-content-center gap-2">
                    <a href="/studentpreneur-award-ssvm" className='yellow-btn'>Closed </a>
                  </div>
                  
              </div>
              <div className="col-12 col-lg-5 registerbox text-center mb-5 mb-lg-0">
                  <h3 className='py-3'>For other institutions</h3>
                  <div className="d-flex flex-column flex-lg-row justify-content-center gap-2">
                    <a href="/studentpreneur-award-other-insitutions" className='yellow-btn'>Closed</a>
                  </div>
                

              </div>
            </div> */}
          </div>


        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Awards