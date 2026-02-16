import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const tracks = [
  {
    id: 1,
    title: "AI HEALTH",
    subtitle: "Neural Care",
    description: "Revolutionize healthcare with AI-driven diagnostics, predictive medicine, and smart health monitoring systems.",
    color: "#FF3366",
    secondaryColor: "#FF0066",
    icon: "🧬",
    glitchChars: "アイヘルス"
  },
  {
    id: 2,
    title: "AR/VR",
    subtitle: "Reality Hacked",
    description: "Build immersive realities. Create worlds that blur the line between digital and physical existence.",
    color: "#00D9FF",
    secondaryColor: "#0099CC",
    icon: "🥽",
    glitchChars: "エアブイアール"
  },
  {
    id: 3,
    title: "GAMING",
    subtitle: "Level Up",
    description: "Craft next-gen experiences. From indie gems to AAA mechanics, redefine interactive entertainment.",
    color: "#FF6B00",
    secondaryColor: "#CC5500",
    icon: "🎮",
    glitchChars: "ゲーミング"
  },
  {
    id: 4,
    title: "EDTECH",
    subtitle: "Learn Verse",
    description: "Transform education through technology. Gamified learning, AI tutors, and immersive classrooms.",
    color: "#9D4EDD",
    secondaryColor: "#7B2CBF",
    icon: "📚",
    glitchChars: "エドテック"
  },
  {
    id: 5,
    title: "FINTECH",
    subtitle: "Crypto Web",
    description: "Disrupt finance with blockchain, DeFi solutions, and next-generation payment systems.",
    color: "#00F5D4",
    secondaryColor: "#00BBAA",
    icon: "💰",
    glitchChars: "フィンテック"
  },
  {
    id: 6,
    title: "OPEN INNO",
    subtitle: "Wildcard",
    description: "No limits. Your craziest ideas welcome. Build something that defies categorization.",
    color: "#FFE600",
    secondaryColor: "#CCB800",
    icon: "⚡",
    glitchChars: "オープン"
  }
];

const Tracks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#0a0a0a] py-24 overflow-hidden"
    >
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
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />
      </motion.div>

      {/* Header */}
      <div className="relative z-10 px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: 45 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 relative inline-block"
            style={{
              textShadow: `
                4px 4px 0px #FF3366,
                8px 8px 0px #00D9FF,
                12px 12px 0px #FFE600
              `,
              WebkitTextStroke: '2px #000'
            }}
          >
            <GlitchText text="TRACKS" />
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 font-bold tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Choose Your Dimension
          </motion.p>
        </motion.div>
      </div>

      {/* Tracks Grid */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div 
        className="relative z-10 flex justify-center mt-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex gap-4">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: track.color }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Comic book border effect */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-600 via-blue-500 to-yellow-400" />
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-400 via-purple-500 to-red-600" />
    </section>
  );
};

const TrackCard = ({ track, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 100, rotateX: -45, skewX: 10 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          skewX: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Card Container with 3D tilt */}
      <motion.div
        className="relative h-full rounded-2xl overflow-hidden border-4 border-black"
        style={{
          backgroundColor: track.color,
          transformStyle: "preserve-3d",
          boxShadow: `
            8px 8px 0px #000,
            ${isHovered ? `0 0 40px ${track.color}80` : 'none'}
          `
        }}
        animate={{
          rotateY: isHovered ? (mousePos.x - 0.5) * 20 : 0,
          rotateX: isHovered ? (0.5 - mousePos.y) * 20 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%)
              `,
              backgroundSize: '20px 20px'
            }}
            animate={isHovered ? { backgroundPosition: ['0px 0px', '20px 20px'] } : {}}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Glitch effect layers */}
        {isHovered && (
          <>
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 mix-blend-screen"
              animate={{ x: [-2, 2, -2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-red-500/20 mix-blend-screen"
              animate={{ x: [2, -2, 2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </>
        )}

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <motion.div 
              className="text-5xl"
              animate={isHovered ? { 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {track.icon}
            </motion.div>
            
            {/* Japanese glitch text */}
            <motion.div 
              className="text-xs font-bold text-black/50 writing-vertical"
              style={{ writingMode: 'vertical-rl' }}
              animate={isHovered ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {track.glitchChars}
            </motion.div>
          </div>

          {/* Title with glitch effect */}
          <div className="mb-2">
            <motion.h3 
              className="text-3xl md:text-4xl font-black text-black leading-none tracking-tighter"
              style={{
                WebkitTextStroke: '1px #000',
                textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
              }}
              animate={isHovered ? {
                x: [0, -2, 2, 0],
                skewX: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 0.2 }}
            >
              {track.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm font-bold text-black/70 uppercase tracking-widest mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            >
              {track.subtitle}
            </motion.p>
          </div>

          {/* Description */}
          <motion.p 
            className="text-black/80 text-sm font-semibold leading-relaxed mt-auto"
            initial={{ opacity: 0.7 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
          >
            {track.description}
          </motion.p>

          {/* Action indicator */}
          <motion.div 
            className="mt-4 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          >
            <span className="text-xs font-black text-black uppercase tracking-wider">
              Enter Dimension
            </span>
            <motion.span 
              className="text-black text-xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Comic book corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-black" 
             style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
        <div className="absolute bottom-0 right-0 w-12 h-12 text-white flex items-center justify-center font-black text-xl">
          0{track.id}
        </div>

        {/* Scanline effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-8 pointer-events-none"
          animate={isHovered ? { top: ['-10%', '110%'] } : { top: '-10%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Halftone pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '8px 8px'
          }}
        />
      </motion.div>

      {/* Reflection/shadow below card */}
      <motion.div
        className="absolute -bottom-4 left-4 right-4 h-4 bg-black/30 rounded-full blur-xl"
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.6 : 0.3
        }}
      />
    </motion.div>
  );
};

// Glitch text component
const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      
      {glitch && (
        <>
          <span 
            className="absolute top-0 left-0 -z-10 text-red-500"
            style={{ clipPath: 'inset(10% 0 60% 0)', transform: 'translate(-3px, -2px)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 -z-10 text-cyan-400"
            style={{ clipPath: 'inset(60% 0 10% 0)', transform: 'translate(3px, 2px)' }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

export default Tracks;