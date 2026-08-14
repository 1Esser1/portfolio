import { useState } from 'react'
import Section from './Section'
import Icon from './Icons'
import ProjectModal from './ProjectModal'
import useReveal from '../hooks/useReveal'
import { projects, profile } from '../data/content'

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)

function FeaturedProject({ project, onOpen }) {
  const ref = useReveal()

  return (
    <article className="card featured reveal" ref={ref}>
      <div className="featured-glow" aria-hidden="true" />

      <div className="featured-main">
        <p className="featured-badge mono">
          <span className="featured-badge-dot" aria-hidden="true" />
          Flagship · Final year project
        </p>

        <h3 className="featured-name">{project.name}</h3>
        <p className="featured-tagline">{project.tagline}</p>
        <p className="featured-context mono">{project.context}</p>

        <p className="featured-summary">{project.summary}</p>

        <ul className="featured-highlights">
          {project.highlights.map((h) => (
            <li key={h}>
              <Icon name="spark" size={14} />
              {h}
            </li>
          ))}
        </ul>

        <div className="tag-list featured-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tag tag-accent">
              {tech}
            </span>
          ))}
        </div>

        <div className="featured-actions">
          <button type="button" className="btn btn-primary" onClick={() => onOpen(project)}>
            Read the full breakdown
            <Icon name="arrowRight" size={16} />
          </button>
          <span className="featured-role mono">{project.role}</span>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project, onOpen }) {
  const ref = useReveal()
  const hasDetail = project.detail.length > 0

  return (
    <article
      className={`card project-card reveal ${hasDetail ? 'is-clickable' : ''}`}
      ref={ref}
      onClick={hasDetail ? () => onOpen(project) : undefined}
    >
      <header className="project-head">
        <span className={`project-status mono ${project.status === 'In progress' ? 'is-live' : ''}`}>
          {project.status}
        </span>
        {hasDetail && <Icon name="arrowUpRight" size={18} className="project-arrow" />}
      </header>

      <h3 className="project-name">{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-summary">{project.summary}</p>

      <footer className="project-foot">
        <p className="project-context mono">{project.context}</p>
        {project.stack.length > 0 && (
          <div className="tag-list">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </footer>
    </article>
  )
}

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)
  const ctaRef = useReveal()

  return (
    <Section
      id="projects"
      eyebrow="03 / Projects"
      title="What I've actually built"
      lead="One platform built solo for a bank, an automation pipeline that removed a manual step entirely, and four client projects currently in flight."
    >
      {featured && <FeaturedProject project={featured} onOpen={setOpenProject} />}

      <div className="project-grid">
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setOpenProject} />
        ))}
      </div>

      <div className="projects-cta reveal" ref={ctaRef}>
        <p>More code, commits and work-in-progress live on GitHub.</p>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          <Icon name="github" size={17} />
          github.com/{profile.githubHandle}
          <Icon name="arrowUpRight" size={15} />
        </a>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </Section>
  )
}
