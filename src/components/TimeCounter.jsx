import React, { useEffect, useState, useMemo } from "react";
import timelineImage from "../assets/counter-image.svg";

const TimeCounter = () => {

  /* Stable particles (no jitter) */
  const particles = useMemo(() =>
    Array.from({ length: 45 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100 + 10,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 12,
    }))
  , []);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-03-01T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="relative w-full bg-black text-white overflow-hidden pb-40 border-t-2 border-white z-10">

      {/* ✨ FIRE FLY PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="firefly"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* IMAGE */}
      <div className="relative w-full z-10">
        <img
          src={timelineImage}
          alt="Time Counter Banner"
          className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px] object-cover block border-0 outline-none"
        />

        {/* OVERLAP CONTAINER */}
        <div
          className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2
                     w-[90%] sm:w-[75%] md:w-[60%]
                     flex flex-col items-center gap-4"
        >

          {/* TITLE BOX */}
          <div
            className="w-[70%] sm:w-[55%] md:w-[45%]
                       py-2
                       text-center text-black
                       font-semibold
                       text-base sm:text-lg
                       border border-black"
            style={{
              backgroundColor: "#F5C542",
              backgroundImage:
                "radial-gradient(#000 1.2px, transparent 1.2px)",
              backgroundSize: "14px 14px",
              boxShadow: `
                4px 4px 0px #E0B437,
                8px 8px 0px #C99E2F
              `,
            }}
          >
            HACK STARTS IN
          </div>

          {/* TIMER BOX */}
          <div
            className="w-full
                       py-5 sm:py-6 md:py-7
                       text-center text-black
                       font-extrabold
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                       border border-black
                       tracking-[0.08em]"
            style={{
              backgroundColor: "#F5C542",
              backgroundImage:
                "radial-gradient(#000 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
              boxShadow: `
                6px 6px 0px #E0B437,
                12px 12px 0px #C99E2F
              `,
            }}
          >
            {timeLeft ? (
              <>
                {String(timeLeft.days).padStart(2, "0")} :
                {String(timeLeft.hours).padStart(2, "0")} :
                {String(timeLeft.minutes).padStart(2, "0")} :
                {String(timeLeft.seconds).padStart(2, "0")}
              </>
            ) : (
              "00 : 00 : 00 : 00"
            )}
          </div>

        </div>
      </div>

    </section>
  );
};

export default TimeCounter;
