import "./footer.scss";
import React, { useEffect } from "react";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    useEffect(() => {
        const footer = document.querySelector("footer");
        const cvBtn = document.querySelector(".cv");
        let animationTimeoutId = null;
        let visibilityTimeoutId = null;
        let isAnimating = false;

        const clearTimeouts = () => {
            if (animationTimeoutId) {
                clearTimeout(animationTimeoutId);
                animationTimeoutId = null;
            }
            if (visibilityTimeoutId) {
                clearTimeout(visibilityTimeoutId);
                visibilityTimeoutId = null;
            }
        };

        const showButton = () => {
            if (!cvBtn) return;
            
            clearTimeouts();
            isAnimating = true;
            
            // D'abord, on rend le bouton visible
            cvBtn.classList.add("visible");
            
            // Ensuite, on ajoute l'animation de battement
            animationTimeoutId = setTimeout(() => {
                if (cvBtn.classList.contains("visible")) {
                    cvBtn.classList.add("animate-heartbeat");
                }
                isAnimating = false;
            }, 700);
        };

        const hideButton = () => {
            if (!cvBtn) return;
            
            clearTimeouts();
            isAnimating = true;
            
            // D'abord, on arrête l'animation de battement
            cvBtn.classList.remove("animate-heartbeat");
            
            // Ensuite, on cache le bouton
            visibilityTimeoutId = setTimeout(() => {
                cvBtn.classList.remove("visible");
                isAnimating = false;
            }, 500);
        };

        const observerFooter = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                
                // Si une animation est déjà en cours, on l'annule
                if (isAnimating) {
                    clearTimeouts();
                }
                
                if (entry.isIntersecting) {
                    showButton();
                } else {
                    hideButton();
                }
            },
            { 
                threshold: 0.8,
                // Ajouter un délai avant de déclencher l'observateur
                rootMargin: "20px" 
            }
        );

        if (footer) {
            observerFooter.observe(footer);
        }

        return () => {
            clearTimeouts();
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
                <a className="cv" target="_blank" href="/CV_Julien-Gardier_FR_2024.pdf">
                    <button> <FontAwesomeIcon icon= {faFileArrowDown}/> <span>Télécharger mon</span> CV  </button>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
