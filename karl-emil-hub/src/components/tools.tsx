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
    //ser inte bra ut
    return (
        <section className="tools">
            <article className="toolsFade tools-card">
                <h3>text about all the things i use to develop things</h3>
                <p>maybe cards that animate in when scrolling down</p>
                <p>or just text image and then image"" text on the other side</p>
                <p>animate list items to load in from bottom-up</p>
                <p>attach images for each tools</p>
                <p>write text about tools section</p>
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
