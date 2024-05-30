import './contact.scss';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

import callMeImage from "../../../Assets/Images/call.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments, faPhoneVolume  } from '@fortawesome/free-solid-svg-icons';


function Contact () {

    const [recaptchaValid, setRecaptchaValid] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const onRecaptchaChange = (value) => {
        if (value) {
            setRecaptchaValid(true);
        }
    }

    const [emailResult, setEmailResult] = useState(null);

    const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE , e.target, process.env.REACT_APP_EMAILJS_SERVICE_KEY)
        .then((result) => {
            console.log(result.text);
            setEmailResult(result.text);
            setIsSending(false);
            e.target.reset();
            setTimeout(()=>{
                setEmailResult(null);
            
            },(2700));
            
        }, (error) => {
            console.log(error.text);
            setEmailResult(error.text);
            setIsSending(false);
        });
}

    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <h2>Contact</h2>
                <div className="contact__content">
                    <div className="contact__content--form">
                        <form onSubmit={sendEmail}>
                            <div className="inputs">
                                <FontAwesomeIcon icon={faEnvelope} className="inputs__icon" />                                
                                <label htmlFor="from_name"></label>
                                <input type="text" name="from_name" id="nom" required placeholder="Votre nom" />
                                <label htmlFor="email"></label>
                                <input type="email" name="email" id="email" required placeholder="Votre email" />
                                <label htmlFor="message"></label>
                                <textarea name="message" id="message" required placeholder="Votre message"></textarea>
                            </div>
                            <div className="captcha" style={{overflow: "hidden" }}>
                                <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_KEY} action='homepage' onChange={onRecaptchaChange} />
                            </div>                           
                            <button 
                                type="submit" 
                                disabled={!recaptchaValid}
                                className={`submit-button ${recaptchaValid ? '' : 'disabled'}`}
                            >{isSending ? 'Envoi en cours...' : (emailResult === 'OK' ? 'Message envoyé' : 'Envoyer')}
                            </button>
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
