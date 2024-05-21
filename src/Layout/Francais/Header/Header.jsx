 import {Link} from 'react-router-dom';
 import './header.scss';
 import logoHeader from '../../../Assets/Images/logo.PNG';
 import React, { useState, useEffect } from 'react';
 import englishFlag from '../../../Assets/Images/eng-flag.png';

 
 
 function Header({children}) {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
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
                <ul>
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
            </nav>
            {children}
        </header>
    );
 }

    export default Header;