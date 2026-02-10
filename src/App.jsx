import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-100">
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-10 xl:max-w-[1400px]">
        <NavBar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}

export default App