import React, { useEffect, useRef } from "react";

import "../../Francais/Apropos/apropos.scss";
import selfie from "../../../Assets/Images/selfie.webp";
import bateau from "../../../Assets/Images/bateau.webp";

import "../../Francais/Apropos/apropos.scss";

function AproposEng() {
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
            <h2>About Me</h2>
            <div className="a-propos__content">
                <div className="a-propos__content--pictures" ref={containerRef}>
                    <img
                        src={selfie}
                        className="a-propos__content--pictures-selfie"
                        alt="portrait of Julien Gardier, web developer"
                    />
                    <img
                        src={bateau}
                        className="a-propos__content--pictures-bateau"
                        alt="Julien Gardier with a boat license"
                    />
                </div>
                <div className="a-propos__content--text">
                    <article>
                        <h3>What I enjoy in life</h3>
                        <p>
                            Sports, cinema, music... For example, I have been
                            playing guitar quite badly for 10 years.
                        </p>
                        <p>
                            In 2017, I started investing in cryptocurrencies and
                            got interested in blockchain technology. Against all
                            odds, I am still not a millionaire.
                        </p>
                        <p>
                            I also have a boat license even though I live in the
                            Paris region and never sail.
                        </p>
                    </article>
                    <article>
                        <h3>Why I enjoy web development</h3>
                        <p>
                            Seeing a project take shape, evolve, and come to
                            life. I love the feeling of doing a real job,
                            not just a "task".
                        </p>
                        <p>
                            I am very attentive to details and enjoy precisely
                            replicating graphic designs.
                        </p>
                        <p>
                            I am very comfortable with front-end technologies,
                            but thanks to my recent training with OpenClassrooms,
                            I have also gained solid foundations in back-end
                            development.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default AproposEng;
