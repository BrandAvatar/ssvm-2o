"use client"

import { useState, useEffect } from 'react';
import styles from './box-grid-section.module.css';

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

export default function BoxGridSection() {
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
    <div className={styles.wrapper}>
      <div className={styles.gridBg}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            key={i}
            className={
              activeQueue.includes(i) ? `${styles.cell} ${styles.active}` : styles.cell
            }
          />
        ))}
      </div>
      <section className={styles.content}>
        <div className='container mx-auto py-10'>
          <h2 className='text-uppercase pb-5'><span className='stroke'>AI </span>& Humanity – Co CreAtIng Our World Today</h2>
          <div className="row">
            <div className="col-md-7">
              <h4 className='pb-2 text-uppercase'>SSVM INSTITUTIONS PRESENTS THE FOURTH EDITION OF
              Transforming India Conclave 2025</h4>
              <p>The SSVM Group of Institutions proudly presents the Transforming India Conclave 2025 — a gathering of visionary thought leaders and innovators exploring how AI and human creativity can drive sustainable progress. With the theme "AI & Humanity – Co-Creating Our World Today," the Conclave features insightful discussions along with the Studentpreneur and Inspirational Guru Awards, honoring those shaping a better, ethical, and sustainable future.</p>
              <h4 className='pt-5 pb-2'>THEME FOR 2025</h4>
              <p>At the SSVM Transforming India Conclave 2025, we explore how AI and human creativity can together shape a sustainable and innovative future. Our theme, "AI & Humanity – Co-Creating Our World Today," highlights the power of technology and human potential working hand in hand to solve challenges and build a better tomorrow. Join us for engaging conversations and fresh ideas on harnessing AI to make a real, lasting impact!</p>
            </div>
            <div className="col-md-5 mt-5 mt-md-0">
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
