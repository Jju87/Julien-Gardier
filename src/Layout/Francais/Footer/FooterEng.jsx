import "./footer.scss";
import React, { useEffect } from "react";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    useEffect(() => {
        const footer = document.querySelector("footer");
        const cvBtn = document.querySelector(".cv");

        const observerFooter = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    if (cvBtn) {
                        cvBtn.classList.add("visible");
                        setTimeout(() => {
                            cvBtn.classList.add("animate-heartbeat");
                        }, 700); 
                    }
                } else {
                    if (cvBtn) {
                        cvBtn.classList.remove("animate-heartbeat");
                        setTimeout(() => {
                            cvBtn.classList.remove("visible");
                        }, 500); 
                    }
                }
            },
            { threshold: 0.8 } 
        );

        if (footer) {
            observerFooter.observe(footer);
        }

        return () => {
            if (footer) observerFooter.unobserve(footer);
        };
    }, []);

    return (
        <footer>
            <div className="footer__container">
                <div className="footer__container--links">
                    <a
                        href="https://www.linkedin.com/in/julien-gardier"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="contact__content--socials-icon"
                        />
                        <span className="visually-hidden">Profil LinkedIn de Julien Gardier</span>
                    </a>
                    <a
                        href="https://github.com/Jju87"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="contact__content--socials-icon"
                        />
                        <span className="visually-hidden">Profil GitHub de Julien Gardier</span>
                    </a>
                    <a
                        href="https://codepen.io/Gr1chk4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faCodepen}
                            className="contact__content--socials-icon"
                        />
                        <span className="visually-hidden">Profil CodePen de Julien Gardier</span>
                    </a>
                </div>
                <div className="footer__container--copy">
                    <p>© 2024 - Julien Gardier</p>
                </div>
                <a className="cv" target="_blank" href="/CV_Julien-Gardier_English_2024.pdf">
                    <button> <FontAwesomeIcon icon= {faFileArrowDown}/> <span>Download my</span> CV  </button>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
