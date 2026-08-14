import { useEffect, useState } from 'react'
import Icon from './Icons'
import { profile } from '../data/content'

/** Stages of the Nexus pipeline — the diagram in the hero panel. */
const pipeline = [
  { step: '01', label: 'Request', note: 'IT & business teams submit work' },
  { step: '02', label: 'AI scoring', note: 'RICE · MoSCoW · Kano' },
  { step: '03', label: 'Plan', note: 'AI-generated subtasks & estimates' },
  { step: '04', label: 'Deliver', note: 'Sprints, SLA, Jira & Git sync' },
  { step: '05', label: 'Measure', note: 'DORA metrics & KPI dashboards' },
]

const doraMetrics = ['Lead time', 'Deploy freq.', 'Change failure', 'MTTR']

function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="hero-rotator">
      <span className="hero-rotator-caret" aria-hidden="true" />
      <span key={index} className="hero-rotator-text gradient-text">
        {profile.roles[index]}
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-identity">
            <span className="hero-avatar">
              <img
                src={profile.headshot}
                alt={`Portrait of ${profile.name}`}
                width="112"
                height="112"
                loading="eager"
              />
            </span>
            <p className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              {profile.available}
            </p>
          </div>

          <h1 className="hero-name">{profile.name}</h1>

          <p className="hero-role">
            <RotatingRole />
          </p>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-meta">
            <span>
              <Icon name="pin" size={15} />
              {profile.location}
            </span>
            <span>
              <Icon name="cap" size={15} />
              ESPRIT — BI Engineering
            </span>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View my work
              <Icon name="arrowRight" size={16} />
            </a>
            <a className="btn btn-ghost" href={profile.cv} download>
              <Icon name="download" size={16} />
              Download résumé
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={19} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon name="mail" size={19} />
            </a>
            <span className="hero-social-line" aria-hidden="true" />
            <a className="hero-social-text mono" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel">
            <div className="panel-bar">
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-title mono">nexus — flagship project</span>
            </div>

            <div className="panel-body">
              <p className="panel-kicker mono">How the platform works</p>

              <ol className="pipeline">
                {pipeline.map((stage, i) => (
                  <li key={stage.step} className="pipeline-step" style={{ '--i': i }}>
                    <span className="pipeline-node mono">{stage.step}</span>
                    <div className="pipeline-text">
                      <strong>{stage.label}</strong>
                      <span>{stage.note}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="panel-footer">
                <p className="panel-kicker mono">DORA metrics tracked</p>
                <div className="dora-strip">
                  {doraMetrics.map((m) => (
                    <span key={m} className="dora-chip mono">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="hero-stats">
          {profile.stats.map((stat) => (
            <li key={stat.label}>
              <strong className="gradient-text">{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
