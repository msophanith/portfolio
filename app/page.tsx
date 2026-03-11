import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
