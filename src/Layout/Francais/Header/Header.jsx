 import {Link} from 'react-router-dom';
 import './header.scss';
 import logoHeader from '../../../Assets/Images/logo.PNG';
 import React, { useState, useEffect } from 'react';
 import englishFlag from '../../../Assets/Images/eng-flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

 
 
 function Header({children}) {
    const [isFixed, setIsFixed] = useState(false);
    const [ulIsOpen, setUlIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Nettoyer l'écouteur d'événements lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.innerWidth > 768)
                setIsFixed(!entry.isIntersecting);
            },
            { threshold: 0.01 }
        );

        const section = document.querySelector('header');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <header id="accueil">
            <nav className={isFixed ? 'nav-fixed' : ''}>
                <img className='logo' src={logoHeader} alt="Logo de Julien Gardier, développeur web en Essonne" />
                <ul className={isMobile ? (ulIsOpen ? "expanded" : 'closed') : "unvisible"}>
                    <li>
                        <a href="#accueil">Accueil</a>
                    </li>
                    <li>
                        <a href="#a-propos">A propos</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <Link to="/eng/">
                            <img src={englishFlag} alt="swith to english language" />
                        </Link>
                    </li>
                </ul>
                {ulIsOpen ?
                <FontAwesomeIcon icon={faXmark} className="xmark" onClick={() => setUlIsOpen(false)} />
                :
                <FontAwesomeIcon icon={faBars} className="bars" onClick={() => setUlIsOpen(true)} />
                }
            </nav>
            {children}
        </header>
    );
 }

    export default Header;