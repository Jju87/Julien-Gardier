import React, { useEffect, useRef } from "react";

import "./apropos.scss";
import selfie from "../../../Assets/Images/selfie.webp";
import bateau from "../../../Assets/Images/bateau.webp";

function Apropos() {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let { left, top, width, height } =
                containerRef.current.getBoundingClientRect();
            let x = e.pageX - (left + window.scrollX) - width / 2;
            let y = e.pageY - (top + window.scrollY) - height / 2;
            containerRef.current.style.transform = `rotateX(${
                y / 10
            }deg) rotateY(${x / 10}deg)`;
            containerRef.current.style.perspective = "1000px";
        };

        const handleMouseLeave = (e) => {
            containerRef.current.style.transform = "";
        };

        const handleMouseOver = () => {
            containerRef.current.addEventListener("mousemove", handleMouseMove);
        };

        const imgs = containerRef.current.querySelectorAll("img");
        imgs.forEach((img) => {
            img.addEventListener("mouseover", handleMouseOver);
        });

        containerRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            imgs.forEach((img) => {
                img.removeEventListener("mouseover", handleMouseOver);
            });
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "mousemove",
                    handleMouseMove
                );
                containerRef.current.removeEventListener(
                    "mouseleave",
                    handleMouseLeave
                );
            }
        };
    }, []);

    return (
        <section id="a-propos" className="a-propos">
            <h2>À propos de moi</h2>
            <div className="a-propos__content">
                <div className="a-propos__content--pictures" ref={containerRef}>
                    <img
                        src={selfie}
                        className="a-propos__content--pictures-selfie"
                        alt="portrait de Julien Gardier, développeur web"
                    />
                    <img
                        src={bateau}
                        className="a-propos__content--pictures-bateau"
                        alt="Julien Gardier permis bateau"
                    />
                </div>
                <div className="a-propos__content--text">
                    <article>
                        <h3>Ce que j'aime dans la vie</h3>
                        <p>
                            Le sport, le cinéma, la musique... Je joue par
                            exemple assez mal de la guitare depuis 10 ans.
                        </p>
                        <p>
                            En 2017, j'ai commencé à investir dans les
                            crypto-monnaies et à m'intéresser à la blockchain.
                            Contre toute attente, je ne suis toujours pas
                            millionnaire.
                        </p>
                        <p>
                            Je suis également titulaire du permis bateau alors
                            que j'habite en région Parisienne.
                        </p>
                    </article>
                    <article>
                        <h3>Ce que j'aime dans le développement web</h3>
                        <p>
                            Voir un projet prendre forme, évoluer et aboutir.
                            J'aime ce sentiment de faire un vrai métier, et pas
                            seulement un "travail".
                        </p>
                        <p>
                            Je suis très attentif aux détails, et j'aime
                            reproduire avec précision des maquettes graphiques.
                        </p>
                        <p>
                            Je suis très à l'aise avec les technologies
                            front-end, mais grâce à ma dernière formation avec
                            OpenClassrooms, j'ai également pu acquérir de
                            solides bases en back-end.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Apropos;
