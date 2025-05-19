"use client"

import { useEffect } from 'react';
import Script from 'next/script';

export default function PreviousEditions() {
  useEffect(() => {
    // Initialize animation after all scripts are loaded
    const initAnimation = () => {
      if (window.jQuery && window.gsap && window.ScrollTrigger && window.initGalleryAnimation) {
        setTimeout(() => {
          window.initGalleryAnimation();
        }, 500); // Small delay to ensure DOM is fully rendered
      }
    };

    // Check if scripts are already loaded
    if (window.jQuery && window.gsap && window.ScrollTrigger) {
      initAnimation();
    }
    
    // Cleanup function
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(st => st.kill());
      }
    };
  }, []);

  return (
    <>
      {/* Load required scripts */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gallery-animation.js" strategy="afterInteractive" onLoad={() => {
        if (window.jQuery && window.gsap && window.ScrollTrigger && window.initGalleryAnimation) {
          window.initGalleryAnimation();
        }
      }} />
      
      <section id="previous-editions" className="bg2">
        <div className="container mx-auto mt-5 px-4">
          <div className="gallery  d-flex flex-column  justify-content-center " >
            <div className="d-flex my-4  gap-4 align-items-center justify-content-center">
              <img src="/assets/images/ele.png" alt="" width="70" />
              <h2 className="ssvm-h1 text-start line-1 anim-typewriter heading-1 text-uppercase">
                P<span className="text-stroke ">a</span>st Ed<span className="text-stroke">i</span>tion Highlights
              </h2> 
            </div>
            <div className="cards my-5 gap-20 flex md:flex-row items-center relative z-[1]">
              <div className="w-full relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/6qpZGsod9dk?si=iou7BU5uIPV1CbGJ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="w-full relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/d43oTWwyK_g?si=-GphQs6_O_TidXgN"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="w-full relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/lA-mD4EEG9Y?si=ztFP5MFBVdN07CQA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="w-full relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/9AajDUrNRH0?si=UBwUGoGRehBreGZc"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="w-full relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/3o3-GtWP2Zk?si=f8_i0-6KnSDURkvZ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
                <div className="w-full relative cursor-pointer hover:scale-105 transition-transform duration-300">
                  
                </div>
            </div>
          </div>
        </div>
        <style>
          {`
            .gallery{
              margin-top: 2rem;
            }
          `}
        </style>
      </section>
    </>
  );
}