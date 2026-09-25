import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import Icon from './Icons'
import useReveal from '../hooks/useReveal'
import { demos } from '../data/content'

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

function VideoPlayer({ demo, autoPlay }) {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const play = (at) => {
    const video = videoRef.current
    if (!video) return
    if (typeof at === 'number') video.currentTime = at
    setStarted(true)
    video.play().catch(() => {})
  }

  // Coming from a "Watch demo" button: the click is the user gesture, so play.
  // autoPlay is a token (timestamp), so a second click on the same demo replays.
  useEffect(() => {
    if (autoPlay) videoRef.current?.play().catch(() => {})
  }, [autoPlay])

  // Pause when the player scrolls mostly out of view.
  useEffect(() => {
    const video = videoRef.current
    if (!video || typeof IntersectionObserver === 'undefined') return
    // Only after it has been on screen: a smooth scroll toward the player
    // starts with it off screen, and must not cancel an autoplay.
    let seen = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) seen = true
        else if (seen && !video.paused) video.pause()
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const chapters = demo.chapters ?? []
  const current = chapters.reduce((acc, [t], i) => (time >= t ? i : acc), 0)

  return (
    <>
      <div className={`player ${started ? 'is-started' : ''}`}>
        <video
          ref={videoRef}
          src={demo.src}
          poster={demo.poster}
          preload="none"
          playsInline
          controls={started}
          onPlay={() => setStarted(true)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          aria-label={`${demo.project} demo video`}
        />

        {!started && (
          <button type="button" className="player-cover" onClick={() => play()}>
            <span className="player-play" aria-hidden="true">
              <Icon name="play" size={28} />
            </span>
            <span className="player-cta">
              <strong>Watch the demo</strong>
              <span className="mono">{demo.duration}</span>
            </span>
          </button>
        )}
      </div>

      {chapters.length > 0 && (
        <ol className="chapters" aria-label="Chapters">
          {chapters.map(([t, label], i) => {
            const end = chapters[i + 1]?.[0] ?? (duration || t + 1)
            const progress = i < current ? 1 : i > current ? 0 : (time - t) / (end - t)
            return (
              <li key={t}>
                <button
                  type="button"
                  className={`chapter ${started && i === current ? 'is-current' : ''}`}
                  style={{ '--p': started ? Math.min(Math.max(progress, 0), 1) : 0 }}
                  onClick={() => play(t)}
                >
                  <span className="mono">{fmt(t)}</span>
                  {label}
                </button>
              </li>
            )
          })}
        </ol>
      )}
    </>
  )
}

function ComingSoon({ demo }) {
  return (
    <div className="player player-soon">
      <div className="soon-grid" aria-hidden="true" />
      <div className="soon-body">
        <span className="soon-rec mono">
          <span className="soon-rec-dot" aria-hidden="true" />
          {demo.note}
        </span>
        <p className="soon-title">{demo.project}</p>
        <p className="soon-text">{demo.summary}</p>
        <span className="soon-bar" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function Demos({ activeId, onSelect, autoPlay }) {
  const layoutRef = useReveal()
  const demo = demos.find((d) => d.id === activeId) ?? demos[0]

  return (
    <Section
      id="demos"
      eyebrow="04 / Demos"
      title="See it running, not just described"
      lead="Short walkthroughs of the real apps, one to four minutes each. Jump to any chapter."
    >
      <div className="demos-layout reveal" ref={layoutRef}>
        <div className="demo-stage">
          <div className="demo-screen" key={demo.id}>
            {demo.status === 'ready' ? (
              <VideoPlayer demo={demo} autoPlay={autoPlay?.id === demo.id ? autoPlay.at : 0} />
            ) : (
              <ComingSoon demo={demo} />
            )}
          </div>

          <div className="demo-info" key={`${demo.id}-info`}>
            <p className="demo-project mono">{demo.project}</p>
            <h3 className="demo-title">{demo.title}</h3>
            <p className="demo-summary">{demo.summary}</p>
            {demo.links && (
              <div className="demo-links">
                {demo.links.live && (
                  <a className="btn btn-primary btn-sm" href={demo.links.live} target="_blank" rel="noreferrer">
                    <Icon name="globe" size={16} />
                    Open live app
                  </a>
                )}
                {demo.links.repo && (
                  <a className="btn btn-ghost btn-sm" href={demo.links.repo} target="_blank" rel="noreferrer">
                    <Icon name="github" size={16} />
                    Source code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <ul className="demo-list" aria-label="Demo videos">
          {demos.map((d, i) => (
            <li key={d.id}>
              <button
                type="button"
                className={`demo-item ${d.id === demo.id ? 'is-active' : ''}`}
                aria-pressed={d.id === demo.id}
                onClick={() => onSelect(d.id)}
              >
                <span className="demo-item-index mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="demo-item-text">
                  <strong>{d.project}</strong>
                  <span>{d.title}</span>
                </span>
                {d.status === 'ready' ? (
                  <span className="demo-item-meta mono">
                    <Icon name="play" size={11} />
                    {d.duration}
                  </span>
                ) : (
                  <span className="demo-item-meta is-soon mono">Soon</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
