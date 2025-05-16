"use client"

import { useState, useEffect } from 'react';
import styles from './box-grid-section.module1.css';

const ROWS = 15;
const COLS = 22;
const TOTAL = ROWS * COLS;
const ACTIVE_COUNT = 5;

// Initial state will be the same on both server and client
const INITIAL_ACTIVE_CELLS = Array.from({ length: ACTIVE_COUNT }, (_, i) => i);

function getRandomIndex(total, exclude = []) {
  let idx;
  do {
    idx = Math.floor(Math.random() * total);
  } while (exclude.includes(idx));
  return idx;
}

export default function Aboutssvm() {
  // Use stable initial state
  const [activeQueue, setActiveQueue] = useState(INITIAL_ACTIVE_CELLS);
  // Only start random updates after mounting on client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setActiveQueue(prev => {
        const next = [...prev];
        next.push(getRandomIndex(TOTAL, next));
        if (next.length > ACTIVE_COUNT) next.shift();
        return next;
      });
    }, 800);
    
    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <div className="bg-white">
      <div className="">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            key={i}
            className={
              activeQueue.includes(i) ? `${styles.cell} ${styles.active}` : styles.cell
            }
          />
        ))}
      </div>
      <section className='!bg-white'>
        <div className='container mx-auto py-10 !bg-white'>
        
         <h2 className='text-uppercase pb-5 text-center text-black'><span className='stroke-black'>A</span>bout SSVM <span className='stroke-black'>I</span>nstitutions</h2>
          <div className="row justify-content-between">
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
              {/* <h4 className='pb-2'>SSVM INSTITUTIONS PRESENTS THE FOURTH EDITION OF</h4> */}
              <p className='text-black'>SSVM Institutions is a distinguished network of educational institutions located in Coimbatore and Mettupalayam, Tamil Nadu, India. Since our establishment in 1998, we have been dedicated to shaping young minds through a holistic and innovative educational approach.</p> 
                
                <p className='pt-2 text-black pb-4'>Our institutions offer a wide range of learning experiences designed to empower students to succeed in an ever-evolving global landscape. At SSVM, we focus on nurturing individuals who are not only academically proficient but also well-prepared to tackle the challenges of the future.</p>
              {/* <h4 className='pt-5 pb-2'>THEME FOR 2025</h4> */}
              {/* <p>At the SSVM Transforming India Conclave 2025, we focus on how AI and human creativity can shape a sustainable and innovative future. Our theme, "AI & Humanity – Co-Creating Our World Today," explores how technology and human potential can work together to solve challenges and create a better tomorrow. Join us as we dive into exciting conversations and ideas on how we can make a real impact with AI!</p> */}
            </div>
            <div className="col-md-4">
            <img src="/assets/images/about.jpg" alt="ai-consulting-1"
              className='shadow'
              />
            </div>
          </div>
         </div>
        
      </section>
    </div>
  );
}
