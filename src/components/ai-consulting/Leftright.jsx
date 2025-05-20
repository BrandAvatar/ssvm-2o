"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function Leftright() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768;

    // Create a timeline for the animations with different settings for mobile and desktop
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.scrolling-text-container',
        start: isMobile ? 'top 80%' : 'top 90%',
        end: isMobile ? 'bottom 100%' : 'bottom -330%',
        repeat: -1,
        scrub: isMobile ? 0.8 : 1.2,
        markers: false
      }
    });

    // Add animations to the timeline with adjusted values for mobile
    textTimeline
      .to('.left-to-right', {
        x: isMobile ? '0%' : '150%',
        ease: 'power2.out',
      })
      .to('.right-to-left', {
        x: isMobile ? '0%' : '-150%',
        ease: 'power2.out',
      }, '<');

    // Add a subtle fade-in effect when the text comes into view
    gsap.from('.scroll-text', {
      y: isMobile ? 10 : 20,
      duration: isMobile ? 0.8 : 1,
      scrollTrigger: {
        trigger: '.scrolling-text-container',
        start: isMobile ? 'top 90%' : 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section className="left-right-section ">
        <div className="scrolling-text-container d-flex justify-content-center align-items-center min-vh-80">
          <div>
            <div className="scroll-text left-to-right">
              <span className="d-flex flex-row gap-3 display-1 text-center text-md-start d-flex align-items-center justify-content-center">
                <Image src="/assets/images/ssvm/ele.webp" alt="" className="strike" width={200} height={200} />
                <h1 className="gothic-bold">Transforming</h1>
              </span>
            </div>
            <div className="scroll-text right-to-left w-100">
              <span className="display-1 text-center">
                <h1 className="gothic-bold">India Conclave <br/> 2025</h1>
              </span>
            </div>
          </div>
        </div>
      
    </section>
  );
}


