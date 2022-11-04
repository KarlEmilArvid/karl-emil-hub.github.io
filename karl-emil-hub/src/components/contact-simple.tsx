import "../styles/contact.scss"

//styla formulär
//styla länkar

const ContactSimple = () => {

    return (
        <section className="contact">
            <h3>Want to come in contact with me?</h3>
            <p>Send me an email at "email here", or shoot me a message through linkedin or github</p>
            <article className="contact-information">
                <h4>here's some contact info about me</h4>
                <ul className="contact-list">
                    <li>
                        <a href="">link to github</a>
                        <img src="https://github.com/KarlEmilArvid" alt="" />
                    </li>
                    <li>
                        <a href="">link to linkedin</a>
                        <img src="https://www.linkedin.com/in/emil-arvidsson-244797236/" alt="" />
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
