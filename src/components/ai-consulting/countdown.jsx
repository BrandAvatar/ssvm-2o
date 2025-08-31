"use client"
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the target date - September 1st, 2025 at 09:00
    const targetDate = new Date('2025-09-01T09:00:00');
    const countDown = targetDate.getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setIsEventStarted(true);
        clearInterval(interval);
      } else {
        setDays(Math.floor(distance / day));
        setHours(Math.floor((distance % day) / hour));
        setMinutes(Math.floor((distance % hour) / minute));
        setSeconds(Math.floor((distance % minute) / second));
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isClient]);

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="countdown">
        <ul className="d-flex flex-row gap-md-5 gap-1 justify-between">
          <li><span>0</span>days</li>
          <li><span>0</span>Hours</li>
          <li><span>0</span>Minutes</li>
          <li><span>0</span>Seconds</li>
        </ul>
      </div>
    );
  }

  return (
    <>
            {!isEventStarted ? (
              <div className="countdown">
                <ul className="d-flex flex-row gap-md-5 gap-1 justify-between">
                  <li><span>{days}</span>days</li>
                  <li><span>{hours}</span>Hours</li>
                  <li><span>{minutes}</span>Minutes</li>
                  <li><span>{seconds}</span>Seconds</li>
                </ul>
              </div>
            ) : (
              <div className="emoji">
                <p>Event Started on 01/05/2025</p>
              </div>
            )}
         
    </>
  );
}