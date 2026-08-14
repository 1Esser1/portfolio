import Section from './Section'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { leadership } from '../data/content'

function LeadershipCard({ entry }) {
  const ref = useReveal()

  return (
    <article className="card lead-card reveal" ref={ref}>
      <header className="lead-head">
        <div>
          <h3>{entry.org}</h3>
          <p className="lead-place">{entry.place}</p>
        </div>
        <span className={`lead-period mono ${entry.current ? 'is-current' : ''}`}>
          {entry.current && <span className="lead-dot" aria-hidden="true" />}
          {entry.period}
        </span>
      </header>

      <div className="tag-list lead-roles">
        {entry.roles.map((role) => (
          <span key={role} className="tag tag-accent">
            {role}
          </span>
        ))}
      </div>

      <ul className="bullets">
        {entry.points.map((point, i) => (
          <li key={i}>
            <Icon name="check" size={14} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="05 / Leadership"
      title="Six years of running teams, not just joining them"
      lead="Engineering gets you the solution. Recruitment, HR management and organising conferences at regional scale taught me how to get it adopted."
    >
      <div className="lead-grid">
        {leadership.map((entry) => (
          <LeadershipCard key={entry.org} entry={entry} />
        ))}
      </div>
    </Section>
  )
}
