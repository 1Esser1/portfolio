import Section from './Section'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { education } from '../data/content'

function EducationItem({ entry }) {
  const ref = useReveal()

  return (
    <li className="card edu-card reveal" ref={ref}>
      <span className="edu-icon">
        <Icon name="cap" size={18} />
      </span>
      <div className="edu-text">
        <h3>{entry.school}</h3>
        <p className="edu-degree">{entry.degree}</p>
        <p className="edu-place mono">{entry.place}</p>
      </div>
      <span className="edu-period mono">{entry.period}</span>
    </li>
  )
}

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="07 / Education"
      title="Academic background"
      lead="An engineering track in Business Intelligence, built on two preparatory cycles in computer science."
    >
      <ul className="edu-list">
        {education.map((entry) => (
          <EducationItem key={entry.school} entry={entry} />
        ))}
      </ul>
    </Section>
  )
}
