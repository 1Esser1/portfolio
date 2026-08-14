import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Leadership from './components/Leadership'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import './App.css'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
