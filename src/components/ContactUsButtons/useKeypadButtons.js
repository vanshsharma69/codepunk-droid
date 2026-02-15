import { useEffect } from 'react'

export default function useKeypadButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.key')

    const press = (btn) => {
      btn.dataset.pressed = 'true'
      setTimeout(() => {
        btn.dataset.pressed = 'false'
      }, 120)
    }

    buttons.forEach((btn) => {
      btn.addEventListener('pointerdown', () => press(btn))
    })

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('pointerdown', press)
      })
    }
  }, [])
}
