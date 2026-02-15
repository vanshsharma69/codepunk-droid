import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const LogoMoving = ({ image, speed = 20, size = 100 }) => {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const width = el.scrollWidth / 2

      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -width,
          duration: speed,
          repeat: -1,
          ease: "linear",
        }
      )
    })

    return () => ctx.revert()
  }, [speed])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-16"
        style={{ width: "max-content" }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...Array(20)].map((_, i) => (
          <img
            key={`first-${i}`}
            src={image}
            alt="logo"
            style={{ width: size }}
            className="opacity-100"
          />
        ))}

        {[...Array(20)].map((_, i) => (
          <img
            key={`second-${i}`}
            src={image}
            alt="logo"
            style={{ width: size }}
            className="opacity-100"
          />
        ))}
      </div>
    </div>
  )
}

export default LogoMoving
