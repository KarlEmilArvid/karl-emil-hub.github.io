import { useState } from "react"
import "../styles/contact.scss"

//styla formulär
//styla länkar

const Contact = () => {
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    function sendEmail() {
        window.open(`mailto:emilarvidsson96@gmail.com?subject=${name}&body=${message}`);
    }

    return (
        <section className="contact">
            <form onSubmit={() => sendEmail()}>
                <input type="text" name="" required onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="" required onChange={(e) => setMessage(e.target.value)}/>
                <input type="submit" value="submit" />
            </form>
            <article className="contact-information">
                <h4>here's some contact info about me</h4>
                <ul className="contact-list">
                    <li>
                        <a href="">link to github</a>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <a href="">link to linkedin</a>
                        <img src="" alt="" />
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

export default Contact
