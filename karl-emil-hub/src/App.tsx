import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Tools from './components/tools'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.scss'

function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Tools/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

/*
add real content, fix id's, link ts, style style style-->
<!--sticky header, links change/get set to active color based on location
parallax images, in hero and below about section
animation on development tools scrolling in?
projects hover animations
working contact form-->
*/
