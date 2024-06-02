import React from 'react';
import './Project.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project">
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                </div>
                <div className="project">
                    <h3>Project 2</h3>
                    <p>Description of project 2</p>
                </div>
                <div className="project">
                    <h3>Project 3</h3>
                    <p>Description of project 3</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
