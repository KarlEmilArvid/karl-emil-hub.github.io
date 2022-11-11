import "../styles/projects.scss"
import rewind from "../assets/rewind.png"
import login from "../assets/login.png"
import quiz from "../assets/quiz.png"
import rescue from "../assets/rescue-rabbits.png"
import escargo from "../assets/escargo.png"

const Projects = () => {

    return (
        <section className="projects">
            <section className="projects-heading">
                <h3>here's a couple of my projects</h3>
                <p>container with an image + hoover effects that take you to the project/open in new window</p>
                <p>and you know, stuff (have like 3-4 of these and if they're not done have a "in development" class
                    on top of image and disable hoover)</p>
            </section>
            <section className="card-wrapper">
                <article className="projects-card">
                    <h3>Python Quiz Program</h3>
                    <img src={quiz} alt="" />
                    <p>Simple Quiz program made in Python, not feature complete but fully functional</p>
                    <a href="">Link to github page</a>
                </article>
                <article className="projects-card">
                    <h3>Animal Shelter mockup website</h3>
                    <img src={rescue} alt="" />
                    <p>Front-end mockup website for an animal rescue center</p>
                    <a href="">Link to deployed website</a>
                    <a href="https://github.com/KarlEmilArvid/Rescue-Rabbits">Link to github page</a>
                </article>
                <article className="projects-card">
                    <h3>Karl-Emil Rewind</h3>
                    <img src={rewind} alt="" />
                    <p>A sports spreadsheet made in React with TypeScript and SCSS, made for the purpose of keeping track of played sports games</p>
                    <a href="https://karl-emil-rewind.onrender.com/">Link to deployed website</a>
                    <a href="https://github.com/KarlEmilArvid/Karl-Emil-Rewind">Link to github page</a>
                </article>
                <article className="projects-card">
                    <h3>Simple login page</h3>
                    <img src={login} alt="" />
                    <p>Very simple login page extracted from a bigger fullstack project, made with React, TypeScript, Node.js and lowdb</p>
                    <a href="">Link to github page</a>
                </article>
                <article className="projects-card">
                    <h3>Fullstack Resturaunt website</h3>
                    <img src={escargo} alt="" />
                    <p>Fullstack website made with React, TypeScript, SCSS and Node.js, created as a group project</p>
                    <a href="https://escargot-to-go.onrender.com/">Link to deployed website</a>
                    <a href="https://github.com/folkuni-f21-fullstack/bunny-scientists-fullstack">Link to github page</a>
                </article>
                <article className="projects-card">
                    <h3>Hugo Blog</h3>
                    <img src="" alt="" />
                    <p>A personal blog mostly made to try out the Hugo framework, still in development (and i don't really post anything interesting so you're not missing out on much)</p>
                    <a href="">Link to deployed website</a>
                </article>
            </section>
        </section>
    )
}

export default Projects
