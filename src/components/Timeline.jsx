import { motion } from "framer-motion";
import pig from "../assets/pig.svg";
import light from "../assets/light.avif";

const timelineData = [
  {
    title: "Registrations Open",
    date: "10 March 2026",
    desc: "Participants from across the multiverse begin assembling for the ultimate hackathon."
  },
  {
    title: "Idea Submission",
    date: "15 March 2026",
    desc: "Pitch your breakthrough concept and prepare to disrupt reality itself."
  },
  {
    title: "Hack Begins",
    date: "20 March 2026",
    desc: "48 hours of intense coding, creativity, and multiversal collaboration."
  },
  {
    title: "Final Presentation",
    date: "22 March 2026",
    desc: "Showcase your innovation before our elite panel of judges."
  }
];

export default function Timeline() {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden">

      {/* Big Heading 90% Width */}
      <div className="w-[90%] mx-auto mb-24">
        <h2 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-wider">
          Hackathon Timeline
        </h2>
      </div>

      {/* Timeline Cards */}
      <div className="relative w-full flex flex-col items-center gap-32">

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-[85%] md:w-[60%]"
          >

            {/* Reverse Isosceles Triangle Shape */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 
                            p-12 clip-triangle holographic-card">

              {/* Light Behind Pig */}
              <img
                src={light}
                alt="light"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none"
              />

              {/* Center Pig */}
              <div className="relative flex justify-center mb-8">
                <img
                  src={pig}
                  alt="pig"
                  className="w-20 h-20 z-10"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-pink-400 font-semibold mb-4">{item.date}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Styles */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
        }

        .holographic-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .holographic-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            rgba(255, 0, 255, 0.3),
            rgba(0, 255, 255, 0.3),
            rgba(255, 255, 0, 0.3)
          );
          transform: rotate(25deg);
          animation: holo 6s linear infinite;
          pointer-events: none;
        }

        @keyframes holo {
          0% {
            transform: translateX(-30%) rotate(25deg);
          }
          100% {
            transform: translateX(30%) rotate(25deg);
          }
        }
      `}</style>
    </section>
  );
}
