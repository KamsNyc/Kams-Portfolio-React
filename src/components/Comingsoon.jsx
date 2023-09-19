import React, { useState, useEffect } from "react";

// Set the launch date (in UTC)
const launchDate = new Date("2023-09-30T00:00:00Z");

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-2">Coming Soon</h1>
        <p className="text-lg mb-6">currently making this page.</p>
        <div className="flex space-x-6 text-2xl">
          <div>
            <span className="font-bold text-4xl">{timeLeft.days}</span> Days
          </div>
          <div>
            <span className="font-bold text-4xl">{timeLeft.hours}</span> Hours
          </div>
          <div>
            <span className="font-bold text-4xl">{timeLeft.minutes}</span>{" "}
            Minutes
          </div>
          <div>
            <span className="font-bold text-4xl">{timeLeft.seconds}</span>{" "}
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
