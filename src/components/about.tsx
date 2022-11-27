import "../styles/about.scss"
import profile from "../assets/profile-test.png"

const About = () => {

    return (
        <article className="about">
            <section className="image-container">
                <img src={profile} alt="" />
            </section>
            <section className="about-me-container">
                <h2>front-end developer in development</h2>
                <p>
                    I'm 26 years old and currently studying front-end development at Folkuniversitetet in Karlstad, Sweden. I have a big interest in computers,
                    music and movies.
                </p>
                <p>
                    this portfolio is to showcase things that I've made and tools I use,
                    things I've learnt and small tidbits about me and what I do.
                </p>
                <p>In the future I want to dive deeper into more front-end frameworks like Vue, Next.js plus get some backend experience with Go and Rust. But most of all I want to spend time programming since It's something I really enjoy.</p>
            </section>
        </article>
    )
}

export default About
