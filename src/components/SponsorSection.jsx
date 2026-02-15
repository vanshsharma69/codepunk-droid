import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const SponsorSection = () => {
  return (
    <section className="relative bg-black py-28 text-white overflow-hidden">
      
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.07), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
            Our Sponsors
          </h2>
          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Proudly supported by leading global brands driving innovation.
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-red-500 uppercase tracking-[0.2em] text-xs mb-8">
            Title Sponsor
          </p>

          <img
            src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg"
            alt="Title Sponsor"
            className="h-24 md:h-32 mx-auto object-contain opacity-90 hover:opacity-100 transition duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-red-500 uppercase tracking-[0.2em] text-xs text-center mb-12">
            Gold Sponsors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {[
              "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
              "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",
              "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
              "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
            ].map((logo, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex justify-center"
              >
                <img
                  src={logo}
                  alt="Gold Sponsor"
                  className="h-14 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-red-500 uppercase tracking-[0.2em] text-xs text-center mb-12">
            Silver Sponsors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 items-center">
            {[
              "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
              "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
              "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
              "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
              "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
              "https://cdn.worldvectorlogo.com/logos/stripe-4.svg"
            ].map((logo, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex justify-center"
              >
                <img
                  src={logo}
                  alt="Silver Sponsor"
                  className="h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default SponsorSection
