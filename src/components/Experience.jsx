import Section from './Section'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { experience } from '../data/content'

function ExperienceItem({ job }) {
  const ref = useReveal()

  return (
    <li className="timeline-item reveal" ref={ref}>
      <span className="timeline-marker" aria-hidden="true">
        <Icon name="briefcase" size={15} />
      </span>

      <article className="card timeline-card">
        <header className="timeline-head">
          <div>
            <h3 className="timeline-role">{job.role}</h3>
            <p className="timeline-company">
              <span>{job.company}</span>
              <span className="timeline-sep" aria-hidden="true">
                ·
              </span>
              <span className="timeline-place">{job.location}</span>
            </p>
          </div>
          <span className="timeline-period mono">{job.period}</span>
        </header>

        <p className="timeline-summary">{job.summary}</p>

        <ul className="bullets">
          {job.bullets.map((bullet, i) => (
            <li key={i}>
              <Icon name="check" size={14} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {job.stack.length > 0 && (
          <div className="tag-list timeline-stack">
            {job.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </article>
    </li>
  )
}

export default function Experience() {
  const lineRef = useReveal({ threshold: 0.05 })

  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Three internships, three different angles on data"
      lead="From centralising reporting, to shipping ML-backed dashboards, to building a full decision platform for a bank's IT department."
    >
      <ol className="timeline reveal-line" ref={lineRef}>
        {experience.map((job) => (
          <ExperienceItem key={`${job.company}-${job.role}`} job={job} />
        ))}
      </ol>
    </Section>
  )
}
