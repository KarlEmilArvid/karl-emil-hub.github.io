import Hero from './components/hero'
import About from './components/about'
import Tools from './components/tools'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { useRef } from 'react'
import './App.scss'

function App() {

    const aboutRef = useRef<null>(null)
    const toolsRef = useRef<null>(null)
    const projectsRef = useRef<null>(null)
    const contactRef = useRef<null>(null)

    return (
        <div className="App">
            <Hero aboutRef={aboutRef} toolsRef={toolsRef} projectsRef={projectsRef} contactRef={contactRef} />
            <About ref={aboutRef} />
            <Tools ref={toolsRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    )
}

export default App