import "../styles/contact.scss"
import github from "../assets/github-logo.png"
import linkedin from "../assets/linkedin-logo.png"
import $ from 'jquery'

//styla formulär
//styla länkar

const ContactSimple = () => {

    $(document).on("scroll", function () {
        let pageTop: any = $(document).scrollTop();
        let pageBottom = pageTop + $(window).height();
        let tags = $(".fade");

        for (let i = 0; i < tags.length; i++) {
            let fade = tags[i];

            if ($(fade).position().top < pageBottom) {
                $(fade).addClass("visible");
            } else {
                $(fade).removeClass("visible");
            }
        }
    });

    return (
        <section className="fade contact">
            <h3>Want to come in contact with me?</h3>
            <p>Send me an email at "email here", or shoot me a message through linkedin or github</p>
            <article className="contact-information">
                <h4>here's some contact info about me</h4>
                <ul className="contact-list">
                    <li>
                        <a href="https://github.com/KarlEmilArvid">link to github</a>
                        <img src={github} alt="" />
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/emil-arvidsson-244797236/">link to linkedin</a>
                        <img src={linkedin} alt="" />
                    </li>
                    <li>
                        <a href="">link to stuff</a>
                        <img src="" alt="" />
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default ContactSimple
