import React, { useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import pig from "../assets/pig.svg";
import light from "../assets/light.avif";
import prizepoolImage from "../assets/prizepool.svg";

const PrizePool = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

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
      id: 1,
      label: "1st Prize",
      amount: "RS.125K+",
      desc: "Grand champion award with premium goodies, cash prize and internship opportunities.",
      color: "#FFD700",
      secondaryColor: "#B8860B",
      icon: "👑",
      glitchChars: "ファースト"
    },
    {
      id: 2,
      label: "2nd Prize",
      amount: "RS.75K+",
      desc: "Outstanding innovation award with sponsor rewards and industry mentorship.",
      color: "#C0C0C0",
      secondaryColor: "#808080",
      icon: "🥈",
      glitchChars: "セカンド"
    },
    {
      id: 3,
      label: "3rd Prize",
      amount: "RS.50K+",
      desc: "Creative excellence prize with project funding and exclusive merchandise.",
      color: "#CD7F32",
      secondaryColor: "#8B4513",
      icon: "🥉",
      glitchChars: "サード"
    },
    {
      id: 4,
      label: "Ingenuous Spark",
      amount: "RS.25K+",
      desc: "Recognition for disruptive ideas with incubation and sponsor support.",
      color: "#FF3366",
      secondaryColor: "#CC0066",
      icon: "⚡",
      glitchChars: "スパーク"
    },
    {
      id: 5,
      label: "Visionary Spark",
      amount: "RS.15K+",
      desc: "Award for visionary thinkers with startup exposure and networking access.",
      color: "#9D4EDD",
      secondaryColor: "#7B2CBF",
      icon: "🔮",
      glitchChars: "ビジョン"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#0a0a0a] pt-24 pb-0 overflow-hidden">
      
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Comic book dots pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Spider-verse glitch lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Colorful orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </motion.div>

      {/* Fireflies */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className={`firefly ${p.color}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: p.delay * 0.1, duration: 0.5 }}
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
        {/* 🏆 Animated Heading - Spider Verse Style */}
        <motion.div 
          className="flex justify-center mb-16 px-4"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-[90%] text-center py-6 relative overflow-hidden cursor-default border-4 border-black"
            style={{
              backgroundColor: "#E00302",
              boxShadow: `
                8px 8px 0px #9E0782,
                12px 12px 0px rgba(0,0,0,0.3)
              `,
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "12px 12px 0px #9E0782, 16px 16px 0px rgba(0,0,0,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Glitch layers */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 mix-blend-screen"
              animate={{ x: [-2, 2, -2], opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "200%" } : { x: "-100%" }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            
            <h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white relative z-10"
              style={{
                textShadow: `
                  4px 4px 0px #000,
                  -2px -2px 0px #00D9FF,
                  2px 2px 0px #FF3366
                `,
                WebkitTextStroke: '2px #000'
              }}
            >
              PRIZE POOL
            </h2>
            <p className="text-xl md:text-3xl font-bold text-white mt-2 relative z-10" style={{ textShadow: '2px 2px 0px #000' }}>
              RS 12 LACS+
            </p>
          </motion.div>
        </motion.div>

        {/* Reverse Triangle Layout with Scroll Reveal */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 pb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {prizes.slice(0, 3).map((prize, index) => (
              <PrizeCard key={prize.id} prize={prize} index={index} />
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-12 flex-wrap">
            {prizes.slice(3).map((prize, index) => (
              <div key={prize.id} className="w-full sm:w-[45%] lg:w-[30%]">
                <PrizeCard prize={prize} index={index + 3} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom SVG with Parallax */}
      <motion.div 
        className="relative w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.img
          src={prizepoolImage}
          alt="Prize Pool Bottom"
          className="w-full max-w-none object-cover block"
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -30]),
            width: '100vw'
          }}
        />
      </motion.div>

      {/* Comic book border */}
      {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-purple-500 to-yellow-400" /> */}

      {/* CSS for Fireflies */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
        .firefly {
          position: absolute;
          border-radius: 50%;
          animation: float linear infinite;
          filter: blur(1px);
        }
        .firefly.yellow {
          background: radial-gradient(circle, #FFD700 0%, transparent 70%);
          box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700;
        }
        .firefly.white {
          background: radial-gradient(circle, #FFFFFF 0%, transparent 70%);
          box-shadow: 0 0 10px #FFFFFF, 0 0 20px #FFFFFF;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

/* 🎯 Enhanced Prize Card Component - Spider Verse Style */
const PrizeCard = ({ prize, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardInView = useInView(cardRef, { once: false, margin: "-50px" });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 100, rotateX: -45 }}
      animate={cardInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -45 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Label - Spider Verse Style */}
      <motion.div 
        className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ y: -20, opacity: 0 }}
        animate={cardInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        <motion.div
          className="px-4 sm:px-6 py-2 text-white font-black text-sm sm:text-base border-2 border-black relative overflow-hidden whitespace-nowrap"
          style={{
            backgroundColor: prize.color,
            boxShadow: `4px 4px 0px ${prize.secondaryColor}, 6px 6px 0px #000`,
            textShadow: '1px 1px 0px #000'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.6 }}
          />
          {prize.label}
        </motion.div>
      </motion.div>

      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-black cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${prize.color}20 0%, #1a1a1a 100%)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered 
            ? `0 0 40px ${prize.color}60, 8px 8px 0px #000`
            : '8px 8px 0px #000',
          transition: 'box-shadow 0.3s ease'
        }}
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(to bottom, ${prize.color}40 0%, ${prize.secondaryColor}20 60%, transparent 100%)`
          }}
        />

        {/* Glitch effect on hover */}
        {isHovered && (
          <>
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 mix-blend-screen z-10"
              animate={{ x: [-2, 2, -2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-red-500/20 mix-blend-screen z-10"
              animate={{ x: [2, -2, 2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </>
        )}

        {/* Holographic Shine */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl z-20"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.4) 0%, transparent 50%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Secondary shine sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)`,
          }}
          animate={isHovered ? { x: ['-100%', '100%'] } : { x: '-100%' }}
          transition={{ duration: 0.8 }}
        />

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6">
          {/* Icon */}
          <motion.div 
            className="text-3xl sm:text-4xl mb-2"
            animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.2 } : {}}
            transition={{ duration: 0.5 }}
          >
            {prize.icon}
          </motion.div>

          {/* Japanese text */}
          <div 
            className="absolute top-4 right-4 text-xs font-bold text-white/30 writing-vertical"
            style={{ writingMode: 'vertical-rl' }}
          >
            {prize.glitchChars}
          </div>

          {/* Amount */}
          <motion.div
            className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 relative"
            style={{
              WebkitTextStroke: '2px #000',
              textShadow: `
                3px 3px 0px #000,
                -1px -1px 0px ${prize.color},
                1px 1px 0px ${prize.secondaryColor}
              `
            }}
            animate={isHovered ? { scale: 1.05, skewX: [0, 2, -2, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            {prize.amount}
          </motion.div>

          {/* Rotating Light + Pig */}
          <div className="relative flex justify-center items-center h-32 sm:h-40 md:h-48 mb-4 sm:mb-6">
            <motion.img
              src={light}
              alt="Light"
              className="absolute w-32 sm:w-40 md:w-48 opacity-80"
              animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ animation: isHovered ? 'none' : 'spin 8s linear infinite' }}
            />
            <motion.img
              src={pig}
              alt="Prize"
              className="relative w-20 sm:w-24 md:w-28 z-10 drop-shadow-2xl"
              animate={isHovered ? { y: -5, scale: 1.1 } : { y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Particle burst on hover */}
            {isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ background: prize.color, left: '50%', top: '50%' }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                    animate={{
                      x: Math.cos(i * 60 * Math.PI / 180) * 50,
                      y: Math.sin(i * 60 * Math.PI / 180) * 50,
                      opacity: 0,
                      scale: 1.5,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Description */}
          <motion.div
            className="py-3 sm:py-4 px-3 sm:px-4 text-center text-white font-bold text-xs sm:text-sm rounded-xl border-2 border-black"
            style={{
              background: `linear-gradient(to bottom, ${prize.secondaryColor}, ${prize.color}40)`,
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
            }}
            animate={isHovered ? { y: -2 } : {}}
          >
            {prize.desc}
          </motion.div>
        </div>

        {/* Corner number */}
        <div 
          className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center text-white font-black text-lg sm:text-2xl"
          style={{ 
            background: `linear-gradient(135deg, transparent 50%, ${prize.color} 50%)`,
            textShadow: '1px 1px 0px #000'
          }}
        >
          0{prize.id}
        </div>

        {/* Scanline effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-8 pointer-events-none z-30"
          animate={isHovered ? { top: ['-10%', '110%'] } : { top: '-10%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Halftone pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '6px 6px'
          }}
        />
      </div>

      {/* Reflection */}
      <motion.div
        className="absolute -bottom-4 left-4 right-4 h-4 rounded-full blur-xl"
        style={{ background: prize.color }}
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.4 : 0.2
        }}
      />
    </motion.div>
  );
};

export default PrizePool;