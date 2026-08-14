import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * Used to highlight the matching link in the nav.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const visible = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        })

        if (visible.size === 0) return

        // Keep whichever observed section occupies the most of the viewport.
        const [topId] = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]
        setActive(topId)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
