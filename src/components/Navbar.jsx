import {useEffect, useRef, useState} from "react";
import {
    FaBars,
    FaEllipsisV,
    FaTelegramPlane,
    FaEnvelope,
    FaDownload,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaFileSignature,
    FaCoffee
} from 'react-icons/fa';
import './Navbar.css';
import ProfilePic from './../assets/profile-pic.webp';
import {FaBriefcase, FaCode} from "react-icons/fa6";

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const dropdownRef = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [dropdownOpen]);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    
    const drawerRef = useRef();
    
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (drawerOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
                setDrawerOpen(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [drawerOpen]);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <button className="drawer-btn" onClick={toggleDrawer}>
                        <FaBars/>
                    </button>
                    {drawerOpen && (
                        <div className="drawer" ref={drawerRef}>
                            <div className="drawer-profile">
                                <img src={ProfilePic} alt="Profile"/>
                                <span>Bug Finderr</span>
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
                            <div className="drawer-links">
                                <a href="#about"><FaFileSignature className="icon"/>About</a>
                                <a href="#portfolio"><FaBriefcase className="icon"/>Portfolio</a>
                                <a href="#interest"><FaCoffee className="icon"/>Interest</a>
                                <a href="#project"><FaCode className="icon"/> Project</a>
                                <a href="#contact"><FaEnvelope className="icon"/>Contact</a>
                            </div>
                        </div>
                    )}
                    <span>Bug Finderr</span>
                </div>
                <div className="navbar-right">
                    <div className="navbar-links">
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#interest">Interest</a>
                        <a href="#project">Project</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="dropdown" ref={dropdownRef}>
                        <button className="dropdown-btn" onClick={toggleDropdown}>
                            <FaEllipsisV/>
                        </button>
                        {dropdownOpen && (
                            // todo: Add links
                            <div className="dropdown-content">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaDownload className="icon"/> Download Resume</a>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaEnvelope className="icon"/> Mail</a>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaTelegramPlane className="icon"/> Telegram</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
