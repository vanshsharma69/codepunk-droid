import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import timelineImage from "../assets/counter-image.svg";

const TimeCounter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  /* Minimal particles */
  const particles = useMemo(() =>
    Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      color: ["#FF3366", "#00D9FF", "#FFE600"][Math.floor(Math.random() * 3)],
      size: 2 + Math.random() * 2,
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

  const timeUnits = [
    { label: "DAYS", value: timeLeft?.days || 0 },
    { label: "HOURS", value: timeLeft?.hours || 0 },
    { label: "MINUTES", value: timeLeft?.minutes || 0 },
    { label: "SECONDS", value: timeLeft?.seconds || 0 },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-black text-white overflow-hidden z-10"
    >
      {/* Minimal particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* FULL WIDTH IMAGE - No border, no outline, corner to corner */}
      <motion.div 
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={timelineImage}
          alt="Time Counter Banner"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover block"
        />
      </motion.div>

      {/* CONTENT SECTION */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        
        {/* HEADING */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white"
            style={{
              textShadow: `
                3px 3px 0px #FF3366,
                6px 6px 0px #00D9FF
              `,
              WebkitTextStroke: '1px #000'
            }}
          >
            HACK STARTS IN
          </h2>
        </motion.div>

        {/* TIMER - Bold and Attractive */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Timer Box */}
          <div
            className="py-6 sm:py-8 md:py-14 px-4 rounded-xl border-4 border-black"
            style={{
              background: "red",
              boxShadow: "6px 6px 0px #000",
            }}
          >
            {/* Timer Content */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6">
              {timeUnits.map((unit, index) => (
                <React.Fragment key={unit.label}>
                  <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
                    <div 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white"
                      style={{
                        textShadow: "3px 3px 0px #000",
                        WebkitTextStroke: '2px #000'
                      }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white mt-2 tracking-widest uppercase">
                      {unit.label}
                    </span>
                  </div>
                  
                  {index < 3 && (
                    <span 
                      className="text-2xl sm:text-3xl md:text-4xl font-black text-white"
                      style={{ textShadow: '2px 2px 0px #000' }}
                    >
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for minimal particles */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0); 
            opacity: 0; 
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { 
            transform: translateY(-100vh); 
            opacity: 0; 
          }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TimeCounter;