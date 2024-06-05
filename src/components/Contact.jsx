import './Contact.css';
import {
    FaLinkedin,
    FaSquareFacebook, FaSquareGithub, FaSquareInstagram,
    FaSquareReddit,
    FaSquareTwitter,
    FaSquareYoutube,
} from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact">
            {/*<h2>Contact</h2>*/}
            <div className="contact-container">
                <h3>Find me on</h3>
                <div className="contact-icons">
                    <a href="https://www.facebook.com"><FaSquareFacebook color="#2F477A"/></a>
                    <a href="https://www.x.com"><FaSquareTwitter color="#0F5B94"/></a>
                    <a href="https://www.linkedin.com"><FaLinkedin color="#006292"/></a>
                    <a href="https://www.youtube.com"><FaSquareYoutube color="#CC0002"/></a>
                    <a href="https://www.reddit.com"><FaSquareReddit color="#CC3700"/></a>
                    <a href="https://www.instagram.com"><FaSquareInstagram  color="#325B7C"/></a>
                    <a href="https://www.github.com"><FaSquareGithub color="#AD270C"/></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
