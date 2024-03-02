import React, { useState, useEffect } from 'react';

const Timer = () => {
  // Set your target date and time here (YYYY-MM-DDTHH:MM:SS format)
  const targetDateTime = new Date('2024-03-14T10:00:00');
  
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDateTime - currentTime;
    return Math.max(timeDifference, 0); // Ensure the timer does not go negative
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  if(seconds===0 && days===0)
  {
        return(
            <>
             It's Show <span>Time</span> 
            </>
        )
  }
  if(seconds===0)
{
  return(
        <>
        Hurry <span>up! 🤠</span> 
       </>
  )
    }
  

  return (
    <>
      {/* <p>{`${days.toString().padStart(2, '0')} Days ${hours.toString().padStart(2, '0')} hours ${minutes.toString().padStart(2, '0')} min ${seconds.toString().padStart(2, '0')} sec`}</p> */}
      {days.toString().padStart(2, '0')} <span>Days</span>&nbsp;
      {hours.toString().padStart(2, '0')} <span>Hours</span>&nbsp;
      {minutes.toString().padStart(2, '0')} <span>Min</span>&nbsp;<br />
      {seconds.toString().padStart(2, '0')} <span>sec</span>&nbsp;

      </>
  );
};

export default Timer;
