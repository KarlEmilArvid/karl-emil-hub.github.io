import "../styles/about.scss"
import profile from "../assets/profile-test.png"
const About = () => {

    return (
        <article className="about">
            <section className="image-container">
                <img src={profile} alt="" />
            </section>
            <section className="about-me-container">
                <h2>Front-end developer in development</h2>
                <p>
                    I'm a 26 year old man doing my second year of front-end dev at folkuniversitetet, I have a big interest in computers,
                    music and movies. etc etc
                </p>
                <p>
                    this portfolio is to showcase things that I've made in my career,
                    things I've learnt and small tidbits about me and what I do.
                </p>
                <p>and a paragraph explaining why i've made this portfolio and what i'm about</p>
                <p>maybe some text about how i'm studying and looking for internships</p>
                <p>In the future I want to dive deeper into more front-end frameworks like Vue and Svelte plus get some backend experience with Go and Rust.</p>
            </section>
        </article>
    )
}

export default About
