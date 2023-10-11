import "../styles/about.scss"
import profile from "../assets/profile-test.png"
import profile1 from "../assets/profile-1.jpg"
import { forwardRef } from "react"

const About = forwardRef((props, ref: React.ForwardedRef<null>) => {

    return (
        <article ref={ref} className="about">
            <section className="image-container">
                <img src={profile1} alt="" />
            </section>
            <section className="about-me-container">
                <h2>front-end developer in development</h2>
                <p>
                    I'm 27 years old and have worked at a couple of Swedish software companies, I currently live in Skövde, Sweden. I have an interest in computer software, heavy music and I live a plant based lifestyle.
                    <br />This portfolio is to showcase things that I've made and the tools I use, things I've learnt and small tidbits about me.
                    <br />In the future I want to try out different front-end tools and also some back-end languages to learn and experience.
                    <br />But most of all I want to spend time programming and learning as much as I can.</p>
            </section>
        </article>
    )
})

export default About