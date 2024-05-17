import './portfolio.scss';
import Card from '../../../Components/Card/CardCarousel';


function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
        <div className="portfolio__container">
            <div className="portfolio__content">
                <h2>Portfolio</ h2>
                <div className="portfolio__content--filters">
                    <button>Tout</button>
                    <button>Frontend</button>
                    <button>Backend</button>
                    <button>Optimisation</button>
                </ div>
                <div className="portfolio__content--cards">
                    < Card />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;