import useReveal from '../hooks/useReveal'

export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  const ref = useReveal()

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <header className="section-head reveal" ref={ref}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
