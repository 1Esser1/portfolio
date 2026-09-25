import { useEffect, useRef, useState } from 'react'
import Icon from './Icons'

/**
 * Thin reading-progress bar under the nav, plus a back-to-top button whose
 * ring fills with the same progress. Writes to CSS vars — no re-render per frame.
 */
export default function ScrollProgress() {
  const rootRef = useRef(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      rootRef.current?.style.setProperty('--progress', p.toFixed(4))
      setShowTop(window.scrollY > window.innerHeight * 0.9)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={rootRef} className="scroll-progress-root">
      <div className="scroll-progress" aria-hidden="true" />
      <a
        href="#top"
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg className="to-top-ring" viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="22" pathLength="1" />
        </svg>
        <Icon name="arrowUp" size={18} />
      </a>
    </div>
  )
}
