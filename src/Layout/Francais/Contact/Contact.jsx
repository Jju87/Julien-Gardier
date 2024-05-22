import './contact.scss';

import ReCAPTCHA from "react-google-recaptcha";
import callMeImage from "../../../Assets/Images/call.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments, faPhoneVolume  } from '@fortawesome/free-solid-svg-icons';

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
                            <div className="captcha">
                                <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_KEY} action='homepage' />
                            </div>                           
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="contact__content--links">
                        <FontAwesomeIcon className="phone-volume" icon={faPhoneVolume} />
                        <div className="contact__content--links-image">
                            <img src={callMeImage} alt="Call me, Julien Gardier" />
                            <div className="contact__content--links-phone"></div>
                            <button className="phone-btn">
                                <a href="https://calendly.com/gardierjulien/15min" target="_blank" rel="noopener noreferrer">
                                    <span>Planifiez un appel <FontAwesomeIcon icon={faComments} className="contact__content--links-phone-icon" /></span>
                                </a>
                            </button>
                            
                        </div>
                        {/*  */}
                    </div>
                </div>               
            </div>
        </section>
    );
}

export default Contact;
