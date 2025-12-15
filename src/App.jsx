import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-sky-500/30 font-sans">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
