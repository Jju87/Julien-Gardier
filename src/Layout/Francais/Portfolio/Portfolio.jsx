import './portfolio.scss';
import Card from '../../../Components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


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
                <div className="portfolio__content--arrows" >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;