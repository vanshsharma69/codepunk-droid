import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tracks = [
  { id: 1, color: "#FF3366" },
  { id: 2, color: "#00D9FF" },
  { id: 3, color: "#FF6B00" },
  { id: 4, color: "#9D4EDD" },
  { id: 5, color: "#00F5D4" },
  { id: 6, color: "#FFE600" }
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
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-blue-500 to-yellow-400" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white"
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
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <TrackCard 
              key={track.id} 
              track={track} 
              index={index} 
              isInView={isInView} 
            />
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
      className="relative"
    >
      <div
        className="relative h-56 rounded-2xl overflow-hidden border-4 border-black flex items-center justify-center"
        style={{
          backgroundColor: track.color,
          boxShadow: '6px 6px 0px #000',
        }}
      >
        {/* Pattern */}
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

        {/* TBA Text */}
        <div
          className="relative z-10 text-4xl md:text-5xl font-black text-black"
          style={{
            WebkitTextStroke: '2px #000',
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}
        >
          TBA
        </div>

        {/* Corner Number */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-black flex items-center justify-center">
          <span className="text-white font-black text-lg">
            0{track.id}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Tracks;
