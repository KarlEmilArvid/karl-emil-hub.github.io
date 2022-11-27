import "../styles/contact.scss"
import github from "../assets/github-logo.png"
import linkedin from "../assets/linkedin-logo.png"
import $ from 'jquery'

const ContactSimple = () => {

    $(document).on("scroll", function () {
        let pageTop: any = $(document).scrollTop()
        let pageBottom = pageTop + $(window).height()
        let tags = $(".fade")

        for (let i = 0; i < tags.length; i++) {
            let fade = tags[i]

            if ($(fade).position().top < pageBottom) {
                $(fade).addClass("visible")
            } else {
                $(fade).removeClass("visible")
            }
        }
    })

    return (
        <section className="fade contact">
            <h3>want to come in contact with me?</h3>
            <p>send me an email at emilarvidsson96@gmail, or shoot me a message through linkedin or github</p>
            <article className="contact-information">
                <ul className="contact-list">
                    <li>
                        <a href="https://github.com/KarlEmilArvid">
                            <img src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/emil-arvidsson-244797236/" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default ContactSimple
