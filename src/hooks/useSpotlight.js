import { useEffect } from 'react'

/**
 * One delegated pointer listener for the whole page: the hovered `.card` gets
 * --mx / --my set to the cursor position, which drives the spotlight glow in
 * App.css. Skipped on touch devices and for reduced-motion users.
 */
export default function useSpotlight() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return

    const onMove = (e) => {
      const card = e.target.closest?.('.card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
