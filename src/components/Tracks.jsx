import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tracks = [
  {
    id: 1,
    title: "AI HEALTH",
    subtitle: "Neural Care",
    description: "Revolutionize healthcare with AI-driven diagnostics, predictive medicine, and smart health monitoring systems.",
    color: "#FF3366",
    icon: "🧬",
  },
  {
    id: 2,
    title: "AR/VR",
    subtitle: "Reality Hacked",
    description: "Build immersive realities. Create worlds that blur the line between digital and physical existence.",
    color: "#00D9FF",
    icon: "🥽",
  },
  {
    id: 3,
    title: "GAMING",
    subtitle: "Level Up",
    description: "Craft next-gen experiences. From indie gems to AAA mechanics, redefine interactive entertainment.",
    color: "#FF6B00",
    icon: "🎮",
  },
  {
    id: 4,
    title: "EDTECH",
    subtitle: "Learn Verse",
    description: "Transform education through technology. Gamified learning, AI tutors, and immersive classrooms.",
    color: "#9D4EDD",
    icon: "📚",
  },
  {
    id: 5,
    title: "FINTECH",
    subtitle: "Crypto Web",
    description: "Disrupt finance with blockchain, DeFi solutions, and next-generation payment systems.",
    color: "#00F5D4",
    icon: "💰",
  },
  {
    id: 6,
    title: "OPEN INNO",
    subtitle: "Wildcard",
    description: "No limits. Your craziest ideas welcome. Build something that defies categorization.",
    color: "#FFE600",
    icon: "⚡",
  }
];

const Tracks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  return (
    <section 
      id="tracks"
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Top Divider Only */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-blue-500 to-yellow-400" />

      {/* Static Background - No Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static dots pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Static orbs - No pulse animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4"
            style={{
              textShadow: `
                4px 4px 0px #FF3366,
                8px 8px 0px #00D9FF,
                12px 12px 0px #FFE600
              `,
              WebkitTextStroke: '2px #000'
            }}
          >
            TRACKS
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 font-bold tracking-widest uppercase">
            Choose Your Dimension
          </p>
        </motion.div>
      </div>

      {/* Tracks Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrackCard = ({ track, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative group cursor-pointer"
    >
      {/* Card - Simple hover scale only */}
      <div
        className="relative h-full rounded-2xl overflow-hidden border-4 border-black transition-transform duration-200 hover:scale-[1.02]"
        style={{
          backgroundColor: track.color,
          boxShadow: '6px 6px 0px #000',
        }}
      >
        {/* Static background pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Icon */}
          <div className="text-4xl mb-4">
            {track.icon}
          </div>

          {/* Title */}
          <h3 
            className="text-2xl md:text-3xl font-black text-black leading-none tracking-tight mb-1"
            style={{
              WebkitTextStroke: '1px #000',
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
            }}
          >
            {track.title}
          </h3>
          
          <p className="text-xs font-bold text-black/60 uppercase tracking-widest mb-4">
            {track.subtitle}
          </p>

          {/* Description */}
          <p className="text-black/80 text-sm font-semibold leading-relaxed mt-auto">
            {track.description}
          </p>

          {/* Simple hover indicator */}
          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-xs font-black text-black uppercase tracking-wider">
              
            </span>
            
          </div>
        </div>

        {/* Corner number */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-black flex items-center justify-center">
          <span className="text-white font-black text-lg">0{track.id}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Tracks;