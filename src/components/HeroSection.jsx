import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Sparkles, Rocket, Quote } from 'lucide-react'

const heroText = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const HeroSection = () => {
  const pulseRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          opacity: 0.5,
          scale: 1.04,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative pt-8 md:pt-12">
      <div className="relative overflow-hidden px-6 py-16 text-center grid-scan">
        <div
          ref={pulseRef}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,64,64,0.22),transparent_44%),radial-gradient(circle_at_78%_30%,rgba(59,130,246,0.16),transparent_36%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6">
          <motion.p
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-200"
          >
            <span className="text-red-400">[</span>
            Protocol: CodePunk_2.0_Initiated
            <span className="text-red-400">]</span>
          </motion.p>

          <motion.h1
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-5xl font-black uppercase leading-[0.95] tracking-[0.08em] text-white drop-shadow-[0_12px_32px_rgba(255,32,32,0.45)] sm:text-6xl lg:text-7xl"
          >
            CodePunk 2.0
          </motion.h1>

          <motion.p
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.18 }}
            className="max-w-3xl text-lg text-slate-200 sm:text-xl"
          >
            Where deep thinking meets bold innovation. Breach the boundary between reality and algorithm—Spider-Verse style.
          </motion.p>

          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.26 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-red-400/60 bg-red-600 px-7 py-3 text-base font-semibold uppercase tracking-[0.08em] text-white shadow-[0_15px_45px_-18px_rgba(255,59,59,0.85)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_-15px_rgba(255,59,59,0.95)]"
            >
              <Sparkles className="h-5 w-5" />
              Initialize Sequence
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-base font-semibold uppercase tracking-[0.08em] text-slate-100 transition hover:border-red-400 hover:text-red-200"
            >
              <Rocket className="h-5 w-5" />
              View Timeline
            </a>
          </motion.div>

          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.34 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-200"
          >
            Sequence ID: CP-2026-ALPHA • 24H • On-Campus + Hybrid
          </motion.div>

          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.42 }}
            className="relative mt-4 max-w-3xl rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-left shadow-[0_22px_60px_-30px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3 text-red-200">
              <Quote className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">Spider-Man Code</p>
            </div>
            <p className="mt-3 text-lg font-semibold text-white">
              "With great power comes great responsibility." With great code comes great shipping—keep your tests tight and your swing smoother than a webline.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-inner shadow-slate-900/50">
                <p className="text-[11px] uppercase tracking-[0.2em] text-red-200">Date</p>
                <p className="text-lg font-semibold text-white">March 15 • 24 hours</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-inner shadow-slate-900/50">
                <p className="text-[11px] uppercase tracking-[0.2em] text-red-200">Venue</p>
                <p className="text-lg font-semibold text-white">Tech Arena, Campus Hub</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-200">
              <span className="rounded-full bg-red-600/20 px-3 py-1">AI & Web</span>
              <span className="rounded-full bg-blue-500/20 px-3 py-1">AR/VR</span>
              <span className="rounded-full bg-slate-800 px-3 py-1">Cyber-Defense</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
