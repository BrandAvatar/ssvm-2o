"use client"

import { useState, useEffect } from 'react';
import styles from './box-grid-section.module.css';

const ROWS = 15;
const COLS = 25;
const TOTAL = ROWS * COLS;
const ACTIVE_COUNT = 5;

function getRandomIndex(total, exclude = []) {
  let idx;
  do {
    idx = Math.floor(Math.random() * total);
  } while (exclude.includes(idx));
  return idx;
}

export default function BoxGridSection() {
  const [activeQueue, setActiveQueue] = useState(() => {
    const arr = [];
    for (let i = 0; i < ACTIVE_COUNT; i++) {
      arr.push(getRandomIndex(TOTAL, arr));
    }
    return arr;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQueue(prev => {
        const next = [...prev];
        next.push(getRandomIndex(TOTAL, next));
        if (next.length > ACTIVE_COUNT) next.shift();
        return next;
      });
    }, 400); // Slower blink
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
}
