import Hero from './components/hero'
import About from './components/about'
import Tools from './components/tools'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
