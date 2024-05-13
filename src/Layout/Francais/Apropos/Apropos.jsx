import React, { useEffect, useRef } from 'react';

import './apropos.scss'
import selfie from '../../../Assets/Images/selfie.jpg'
import bateau from '../../../Assets/Images/bateau.jpg'


function Apropos() {
    
    const containerRef = useRef(null);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
        let { left, top, width, height } = containerRef.current.getBoundingClientRect();
        let x = (e.pageX - (left + window.scrollX)) - width / 2;
        let y = (e.pageY - (top + window.scrollY)) - height / 2;
        containerRef.current.style.transform = `rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
        containerRef.current.style.perspective = '1000px';
    };


    const handleMouseLeave = (e) => {
        containerRef.current.style.transform = '';
    };

    const imgs = containerRef.current.querySelectorAll('img');
    imgs.forEach(img => {
        img.addEventListener('mouseover', () => {
            containerRef.current.addEventListener('mousemove', handleMouseMove);
        });
    });

    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        imgs.forEach(img => {
            img.removeEventListener('mouseover', () => {
                containerRef.current.removeEventListener('mousemove', handleMouseMove);
            });
        });
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
}, []);    
    return (
        <section id="a-propos" className="a-propos">
            <h2>À propos de moi</h2>
            <div className="a-propos__content">
                <div className="a-propos__content--pictures" ref={containerRef}>
                    <img src={selfie} className="a-propos__content--pictures-selfie" alt="portrait de Julien Gardier, développeur web"/>
                    <img src={bateau} className="a-propos__content--pictures-bateau" alt="Julien Gardier permis bateau"/>
                </div>
                <div className="a-propos__content--text">
                    <p>Je m'appelle Julien Gardier, et je suis développeur web. </p>

                </div>

            </div>

        </section>
    )
}

export default Apropos;