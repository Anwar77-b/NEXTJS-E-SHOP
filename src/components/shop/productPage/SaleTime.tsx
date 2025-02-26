"use client";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function SaleTime() {
  const targetDate = "2025-02-14T00:00:00";
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null); // Initially null to prevent SSR mismatch

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft()); // Set time after mounting

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="my-2 py-4 border-y border-y-gray-200 text-center">
        <p className="text-sm mb-2">Loading countdown...</p>
      </div>
    );
  }
  return (
    <div className="my-2 py-4 border-y border-y-gray-200">
      <p className="text-sm mb-2">Offer expires in:</p>
      <div className="flex gap-2 items-center *:w-[52px] text-center">
        <div>
          <div className="text-xl p-3 bg-gray-100 font-semibold">
            {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
          </div>
          <p className="text-xs text-gray-500">Days</p>
        </div>
        <div>
          <div className="text-xl p-3 bg-gray-100 font-semibold">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </div>
          <p className="text-xs text-gray-500">Hours</p>{" "}
        </div>
        <div>
          <div className="text-xl p-3 bg-gray-100 font-semibold">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </div>
          <p className="text-xs text-gray-500">Minutes</p>{" "}
        </div>
        <div>
          <div className="text-xl p-3 bg-gray-100 font-semibold">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </div>
          <p className="text-xs text-gray-500">Seconds</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default SaleTime;
