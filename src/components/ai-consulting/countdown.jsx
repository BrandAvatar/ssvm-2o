"use client"
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the target date
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;
    const dayMonth = "08/01/";
    let birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    
    const countDown = new Date(birthday).getTime();
    
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
  }, []);

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