import './About.css';
import ProfilePic from "../assets/profile-pic.webp";
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const About = () => {
    return (
        <section id="about">
            <div className="drawer-profile">
                <img src={ProfilePic} alt="Profile"/>
                <ul className="social-icons">
                    <li>
                        <a href="https://facebook.com">
                            <FaFacebookF className="icons"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com">
                            <FaTwitter className="icons"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com">
                            <FaLinkedinIn className="icons"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com">
                            <FaGithub className="icons"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com">
                            <FaInstagram className="icons"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <h1>Bug Finderr</h1>
                <h4>Developer • Otaku • Learner</h4>
                <div className="btn">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="download-res">Download Resume</a>
                    <a href="#contact" className="contact-me">Contact</a>
                </div>
                <ul className="about-info">
                    <li>
                        <div className="title">👨 Experience Level :</div>
                        <div className="text">&nbsp;2+ years 💻</div>
                    </li>
                    <li>
                        🎓 Student at Scaler School Of Technology 🚀
                    </li>
                    <li>
                        <div className="title">🧩 Interested In :</div>
                        <div className="text">&nbsp;3D Printing, Robotics, Web Development</div>
                    </li>
                    <li>
                        <div className="title">💡 Equipments :</div>
                        <div className="text">&nbsp;Humor, Knowledge, Python, Java, Linguistics, Linux, WebDev</div>
                    </li>
                    <li>
                        <div className="title">⚡ Fun Fact :</div>
                        <div className="text">&nbsp;I prefer DarkMode so much that you can't see my screen</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
