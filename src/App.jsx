import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-sky-500/30 font-sans relative overflow-hidden">
      {/* Global Fixed Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[40%] bg-sky-600/10 rounded-full blur-[100px]"></div>
      </div>

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
