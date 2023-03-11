import "../styles/about.scss"
import profile from "../assets/profile-test.png"
import profile1 from "../assets/profile-1.jpg"

const About = () => {

    return (
        <article className="about">
            <section className="image-container">
                <img src={profile1} alt="" />
            </section>
            <section className="about-me-container">
                <h2>front-end developer in development</h2>
                <p>
                    I'm 26 years old and studying front-end development at Folkuniversitetet in Karlstad, Sweden. I have a big interest in computers,
                    music and movies.
                </p>
                <p>
                    this portfolio is to showcase things that I've made and tools I use,
                    things I've learnt and small tidbits about me.
                </p>
                <p>In the future I want to dive deeper into other front-end frameworks like Vue, Svelte plus get some backend experience with Go and Rust. But most of all I want to spend more time programming.</p>
            </section>
        </article>
    )
}

export default About
