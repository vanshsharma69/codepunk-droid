import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import timelineSvg from "../assets/timeline.svg";

/* ✅ Timeline Data (Required) */
const timelineData = [
  {
    id: 1,
    title: "1. ORIGINS",
    description:
      "Where it all began. The spark of an idea that would eventually grow into something extraordinary.",
    icon: "🚀",
    image: "/src/assets/pig.svg",
  },
  {
    id: 2,
    title: "2. EXPANSION",
    description:
      "Growth and exploration. We pushed boundaries and expanded beyond what we thought possible.",
    icon: "⚡",
    image: "/src/assets/pig.svg",
  },
  {
    id: 3,
    title: "3. INNOVATION",
    description:
      "Through creativity and determination, we built solutions that changed perspectives.",
    icon: "💡",
    image: "/src/assets/pig.svg",
  },
  {
    id: 4,
    title: "4. RECOGNITION",
    description:
      "Our hard work was recognized and celebrated across industries.",
    icon: "🏆",
    image: "/src/assets/pig.svg",
  },
  {
    id: 5,
    title: "5. GLOBAL IMPACT",
    description:
      "Today, our journey continues globally, impacting thousands every day.",
    icon: "🌍",
    image: "/src/assets/pig.svg",
  },
];

/* Timeline Item */
const TimelineItem = ({ item, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: isLeft ? -80 : 80 }
      }
      transition={{ duration: 0.7 }}
      className={`flex items-center w-full mb-20 md:mb-32 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Text Side */}
      <div
        className={`w-5/12 ${
          isLeft ? "text-right pr-6 md:pr-12" : "text-left pl-6 md:pl-12"
        }`}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
          {item.title}
        </h2>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Center Dot */}
      <div className="w-2/12 flex justify-center relative">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-[#ff1865] rounded-full" />
        </div>
      </div>

      {/* Image Side */}
      <div
        className={`w-5/12 ${
          isLeft ? "pl-6 md:pl-12" : "pr-6 md:pr-12"
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>
    </motion.div>
  );
};

/* Curved Animated Line */
const CurvedTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const curvePath =
    "M 100 0 Q 100 200 100 400 Q 100 600 100 800 Q 100 1000 100 1200 Q 100 1400 100 1600";

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-48 h-full pointer-events-none"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 200 1600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={curvePath}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          d={curvePath}
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

/* Main Timeline */
const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-screen bg-[#ff1865] relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 flex justify-center pt-20 pb-16 px-4">
        <h1 className="w-1/2 text-center text-5xl md:text-7xl font-bold text-white border-b-4 border-white pb-4">
          TIMELINE
        </h1>
      </div>

      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto px-4 pb-40"
      >
        <div className="hidden md:block">
          <CurvedTimeline />
        </div>

        <div className="md:hidden absolute left-1/2 top-0  bottom-0 w-1">
          <motion.div
            className="absolute inset-0 bg-white origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        <div className="relative space-y-8 md:space-y-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        <div className="hidden md:flex justify-center mt-16">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
      </div>

      {/* Bottom SVG Decoration */}
      <div className="relative w-full">
        <img
          src={timelineSvg}
          alt="Timeline Bottom Decoration"
          className="w-screen max-w-none object-cover block"
        />
      </div>
    </div>
  );
};

export default Timeline;
