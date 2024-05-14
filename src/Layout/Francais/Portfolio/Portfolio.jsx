import './portfolio.scss';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
        <div className="portfolio__container">
        </div>
        <div className="portfolio__content">
                <h2>Portfolio</ h2>
                <div className="portfolio__content--filter">
                    <button>Tout</button>
                    <button>Frontend</button>
                    <button>Backend</button>
                    <button>Optimisation</button>
                </ div>
        </div>
    </section>
  );
}

export default Portfolio;