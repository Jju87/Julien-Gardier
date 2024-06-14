import React, { useState, useEffect } from 'react';
import SkillsBox from '../SkillsBox/SkillsBox.jsx';
import './headercontent.scss';

function HeaderContent() {
    const [indexString, setIndexString] = useState(0);
    const [indexArray, setIndexArray] = useState(0);
    const [textDisplay, setTextDisplay] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAnimationStarted, setIsAnimationStarted] = useState(false); // Nouvel état pour suivre le démarrage de l'animation

    const text = ["Développeur Web MERN      ", "MongoDB", "Express", "React", "Node.js"]

    useEffect(()=>{
        const img = new Image();
        img.src = "https://julien-gardier.com/Portrait-fond-transparent.png";
    },[]);

    const randomSpeed = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationStarted(true); // Mettre à jour l'état pour indiquer que l'animation peut commencer
        }, 2600); // Délai de 2 secondes avant de démarrer l'animation

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isAnimationStarted) 
            return; // Ne rien faire tant que l'animation n'a pas démarré

        const animationTimer = setInterval(() => {
            if (isDeleting) {
                setTextDisplay(prev => prev.slice(0, prev.length - 1));
                if (textDisplay === '') {
                    setIsDeleting(false);
                    setIndexArray(prev => (prev + 1) % text.length);
                    randomSpeed(20, 50);
                }
            } else {
                setTextDisplay(text[indexArray].slice(0, indexString));
                setIndexString(prev => prev + 1);
                if (indexString > text[indexArray].length) {
                    setIndexString(0);
                    setIsDeleting(true);
                }
            }
        }, isDeleting ? randomSpeed(20, 70) : randomSpeed(50, 270));

        return () => clearInterval(animationTimer);
    }, [indexString, indexArray, text, textDisplay, isDeleting, isAnimationStarted]);

  return (
    <section className="header-content">
      <div className="introduction">
        <span className="introduction__welcome">Bonjour, je suis</span>
        <h1 className="introduction__name">Julien <span>Gardier</span></h1>
            <span 
                className={`introduction__skills${textDisplay ? "" : "--transparent"}`}>
                {textDisplay ? textDisplay : "texte transparent"}
            </span>
      </div>
      <div className="portrait-container">
        <div className="portrait-container__frame">
            <img src="https://julien-gardier.com/Portrait-fond-transparent.png" className="portrait-container__frame--portrait2" alt="portrait de Julien Gardier, développeur web"/>
        </div>
        <div className="portrait-container__strengths">
            < SkillsBox 
                textInBox="Souci du détail"
            />
            < SkillsBox 
                textInBox="Travail d'équipe"
            />
            < SkillsBox 
                textInBox="Responsive design"
            />
        </div>
      </div>
    </section>
  );
}


export default HeaderContent;