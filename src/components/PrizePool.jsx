import React, { useMemo, useRef } from "react";
import pig from "../assets/pig.svg";
import light from "../assets/light.avif";
import prizepoolImage from "../assets/prizepool.svg";

const PrizePool = () => {

  /* 🔥 Dense Fireflies */
  const particles = useMemo(() =>
    Array.from({ length: 120 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 25,
      duration: 20 + Math.random() * 30,
      size: 2 + Math.random() * 4,
      color: Math.random() > 0.5 ? "yellow" : "white",
    }))
  , []);

  const prizes = [
    {
      label: "1st Prize",
      amount: "RS.125K+",
      desc: "Grand champion award with premium goodies, cash prize and internship opportunities."
    },
    {
      label: "2nd Prize",
      amount: "RS.75K+",
      desc: "Outstanding innovation award with sponsor rewards and industry mentorship."
    },
    {
      label: "3rd Prize",
      amount: "RS.50K+",
      desc: "Creative excellence prize with project funding and exclusive merchandise."
    },
    {
      label: "Ingenuous Spark",
      amount: "RS.25K+",
      desc: "Recognition for disruptive ideas with incubation and sponsor support."
    },
    {
      label: "Visionary Spark",
      amount: "RS.15K+",
      desc: "Award for visionary thinkers with startup exposure and networking access."
    }
  ];

  return (
    <section className="relative w-full bg-[#070707] pt-60 overflow-hidden">

      {/* Fireflies */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`firefly ${p.color}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">

        {/* 🏆 90% WIDTH HEADING */}
        <div className="flex justify-center mb-24">
          <div
            className="w-[90%] text-center py-6
                       text-5xl md:text-7xl lg:text-8xl
                       font-extrabold text-white border-2 border-white"
            style={{
              backgroundColor: "#E00302",
              boxShadow: "8px 8px 0px #9E0782",
            }}
          >
            PRIZE POOL : RS 12 LACS+
          </div>
        </div>

        {/* Reverse Triangle Layout */}
        <div className="max-w-7xl mx-auto px-6 pb-24">

          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
            {prizes.slice(0, 3).map((prize, index) => (
              <PrizeCard key={index} prize={prize} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center gap-16 flex-wrap">
            {prizes.slice(3).map((prize, index) => (
              <div key={index} className="w-full sm:w-[45%] lg:w-[30%]">
                <PrizeCard prize={prize} />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom SVG */}
      <div className="relative w-full">
        <img
          src={prizepoolImage}
          alt="Prize Pool Bottom"
          className="w-screen max-w-none object-cover block"
        />
      </div>

    </section>
  );
};

/* 🎯 Prize Card Component with Holographic Effect */
const PrizeCard = ({ prize }) => {

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 18;
    const rotateY = (centerX - x) / 18;

    card.style.transform =
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="relative">

      {/* Label */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
        <div
          className="px-6 py-2 text-white font-bold border-2 border-white"
          style={{
            backgroundColor: "#E00302",
            boxShadow: "4px 4px 0px #9E0782",
          }}
        >
          {prize.label}
        </div>
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl overflow-hidden
                   border-[6px] border-[#4B1C86]
                   shadow-[0_15px_0px_#2B0F54]
                   transition-transform duration-300 transform-gpu"
        style={{
          background:
            "linear-gradient(to bottom, #9E0782 0%, #5A0F9C 60%, #3B0F70 100%)",
        }}
      >

        {/* Holographic Shine */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.35), transparent 40%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Amount */}
        <div
          className="text-center text-5xl md:text-6xl font-extrabold
                     mt-10 mb-8 text-white relative z-10"
          style={{
            WebkitTextStroke: "3px #070707",
            textShadow: "4px 4px 0px #070707",
          }}
        >
          {prize.amount}
        </div>

        {/* Rotating Light + Pig */}
        <div className="relative flex justify-center items-center h-48 mb-8">
          <img
            src={light}
            alt="Light"
            className="absolute w-48 md:w-56 animate-spin-slow opacity-80"
          />
          <img
            src={pig}
            alt="Prize"
            className="relative w-28 md:w-36 z-10"
          />
        </div>

        {/* Description */}
        <div
          className="py-6 px-6 text-center text-white font-bold text-sm md:text-base relative z-10"
          style={{
            background:
              "linear-gradient(to bottom, #7C1CCF, #4B1C86)",
          }}
        >
          {prize.desc}
        </div>

      </div>
    </div>
  );
};

export default PrizePool;
