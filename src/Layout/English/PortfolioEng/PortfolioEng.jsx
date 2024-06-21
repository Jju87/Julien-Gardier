import "../../Francais/Portfolio/portfolio.scss";
import React, { useState } from "react";
import CardCarouselEng from "../../../Components/Card/CardCarouselEng";

function PortfolioEng() {
    const [filter, setFilter] = useState("Tout");

    const handleFilter = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio__container">
                <div className="portfolio__content">
                    <h2>Portfolio</h2>
                    <div className="portfolio__content--filters">
                        <button
                            className={filter === "Tout" ? "active" : ""}
                            onClick={() => handleFilter("Tout")}
                        >
                            All
                        </button>
                        <button
                            className={filter === "Backend" ? "active" : ""}
                            onClick={() => handleFilter("Backend")}
                        >
                            Back-end
                        </button>
                        <button
                            className={filter === "Frontend" ? "active" : ""}
                            onClick={() => handleFilter("Frontend")}
                        >
                            Front-end
                        </button>
                        <button
                            className={
                                filter === "Optimisation" ? "active" : ""
                            }
                            onClick={() => handleFilter("Optimisation")}
                        >
                            Optimization
                        </button>
                    </div>
                    <div className="portfolio__content--cards">
                        <CardCarouselEng filter={filter} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioEng;
