import rewind from "../assets/rewind.png"
import combo from "../assets/combo.png"
import quiz from "../assets/quiz.png"
import rescue from "../assets/rescue-rabbits.png"
import escargo from "../assets/escargo.png"
import plugga from "../assets/plugga.jpg"
import { forwardRef } from "react"
import "../styles/projects.scss"

const Projects = forwardRef((props, ref: React.ForwardedRef<null>) => {

    return (
        <section ref={ref} className="projects">
            <section className="projects-heading">
                <h2>projects I've made</h2>
                <p>below you'll see a few projects I've worked on, some school assignments/group projects but also personal projects I've made</p>
                <p>Things I'm currently working on not showcased publicly are: a component library, several teaching projects where I learn how to teach people programming (with help from my component library) and some educational papers related to web development.</p>
            </section>
            <section className="card-wrapper">
                <article className="projects-card">
                    <h3>Combovault.com</h3>
                    <a href="https://combovault.com/" target="_blank">
                        <img src={combo} alt="" />
                    </a>
                    <p>Fighting game website for storing and sharing information, all information is community driven. Made with React and Firebase.</p>
                    <ul>
                        <a href="https://combovault.com/" target="_blank">Link to website</a>
                        <a href="https://github.com/KarlEmilArvid/ComboVault" target="_blank">Link to github page</a>
                    </ul>
                </article>
                <article className="projects-card">
                    <h3>Plugga-IT.se</h3>
                    <a href="https://plugga-it.se/" target="_blank">
                        <img src={plugga} alt="" />
                    </a>
                    <p>Fullstack website made during my first internship of 10 weeks with a team of 3 other interns.</p>
                    <ul>
                        <a href="https://plugga-it.se/" target="_blank">Link to website</a>
                        <a href="https://github.com/KarlEmilArvid/folkans-it-utbildningar" target="_blank">Link to github page</a>
                    </ul>
                </article>
                <article className="projects-card">
                    <h3>Python Quiz Program</h3>
                    <a href="https://github.com/KarlEmilArvid/Python-Quiz" target="_blank">
                        <img src={quiz} alt="" />
                    </a>
                    <p>Simple Quiz program made in Python, not feature complete but fully functional</p>
                    <a href="https://github.com/KarlEmilArvid/Python-Quiz" target="_blank">Link to github page</a>
                </article>
                <article className="projects-card">
                    <h3>Animal Shelter mockup website</h3>
                    <a href="https://github.com/KarlEmilArvid/Rescue-Rabbits" target="_blank">
                        <img src={rescue} alt="" />
                    </a>
                    <p>Front-end mockup website for an animal rescue center</p>
                    <ul>
                        <a href="https://github.com/KarlEmilArvid/Rescue-Rabbits" target="_blank">Link to github page</a>
                    </ul>
                </article>
                <article className="projects-card">
                    <h3>Karl-Emil Rewind</h3>
                    <a href="https://karl-emil-rewind.onrender.com/" target="_blank">
                        <img src={rewind} alt="" />
                    </a>
                    <p>A sports spreadsheet made in React with TypeScript and SCSS, made for the purpose of keeping track of played sports games</p>
                    <ul>
                        <a href="https://karl-emil-rewind.onrender.com/" target="_blank">Link to deployed website</a>
                        <a href="https://github.com/KarlEmilArvid/Karl-Emil-Rewind" target="_blank">Link to github page</a>
                    </ul>
                </article>
                <article className="projects-card">
                    <h3>Fullstack Resturaunt website</h3>
                    <a href="https://escargot-to-go.onrender.com/" target="_blank">
                        <img src={escargo} alt="" />
                    </a>
                    <p>Fullstack website made with React, TypeScript, SCSS and Node.js, created as a group project</p>
                    <ul>
                        <a href="https://escargot-to-go.onrender.com/" target="_blank">Link to deployed website</a>
                        <a href="https://github.com/folkuni-f21-fullstack/bunny-scientists-fullstack" target="_blank">Link to github page</a>
                    </ul>
                </article>
            </section>
        </section>
    )
})

export default Projects