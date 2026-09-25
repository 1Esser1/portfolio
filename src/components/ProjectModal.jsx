import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icons'

/** Exit runs ~65% of the enter duration, then the parent unmounts us. */
const EXIT_MS = 200

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)
  const [closing, setClosing] = useState(false)

  const requestClose = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return onClose()
    setClosing(true)
    setTimeout(onClose, EXIT_MS)
  }, [onClose])

  useEffect(() => {
    if (!project) return

    previouslyFocused.current = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('is-locked')

    const onKey = (e) => {
      if (e.key === 'Escape') requestClose()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
      previouslyFocused.current?.focus?.()
    }
  }, [project, requestClose])

  if (!project) return null

  return (
    <div
      className={`modal-backdrop ${closing ? 'is-closing' : ''}`}
      onClick={requestClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="icon-btn modal-close"
          onClick={requestClose}
          aria-label="Close project details"
        >
          <Icon name="close" size={20} />
        </button>

        <header className="modal-head">
          <p className="eyebrow">{project.status}</p>
          <h3 id="project-modal-title">{project.name}</h3>
          <p className="modal-tagline">{project.tagline}</p>

          <dl className="modal-facts">
            <div>
              <dt className="mono">Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div>
              <dt className="mono">Role</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>

          {project.links && (
            <div className="modal-links">
              {project.links.live && (
                <a className="btn btn-primary btn-sm" href={project.links.live} target="_blank" rel="noreferrer">
                  <Icon name="globe" size={15} />
                  Open live app
                </a>
              )}
              {project.links.repo && (
                <a className="btn btn-ghost btn-sm" href={project.links.repo} target="_blank" rel="noreferrer">
                  <Icon name="github" size={15} />
                  Source code
                </a>
              )}
            </div>
          )}

          {project.stack.length > 0 && (
            <div className="tag-list">
              {project.stack.map((tech) => (
                <span key={tech} className="tag tag-accent">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="modal-body">
          <p className="modal-summary">{project.summary}</p>

          {project.detail.map((block) => (
            <section key={block.heading} className="modal-block">
              <h4>{block.heading}</h4>
              <ul className="bullets">
                {block.points.map((point, i) => (
                  <li key={i}>
                    <Icon name="check" size={14} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
