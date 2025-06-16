'use client';
import { useEffect } from 'react';
const gif='./assets/images/about-area/about-3-shap.png'
import Header from "@/components/ai-consulting/Header";
import Footer from "@/components/ai-consulting/Footer";

export default function StudentpreneurAwardSSVM() {
    useEffect(() => {
        const iframe = document.getElementById('myiframe');
        if (iframe) {
            iframe.src = iframe.src + window.location.search;
        }
    }, []);

    return (
      <>
        <Header className="position-static" /> 
        <section className="about-3-area section-padding-top-bottom position-relative overflow-hidden" id='awards'>
    <figure className="about-3__shape d-none d-md-block ">
      <img src={gif} alt="shape" />
    </figure>
    <div className="container container--extend moving-border">
      <div className="row justify-content-center overlay">
        <div className=" p-0 p-lg-5">
          <div className="section__header">
            <h3 className="d-flex text-lg-center text-start gap-3 justify-content-center align-items-center">
             <img src="/assets/images/ele.png" alt="" className='strike' /> STUDENTPRENEUR AWARD
            </h3>
            <div className='d-flex flex-column'>
                   <h2 className='text-uppercase pb-5 pt-5 pt-lg-5 mt-5 text-center'>registr<span className='stroke'>A</span>t<span className='stroke'>i</span>on</h2>
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-5 text-uppercase" id='form' itemID='form'>
              


          

            <iframe id="myiframe" aria-label='Studentpreneur Award External -wp'  style={{height: "1350px", width: "99%", border: "none", borderRadius: "20px"}} src='https://forms.zohopublic.com/xtracut/form/StudentpreneurAwardExternalwp/formperma/6YlQvXxRngm5rRIHdxsHQaR6YbdSfDrFW0v5H_mjMQI'></iframe>

              </div>
            
            <div className="d-flex flex-column flex-lg-row gap-2 align-items-center">
              <img src="https://ssvmtransformationindia.s3.ap-south-1.amazonaws.com/images/studentaward.gif" alt="" className='flex-shrink-0 w-50'/>
              <div>
                
               <p className='text-start mb-1 mt-0'>This is your chance to transform your entrepreneurial vision into reality. Picture yourself presenting your ideas to industry experts, potential investors, and fellow innovators who are eager to see your innovative solutions!</p>
               <p className='text-start mt-3'>Have a business idea that can change the game? Apply for the Studentpreneur Award and showcase your entrepreneurial spirit! We can't wait to see what you create.</p>
               <a href='#form'  className='yellow-btn mt-3 d-block' style={{width: "fit-content"}}>Apply Now</a>
              </div>
             
            </div>
            
            <p className='mt-lg-2'><b>Last date to apply: </b>30th June</p>
            <p className='mt-lg-2'><b>Eligibility: </b>Only students from institutions other than SSVM are eligible to apply.</p>
            <p className='mt-lg-2'><b>Grade & Team Limit: </b> Open to 8th-12th grade students, with a maximum of 3 members per team.</p>
            <p className='mt-lg-2'><b>Submission: </b> A document explaining the business idea must be submitted.</p>
            <p className='mt-lg-2'><b>Presentation: </b>Business ideas to be presented to the jury via a Zoom call.</p>
            <p className='mt-lg-2'><b>Finale: </b>Shortlisted teams must attend the final event in person on September 1, 2 & 3 at SSVM World School, Coimbatore.</p>
            <p className='mt-lg-2'><b>Confirmation:</b>Upon registration, a confirmation email will be sent, and further communication will follow.            </p>

       
            </div>  
          </div>

        </div>
      </div>
    </div>
  </section>
  <Footer />
    </>
    )
}

