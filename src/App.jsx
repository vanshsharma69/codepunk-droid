import { useEffect, useState, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import "./App.css"

import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import droidIntro from "./assets/droid_intro.mp4"
import LogoMoving from "./components/LogoMoving"
import spiderlogo from "./assets/spider-logo.png"
import SponsorSection from "./components/SponsorSection"
import FAQSection from "./components/FAQSection"
import ContactSection from "./components/ContactUsButtons/ContactSection"
import TimeCounter from "./components/TimeCounter"
import Timeline from "./components/Timeline"
import Prizepool from "./components/PrizePool"
import Tracks from "./components/Tracks"

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [, setSkipReady] = useState(false)
  const lenisRef = useRef(null)

  /* =============================
     PREMIUM LENIS SMOOTH SCROLL
  ============================== */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,      // slower = smoother
      lerp: 0.06,         // smaller = more fluid
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  /* =============================
     DISABLE SCROLL DURING INTRO
  ============================== */
  useEffect(() => {
    if (!lenisRef.current) return

    if (showIntro) {
      lenisRef.current.stop()
    } else {
      lenisRef.current.start()
    }
  }, [showIntro])

  /* =============================
     INTRO VIDEO LOGIC
  ============================== */
  useEffect(() => {
    const skipTimer = setTimeout(() => setSkipReady(true), 1200)
    const failsafeTimer = setTimeout(() => setShowIntro(false), 10000)

    return () => {
      clearTimeout(skipTimer)
      clearTimeout(failsafeTimer)
    }
  }, [])

  const handleIntroEnd = () => setShowIntro(false)

  return (
    <div className="relative min-h-screen bg-black text-slate-100">

      {/* INTRO SCREEN */}
      {showIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            className="h-full w-full object-cover"
            src={droidIntro}
            autoPlay
            muted
            playsInline
            onEnded={handleIntroEnd}
            onError={handleIntroEnd}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black"
            aria-hidden
          />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div
        className={`relative z-10 pb-20 transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavBar />
        <HeroSection />
        <LogoMoving image={spiderlogo} speed={25} size={120} />
        <TimeCounter />
        <Prizepool />
        <Tracks />
        <Timeline />
        <SponsorSection />
        <FAQSection />
        <ContactSection />

        <h1 className="font-slackey text-5xl mx-auto text-center mt-20">
          Hackathon 2026
        </h1>

        <Footer />
      </div>
    </div>
  )
}

export default App
