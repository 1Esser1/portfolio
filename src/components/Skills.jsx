import Section from './Section'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { skills } from '../data/content'

function SkillGroup({ group, index }) {
  const ref = useReveal()

  return (
    <article className="card skill-card reveal" ref={ref} style={{ '--d': index % 3 }}>
      <header className="skill-head">
        <span className="skill-icon">
          <Icon name={group.icon} size={18} />
        </span>
        <h3>{group.group}</h3>
      </header>
      <ul className="skill-items">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="05 / Skills"
      title="The toolkit"
      lead="Grouped by what I use it for, not by how impressive the list looks."
    >
      <div className="skill-grid">
        {skills.map((group, i) => (
          <SkillGroup key={group.group} group={group} index={i} />
        ))}
      </div>
    </Section>
  )
}
