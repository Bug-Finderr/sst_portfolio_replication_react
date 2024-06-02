import { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';
import {FaCode, FaCodeFork, FaRegStar} from "react-icons/fa6";

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/Bug-Finderr/repos`);
                setRepos(response.data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="project">
            <h2>Projects And Work</h2>
            <div className="projects-container">
                {repos.map((repo) => (
                    <div className="project-card" key={repo.id}>
                        <div className="project-image-container">
                            <img
                                src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                                alt={`${repo.name}`}
                                className="project-image"
                            />
                        </div>
                        <div className="project-details">
                            <div className="project-language"><FaCode /> {repo.language}</div>
                            <div className="project-title">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </div>
                            <div className="project-description">{repo.description}</div>
                        </div>
                        <div className="project-stats">
                            <div className="project-stars"><FaRegStar /> {repo.stargazers_count}</div>
                            <div className="project-forks"><FaCodeFork /> {repo.forks_count}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
