import { useEffect } from 'react'
import './ContactUsButtons.css'

export default function ContactUsButtons() {
  useEffect(() => {
    const clickAudio = new Audio(
      'https://cdn.freesound.org/previews/378/378085_6260145-lq.mp3'
    )

    const form = document.getElementById('contact-form')

    const submitForm = () => {
      if (form) form.requestSubmit()
    }

    const config = {
      one: { key: 'o', travel: 26, hue: 114, saturation: 1.4, brightness: 1.2 },
      two: { key: 'g', travel: 26, hue: 0, saturation: 0, brightness: 1.4 },
      three: { key: 'Enter', travel: 18, hue: 0, saturation: 0, brightness: 0.4 },
    }

    Object.entries(config).forEach(([id, cfg]) => {
      const btn = document.getElementById(id)
      if (!btn) return

      btn.style.setProperty('--travel', cfg.travel)
      btn.style.setProperty('--hue', cfg.hue)
      btn.style.setProperty('--saturate', cfg.saturation)
      btn.style.setProperty('--brightness', cfg.brightness)

      btn.addEventListener('click', submitForm)
    })

    const handleKeyDown = (e) => {
      Object.entries(config).forEach(([id, cfg]) => {
        if (e.key === cfg.key) {
          const btn = document.getElementById(id)
          if (!btn) return
          btn.dataset.pressed = 'true'
          clickAudio.currentTime = 0
          clickAudio.play()
          submitForm()
        }
      })
    }

    const handleKeyUp = () => {
      document.querySelectorAll('.key').forEach((k) => {
        k.dataset.pressed = 'false'
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    document.querySelector('.keypad').style.opacity = 1

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="keypad">
      <div className="keypad__base">
        <img src="https://assets.codepen.io/605876/keypad-base.png" alt="" />
      </div>

      <button id="one" className="key keypad__single keypad__single--left">
        <span className="key__mask">
          <span className="key__content">
            <span className="key__text">ok</span>
            <img src="https://assets.codepen.io/605876/keypad-single.png" />
          </span>
        </span>
      </button>

      <button id="two" className="key keypad__single">
        <span className="key__mask">
          <span className="key__content">
            <span className="key__text">go</span>
            <img src="https://assets.codepen.io/605876/keypad-single.png" />
          </span>
        </span>
      </button>

      <button id="three" className="key keypad__double">
        <span className="key__mask">
          <span className="key__content">
            <span className="key__text">enter.</span>
            <img src="https://assets.codepen.io/605876/keypad-double.png" />
          </span>
        </span>
      </button>
    </div>
  )
}
