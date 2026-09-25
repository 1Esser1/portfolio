import { useCallback, useState } from 'react'
import Section from './Section'
import Icon from './Icons'
import ProjectModal from './ProjectModal'
import useReveal from '../hooks/useReveal'
import { projects, profile, demos } from '../data/content'

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)

function FeaturedProject({ project, onOpen, onSelectDemo, onWatchDemo }) {
  const ref = useReveal()
  const demo = demos.find((d) => d.id === project.id)

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
          {demo?.status === 'ready' && (
            <button type="button" className="btn btn-ghost" onClick={() => onWatchDemo(demo.id)}>
              <Icon name="play" size={14} />
              Watch the demo · {demo.duration}
            </button>
          )}
          {demo?.status === 'soon' && (
            <a className="btn btn-ghost" href="#demos" onClick={() => onSelectDemo(demo.id)}>
              <Icon name="film" size={16} />
              Demo — coming soon
            </a>
          )}
          <span className="featured-role mono">{project.role}</span>
        </div>
      </div>
    </article>
  )
}

function ProjectLinks({ project, onWatchDemo }) {
  if (!project.links && !project.demo) return null
  const stop = (e) => e.stopPropagation()

  return (
    <div className="project-links">
      {project.demo && (
        <button
          type="button"
          className="project-link is-demo"
          onClick={(e) => {
            stop(e)
            onWatchDemo(project.demo)
          }}
        >
          <Icon name="play" size={12} />
          Watch demo
        </button>
      )}
      {project.links?.live && (
        <a className="project-link" href={project.links.live} target="_blank" rel="noreferrer" onClick={stop}>
          <Icon name="globe" size={14} />
          Live
        </a>
      )}
      {project.links?.repo && (
        <a className="project-link" href={project.links.repo} target="_blank" rel="noreferrer" onClick={stop}>
          <Icon name="github" size={14} />
          Code
        </a>
      )}
    </div>
  )
}

const statusClass = { 'In progress': 'is-live', Live: 'is-online' }

function ProjectCard({ project, index, onOpen, onWatchDemo }) {
  const ref = useReveal()
  const hasDetail = project.detail.length > 0

  return (
    <article
      className={`card project-card reveal ${hasDetail ? 'is-clickable' : ''}`}
      ref={ref}
      style={{ '--d': index % 3 }}
      onClick={hasDetail ? () => onOpen(project) : undefined}
    >
      <header className="project-head">
        <span className={`project-status mono ${statusClass[project.status] ?? ''}`}>
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
        <ProjectLinks project={project} onWatchDemo={onWatchDemo} />
      </footer>
    </article>
  )
}

export default function Projects({ onWatchDemo, onSelectDemo }) {
  const [openProject, setOpenProject] = useState(null)
  const ctaRef = useReveal()
  const closeModal = useCallback(() => setOpenProject(null), [])

  return (
    <Section
      id="projects"
      eyebrow="03 / Projects"
      title="What I've actually built"
      lead="One platform built solo for a bank, a live dashboard running AIESEC UK's national exchange funnel, an automation pipeline that removed a manual step entirely, and four projects currently in flight."
    >
      {featured && (
        <FeaturedProject
          project={featured}
          onOpen={setOpenProject}
          onSelectDemo={onSelectDemo}
          onWatchDemo={onWatchDemo}
        />
      )}

      <div className="project-grid">
        {others.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpen={setOpenProject}
            onWatchDemo={onWatchDemo}
          />
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

      {openProject && (
        <ProjectModal key={openProject.id} project={openProject} onClose={closeModal} />
      )}
    </Section>
  )
}
