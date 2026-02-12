import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import falldown from './assets/falldown.png'
import droidIntro from './assets/droid_intro.mp4'

function App() {
  const [showIntro, setShowIntro] = useState(true)

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
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-100">
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black" aria-hidden />
        </div>
      )}

      <div className=' top-[-32px] left-[-42px] fixed '>
        <img src={falldown} alt="Falldown" className="w-[250px] h-[340px]" />
      </div>
      <div className={`relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-10 xl:max-w-[1400px] transition-opacity duration-700 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <NavBar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}

export default App