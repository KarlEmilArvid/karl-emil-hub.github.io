import "../styles/tools.scss"
import $ from 'jquery'

const Tools = () => {

    $(document).on("scroll", function () {
        let pageTop: any = $(document).scrollTop();
        let pageBottom = pageTop + $(window).height();
        let tags = $(".toolsFade");

        for (let i = 0; i < tags.length; i++) {
            let toolsFade = tags[i];

            if ($(toolsFade).position().top < pageBottom) {
                $(toolsFade).addClass("visible");
            } else {
                $(toolsFade).removeClass("visible");
            }
        }
    });

    return (
        <section className="tools">
            <article className="toolsFade tools-card">
                <h3>development tools</h3>
                <p>my current techstack consists of React with TypeScript, SCSS and Node.js</p>
                <p>in the future I'm aiming to learn more JavaScript frameworks, work more with Python and learn other programming languages like Go, Rust and </p>
            </article>
            <ul className="toolsFade tools-list">
                <li><img src="" alt="" />HTML</li>
                <li><img src="" alt="" />CSS</li>
                <li><img src="" alt="" />JavaScript</li>
                <li><img src="" alt="" />React</li>
                <li><img src="" alt="" />TypeScript</li>
                <li><img src="" alt="" />Redux</li>
                <li><img src="" alt="" />SASS</li>
                <li><img src="" alt="" />Figma</li>
                <li><img src="" alt="" />Python</li>
                <li><img src="" alt="" />Node.js</li>
            </ul>
        </section>
    )
}

export default Tools
