import {FaBookBookmark, FaCode, FaRobot} from "react-icons/fa6";
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>What I Do</h2>          {/*todo: Enter valid info*/}
            <div className="card-container">
                <div className="card">
                    <FaCode size={60} color="#359BFF"/>
                    <h3>Front-End</h3>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div className="card">
                    <FaRobot size={60} color="#40FE8E"/>
                    <h3>Back-End</h3>
                    <p>Node.js, Express.js, MongoDB</p>
                </div>
                <div className="card">
                    <FaBookBookmark size={60} color="#FEC71F"/>
                    <h3>DevOps</h3>
                    <p>Docker, Kubernetes, Jenkins</p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;