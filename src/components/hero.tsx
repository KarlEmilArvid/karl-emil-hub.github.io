import "../styles/hero.scss"

const Hero = ({ aboutRef, toolsRef, projectsRef, contactRef }: any) => {

    return (
        <section className="hero-parallax">
            <h1>Welcome to the Karl-Emil Hub</h1>
            <p className="hero-paragraph">this website is meant as a portfolio for me, Karl-Emil to post things relevant to my front-end career.</p>
            <ul className="hero-list">
                <li onClick={() => aboutRef.current.scrollIntoView({ behaviour: 'smooth' })}>about</li>
                <li onClick={() => toolsRef.current.scrollIntoView({ behaviour: 'smooth' })}>tools</li>
                <li onClick={() => projectsRef.current.scrollIntoView({ behaviour: 'smooth' })}>projects</li>
                <li onClick={() => contactRef.current.scrollIntoView({ behaviour: 'smooth' })}>contact</li>
            </ul>
        </section>
    )
}

export default Hero