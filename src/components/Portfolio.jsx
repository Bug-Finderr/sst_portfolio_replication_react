import {FaBookBookmark, FaCode, FaRobot} from "react-icons/fa6";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>What I Do</h2>          {/*todo: Enter valid info*/}
            <div className="card-container">
                <div className="card">
                    <FaCode size={60} color="#359BFF"/>
                    <h3>Development</h3>
                    <p>I am a software developer with 2+ years of experience working with Python. I have a strong background DSA and have successfully completed multiple projects. Highly proficient in Python and Java and have a strong understanding of SQL and data management principles. Able to work effectively in both individual and team environments and am committed to delivering high-quality results.</p>
                </div>
                <div className="card">
                    <FaRobot size={60} color="#40FE8E"/>
                    <h3>Robotics</h3>
                    <p>I have a deep interest in robotics and have accumulated practical experience in this field. One of my notable projects is the Spot Micro, where I worked on developing a four-legged robotic platform inspired by Boston Dynamics' Spot robot. This project involved integrating advanced sensors, implementing sophisticated control algorithms, and fine-tuning the mechanical design to achieve optimal performance. I continuously seek to deepen my understanding of robotics through hands-on projects and advanced coursework.</p>
                </div>
                <div className="card">
                    <FaBookBookmark size={60} color="#FEC71F"/>
                    <h3>Learning</h3>
                    <p>I am constantly learning and growing in my field. I am passionate about creating innovative solutions and using technology to solve real-world problems. I have a strong foundation in programming languages such as Java and Python, and am always eager to expand my skillset and take on new challenges. Whether I am working on a solo project or collaborating with a team, I thrive in a fast-paced and dynamic environment. I am excited to continue my career as a developer and make a positive impact in the tech industry.</p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;