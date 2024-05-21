import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact () {
    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <h2>Contact</h2>
                <div className="contact__content">
                    <div className="contact__content--form">
                        <form action="" method="POST">
                            <div className="inputs">
                                <FontAwesomeIcon icon={faEnvelope} className="inputs__icon" />                                
                                <label htmlFor="nom"></label>
                                <input type="text" name="nom" id="nom" required placeholder="Votre nom" />
                                <label htmlFor="email"></label>
                                <input type="email" name="email" id="email" required placeholder="Votre email" />
                                <label htmlFor="message"></label>
                                <textarea name="message" id="message" required placeholder="Votre message"></textarea>
                            </div>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="contact__content--links">
                        <div className="contact__content--links-socials">
                            <a href="www.linkedin.com/in/julien-gardier" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="contact__content--socials-icon" />
                            </a>
                            <a href="https://github.com/Jju87" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="contact__content--socials-icon" />
                            </a>
                        </div>
                        <div className="contact__content--links-phone">
                            <FontAwesomeIcon icon={faComments} className="contact__content--links-phone-icon" />
                                <a href="https://calendly.com/gardierjulien/15min" target="_blank" rel="noopener noreferrer">
                                    <button>Planifiez un appel</button>
                                </a>
                        </div>
                    </div>
                </div>               
            </div>
        </section>
    );
}

export default Contact;
