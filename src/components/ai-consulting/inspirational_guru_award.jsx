"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa6";
import aboutData from '@/constant/ai-consulting/about-data'
import HeroPhotostudioSlider from '@/components/photo-studio/HeroPhotostudioSlider';



const guru_award = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const activeStyle = {
    backgroundColor: '#f8d92b',
    color: '#000',
    fontWeight: 'bold',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    transform: 'translateY(-3px) scale(1.02)'
  };
  
  return (
    <>

  
    <section className="about-3-area section-padding-top-bottom position-relative overflow-hidden" id='awards'>
    <figure className="about-3__shape d-none d-md-block ">
      <img src={aboutData?.image} alt="shape" />
    </figure>
    <div className="container container--extend moving-border">
      <div className="row justify-content-center overlay">
        <div className=" p-0 p-lg-5">
          <div className="section__header">
            <h3 className="d-flex text-lg-center text-start gap-3 justify-content-center align-items-center">
             <img src="/assets/images/ele.png" alt="" className='strike' /> INSPIRATIONAL GURU AWARD
            </h3>
            <div className="d-flex flex-column flex-lg-row gap-2 align-items-center">
              <img src="/assets/images/guruaward-c.gif" alt="" className='flex-shrink-0 w-50'/>
              <div>
                
               <p className='text-start mb-1 mt-0'>The Inspirational Guru Award honors educators who go the extra mile to make a lasting impact. These teachers foster a nurturing classroom environment, inspire students to pursue their dreams, and help shape them into well-rounded individuals.</p>
               <p className='text-start mt-3'>Do you know a teacher who deserves recognition for their dedication and influence? Nominate them for the Inspirational Guru Award today!</p>
               <a href='#form'  className='yellow-btn mt-3 d-block' style={{width: "fit-content"}}>Apply Now</a>
              </div>
             
            </div>
            
            <p className='mt-lg-2'><b>Eligibility:: </b>Only teachers from institutions other than SSVM are eligible to apply. SSVM teachers should fill out the other form.</p>
            <p className='mt-lg-2'><b>Experience: </b>Applicants must have at least 10 years of service as a school teacher.</p>
            <p className='mt-lg-2'><b>Nomination: </b> Teachers may apply through self-nomination or be nominated by others. </p>
            <p className='mt-lg-2'><b>Verification:  </b> All teaching credentials will be verified.</p>
            <p className='mt-lg-2'><b>Finale:  </b>  The top 25 selected teachers must attend the event on September 1, 2 & 3 at SSVM World School, Coimbatore.
            For any queries, please contact: tic@ssvminstitutions.ac.in</p>
            <p className='mt-lg-2'><b>All participants who've participated and won last year will not be eligible to participate this year. This is to provide a fair opportunity for all.  </b></p>


            <h2 className='text-uppercase pb-5 pt-5 pt-lg-5 mt-5 text-center'>registr<span className='stroke'>A</span>t<span className='stroke'>i</span>on</h2>
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-5 text-uppercase">
              <div className="tabs-container w-100">
                <div className="tabs-header d-flex mb-3 gap-4">
                  <button 
                    className={`tab-button flex-grow-1 py-3 px-4 ${activeTab === 'tab1' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('tab1')}
                    style={activeTab === 'tab1' ? activeStyle : {}}
                  >
                    Self Nomination
                  </button>
                  <button 
                    className={`tab-button flex-grow-1 py-3 px-4 ${activeTab === 'tab2' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('tab2')}
                    style={activeTab === 'tab2' ? activeStyle : {}}
                  >
                    Nominate Others
                  </button>
                </div>
                <div className="tabs-content p-0">
                  <div id="tab1" style={{display: activeTab === 'tab1' ? 'block' : 'none'}}>
                    <iframe aria-label='INSPIRATIONAL GURU AWARD(Self Nomination) - External '  allow="camera;" style={{height: "2170px", width: "100%", border: "none", borderRadius: "20px"}} src='https://forms.zohopublic.com/xtracut/form/INSPIRATIONALGURUAWARDSelfNominationExternalDM/formperma/EbR-4AGjlPYkZkM_JF6CfIjxq-oI-EfLo2a9xmmSac0?zf_enablecamera=true'></iframe>
                  </div>
                  <div id="tab2" style={{display: activeTab === 'tab2' ? 'block' : 'none'}}>
                    <iframe aria-label='INSPIRATIONAL GURU AWARD(Nominate Others)- External'  allow="camera;" style={{height: "2510px", width: "100%", border: "none", borderRadius: "20px"}} src='https://forms.zohopublic.com/xtracut/form/INSPIRATIONALGURUAWARDNominateOthersExternalDM/formperma/wX3MVIzm1ADF4Bc_aBDrLYt-7yHYOH37GLlHbUOKtks?zf_enablecamera=true'></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  </section>

  <style>
    {`
      .tab-button {
        background-color:rgb(255, 255, 255);
        color: #000;
        font-weight: bold;
        border-radius: 10px;
        border: none;
      }
      .tab-button:hover {
        background-color: #f8d92b;
      }
    `}
  </style>
  </>
  )
}

export default guru_award