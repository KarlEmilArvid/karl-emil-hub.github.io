import { forwardRef } from 'react'
import $ from 'jquery'
import '../styles/tools.scss'

const Tools = forwardRef((props, ref: React.ForwardedRef<null>) => {

    $(document).on("scroll", function () {
        let pageTop: any = $(document).scrollTop()
        let pageBottom = pageTop + $(window).height()
        let tags = $(".toolsFade")

        for (let i = 0; i < tags.length; i++) {
            let toolsFade = tags[i]

            if ($(toolsFade).position().top < pageBottom) {
                $(toolsFade).addClass("visible")
            } else {
                $(toolsFade).removeClass("visible")
            }
        }
    })

    return (
        <section ref={ref} className="tools">
            <article className="toolsFade tools-card">
                <h3>development tools</h3>
                <p>
                    my tech stack consists of React with TypeScript, SCSS, Node.js and sometimes Firebase. recently I've also worked a lot with vanilla JavaScript.
                    <br />I focus on robust functions, clean code, responsive websites and user friendly apps, in the future I want to focus on learning new tools to create fun, accessible and useful projects.
                </p>
            </article>
            <ul className="toolsFade tools-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>SASS</li>
                <li>Figma</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Node.js</li>
                <li>Firebase</li>
            </ul>
        </section>
    )
})

export default Tools