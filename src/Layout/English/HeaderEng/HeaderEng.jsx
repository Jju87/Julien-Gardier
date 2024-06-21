import { Link } from "react-router-dom";
import "../../Francais/Header/header.scss";
import logoHeader from "../../../Assets/Images/logo.PNG";
import React, { useState, useEffect } from "react";
import frenchFlag from "../../../Assets/Images/fr-flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function HeaderEng({ children }) {
    const [isFixed, setIsFixed] = useState(false);
    const [ulIsOpen, setUlIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        // Function to handle the resize event to prevent the hamburger menu from being displayed on desktop
        const handleResize = () => {
            // If the window width is less than 768px, set isMobile to true
            setIsMobile(window.innerWidth < 768);
        };
        // Add an event listener to the resize event
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Function to observe the header section and set the fixed state based on the intersection
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.innerWidth > 768) setIsFixed(!entry.isIntersecting);
            },
            { threshold: 0.01 }
        );

        const section = document.querySelector("header");
        if (section) {
            // Observe the header section
            observer.observe(section);
        }

        return () => {
            if (section) {
                // Stop observing the header section
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <header id="accueil">
            {/* If the viewport is not displaying header section, add the class 'nav-fixed' to the nav element */}
            <nav className={isFixed ? "nav-fixed" : ""}>
                <img
                    className="logo"
                    src={logoHeader}
                    alt="Logo de Julien Gardier, développeur web en Essonne"
                />
                {/* If the viewport is under 768px, and if hamburgerMenu */}
                <ul
                    className={
                        isMobile
                            ? ulIsOpen
                                ? "expanded"
                                : "closed"
                            : "unvisible"
                    }
                >
                    <li>
                        <a href="#accueil">Home</a>
                    </li>
                    <li>
                        <a href="#a-propos">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <Link to="/">
                            <img
                                src={frenchFlag}
                                alt="Drapeau Français"
                                title="Passer en langue Française"
                            />
                        </Link>
                    </li>
                </ul>
                {ulIsOpen ? (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="xmark"
                        onClick={() => setUlIsOpen(false)}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBars}
                        className="bars"
                        onClick={() => setUlIsOpen(true)}
                    />
                )}
            </nav>
            {/* passing headerContentEng as a 'children' prop in HomePage component */}
            {children}
        </header>
    );
}

export default HeaderEng;
