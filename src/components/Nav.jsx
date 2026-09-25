import { useEffect, useState } from 'react'
import Icon from './Icons'
import useActiveSection from '../hooks/useActiveSection'
import { nav, profile } from '../data/content'

const ids = nav.map((item) => item.id)

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-mark">{profile.initials}</span>
          <span className="nav-brand-text">
            <strong>{profile.name}</strong>
            <span>{profile.shortTitle}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <a className="btn btn-primary btn-sm nav-cv" href={profile.cv} download>
            <Icon name="download" size={16} />
            Résumé
          </a>

          <button
            type="button"
            className="icon-btn nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div className={`nav-drawer ${open ? 'is-open' : ''}`}>
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className={active === item.id ? 'is-active' : ''}
          >
            <span className="mono">{String(nav.indexOf(item) + 1).padStart(2, '0')}</span>
            {item.label}
          </a>
        ))}
        <a className="btn btn-primary" href={profile.cv} download onClick={() => setOpen(false)}>
          <Icon name="download" size={16} />
          Download résumé
        </a>
      </div>
    </header>
  )
}
