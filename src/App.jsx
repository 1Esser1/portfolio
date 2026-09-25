import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Demos from './components/Demos'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import useTheme from './hooks/useTheme'
import useSpotlight from './hooks/useSpotlight'
import { demos } from './data/content'
import './App.css'
import './motion.css'

export default function App() {
  const { theme, toggle } = useTheme()
  const [demoId, setDemoId] = useState(demos[0].id)
  const [autoPlay, setAutoPlay] = useState(null)
  useSpotlight()

  // "Watch demo" on a project card: select it, scroll to the player, start it.
  const watchDemo = (id) => {
    setDemoId(id)
    setAutoPlay({ id, at: Date.now() })
    document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })
  }

  const selectDemo = (id) => {
    setDemoId(id)
    setAutoPlay(null)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />
      <Nav theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects onWatchDemo={watchDemo} onSelectDemo={selectDemo} />
        <Demos activeId={demoId} onSelect={selectDemo} autoPlay={autoPlay} />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
