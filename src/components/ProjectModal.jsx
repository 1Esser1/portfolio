import { useEffect, useRef } from 'react'
import Icon from './Icons'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!project) return

    previouslyFocused.current = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('is-locked')

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
      previouslyFocused.current?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="icon-btn modal-close"
          onClick={onClose}
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
