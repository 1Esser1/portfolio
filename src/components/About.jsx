import Section from './Section'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { profile, skills } from '../data/content'

const focusAreas = [
  {
    icon: 'chart',
    title: 'Business Intelligence',
    text: 'Power BI dashboards, KPI design and data modelling — turning scattered operational data into one number a manager can act on.',
  },
  {
    icon: 'code',
    title: 'Full-stack engineering',
    text: 'React front ends on Spring Boot back ends, with MySQL/SQL Server underneath and real-time layers where they earn their place.',
  },
  {
    icon: 'layers',
    title: 'ERP & integration',
    text: 'SAP and Oracle ERP fundamentals, business process optimisation, and wiring systems together — Jira, GitHub/GitLab, OAuth flows.',
  },
  {
    icon: 'users',
    title: 'Leading teams',
    text: 'Six years across AIESEC, Rotaract and IEEE CS: recruitment, HR management, and conferences from local to MEA regional scale.',
  },
]

export default function About() {
  const bodyRef = useReveal()
  const gridRef = useReveal()

  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="Data on one side, the people who use it on the other"
      lead="I care about the distance between a number and a decision — and I'd rather build the whole path than one slice of it."
    >
      <div className="about-layout">
        <div className="about-body reveal" ref={bodyRef}>
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="about-quickfacts">
            <div>
              <span className="mono">Currently</span>
              <p>Awaiting my engineering degree defense at ESPRIT</p>
            </div>
            <div>
              <span className="mono">Based in</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span className="mono">Core stack</span>
              <p>Power BI · Python · SQL · React · Spring Boot</p>
            </div>
            <div>
              <span className="mono">Looking for</span>
              <p>Graduate roles in BI, Data, ERP or Software Engineering</p>
            </div>
            <div>
              <span className="mono">Languages</span>
              <p>
                {profile.languages
                  .map((lang) => `${lang.name} (${lang.level.toLowerCase()})`)
                  .join(' · ')}
              </p>
            </div>
          </div>
        </div>

        <div className="about-grid reveal-stagger" ref={gridRef}>
          {focusAreas.map((area, i) => (
            <article key={area.title} className="card focus-card" style={{ '--i': i }}>
              <span className="focus-icon">
                <Icon name={area.icon} size={20} />
              </span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="about-toolstrip">
        <span className="mono">Working with</span>
        {skills
          .flatMap((group) => group.items)
          .slice(0, 14)
          .map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
      </p>
    </Section>
  )
}
