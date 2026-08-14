import Icon from './Icons'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">
          <span className="nav-mark">{profile.initials}</span>
          <span>
            <strong>{profile.name}</strong>
            <span className="footer-role">{profile.title}</span>
          </span>
        </p>

        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" size={18} />
          </a>
          <a href="#top" aria-label="Back to top" className="footer-top">
            <Icon name="arrowDown" size={18} style={{ transform: 'rotate(180deg)' }} />
          </a>
        </div>
      </div>
    </footer>
  )
}
