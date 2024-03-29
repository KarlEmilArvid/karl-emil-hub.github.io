import github from "../assets/github-logo.png"
import linkedin from "../assets/linkedin-logo.png"
import { forwardRef } from "react"
import $ from 'jquery'
import "../styles/contact.scss"

const ContactSimple = forwardRef((props, ref: React.ForwardedRef<null>) => {

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
        <section ref={ref} className="fade contact">
            <h3>want to get in contact with me?</h3>
            <p>send me an email at karlemilarvid@gmail, or send me a message through linkedin or github</p>
            <article className="contact-information">
                <ul className="contact-list">
                    <li>
                        <a href="https://github.com/KarlEmilArvid" target="_blank">
                            <img src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/karlemilarvid/" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    )
})

export default ContactSimple