import './skillsdisplay.scss'
import React, { useEffect } from 'react';
import htmlIcon from '../../Assets/Icons/html-icon.svg';
import cssIcon from '../../Assets/Icons/css-icon.svg';
import jsIcon from '../../Assets/Icons/javascript-icon.svg';
import reactIcon from '../../Assets/Icons/react-icon.svg';
import nodeIcon from '../../Assets/Icons/nodejs-icon.svg';
import mongoIcon from '../../Assets/Icons/mongodb-icon.svg';
import expressIcon from '../../Assets/Icons/express-icon.svg';
import sassIcon from '../../Assets/Icons/sass-icon.svg';
import figmaIcon from '../../Assets/Icons/figma.svg';
import vercelIcon from '../../Assets/Icons/vercel.png';


function SkillsDisplay() {
    const icons = [
        { src: htmlIcon, alt: "Icône HTML", label: "HTML" },
        { src: cssIcon, alt: "Icône CSS", label: "CSS" },
        { src: jsIcon, alt: "Icône JavaScript", label: "JavaScript" },
        { src: reactIcon, alt: "Icône React", label: "React" },
        { src: nodeIcon, alt: "Icône Node.js", label: "Node.js" },
        { src: mongoIcon, alt: "Icône MongoDB", label: "MongoDB" },
        { src: expressIcon, alt: "Icône Express", label: "Express" },
        { src: sassIcon, alt: "Icône Sass", label: "Sass" },
        { src: figmaIcon, alt: "Icône Figma", label: "Figma" },
        { src: vercelIcon, alt: "Icône Vercel", label: "Vercel" }
    ];
    const allIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons,
        ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons,
        ]
    
    return (
        <section className="skills-display">
            <div className="skills-display__container">
                <h2 className="skills-display__title">Mes outils</h2>
                <div className="skills-display__icons">
                    {allIcons.map((icon, index) => (
                    <div className='skills-display__icons--icon' key={index}>
                        <img src={icon.src} alt={icon.alt} />
                        <p>{icon.label}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsDisplay;