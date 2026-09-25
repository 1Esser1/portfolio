import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 to the number inside `value` ("8+", "50+", "3") once it
 * scrolls into view, keeping any prefix/suffix. Reduced motion: final value.
 */
export default function CountUp({ value, duration = 1400 }) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const target = match ? Number(match[2]) : 0
  const [n, setN] = useState(target)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined') return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(2, -10 * t) // easeOutExpo
          setN(Math.round(eased * target))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        setN(0)
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  if (!match) return value

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {match[1]}
        {n}
        {match[3]}
      </span>
    </span>
  )
}
