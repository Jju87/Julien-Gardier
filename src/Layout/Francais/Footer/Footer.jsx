import './footer.scss';

import { faLinkedin, faGithub, faCodepen,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return(
        <footer>
            <div className="footer__container">
                <div className="footer__container--links">
                <a href="https://www.linkedin.com/in/julien-gardier" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="contact__content--socials-icon" />
                    <span className="visually-hidden">Profil LinkedIn de Julien Gardier</span>
                </a>
                <a href="https://github.com/Jju87" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="contact__content--socials-icon" />
                  <span className="visually-hidden">Profil GitHub de Julien Gardier</span>
                </a>
                <a href="https://codepen.io/Gr1chk4" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCodepen} className="contact__content--socials-icon" />
                  <span className="visually-hidden">Profil CodePen de Julien Gardier</span>
                </a>                
                </div>
                <div className="footer__container--copy">
                    <p>© 2024 - Julien Gardier</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;