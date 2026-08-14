import { useState } from 'react'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { profile } from '../data/content'

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (insecure origin / permissions) — the mailto link still works.
    }
  }

  const channels = [
    {
      icon: 'mail',
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: `in/${profile.linkedinHandle}`,
      href: profile.linkedin,
      external: true,
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: profile.githubHandle,
      href: profile.github,
      external: true,
    },
  ]

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card reveal" ref={ref}>
          <div className="contact-glow" aria-hidden="true" />

          <p className="eyebrow">07 / Contact</p>
          <h2 className="contact-title">
            I'm looking for my first role.
            <br />
            <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="contact-lead">
            Open to graduate positions in Business Intelligence, Data, ERP and Software
            Engineering — in Tunisia or remote. If you have a role in mind, or just want the full
            story on Nexus, my inbox is open.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={17} />
              Send me an email
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail}>
              <Icon name={copied ? 'check' : 'copy'} size={16} />
              {copied ? 'Copied!' : 'Copy address'}
            </button>
            <a className="btn btn-ghost" href={profile.cv} download>
              <Icon name="download" size={16} />
              Résumé
            </a>
          </div>

          <ul className="contact-grid">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noreferrer' : undefined}
                >
                  <span className="contact-icon">
                    <Icon name={channel.icon} size={17} />
                  </span>
                  <span className="contact-text">
                    <span className="mono">{channel.label}</span>
                    <strong>{channel.value}</strong>
                  </span>
                  <Icon name="arrowUpRight" size={15} className="contact-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
