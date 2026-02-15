import React, { useRef } from "react";
import pig from "../assets/pig.svg";

const HolographicCard = ({ title, amount, description }) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;

      cardRef.current.style.transform =
        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transition = "transform 0.4s ease";
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-8 text-white transform-gpu
                 bg-gradient-to-b from-purple-500 to-purple-800
                 border-4 border-purple-900
                 shadow-[0_20px_0px_#3b1e6d]
                 transition-all duration-300"
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-4 tracking-wide">
        {title}
      </h3>

      {/* Amount */}
      <div
        className="text-5xl font-extrabold text-center mb-6"
        style={{
          WebkitTextStroke: "2px black",
          textShadow: "4px 4px 0px black",
        }}
      >
        {amount}
      </div>

      {/* Pig SVG Center */}
      <div className="flex justify-center mb-6">
        <img
          src={pig}
          alt="Prize Icon"
          className="w-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-purple-200 text-center leading-relaxed">
        {description}
      </p>

      {/* Glow Overlay */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none
                      bg-white opacity-0 hover:opacity-10 transition duration-300 blur-2xl"></div>
    </div>
  );
};

export default HolographicCard;
