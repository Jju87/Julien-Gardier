import "../../Francais/Contact/contact.scss";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

import callMeImage from "../../../Assets/Images/call.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faComments,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function ContactEng() {
    const [recaptchaValid, setRecaptchaValid] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // Function to set recaptchaValid to true when the user has completed the recaptcha
    const onRecaptchaChange = (value) => {
        if (value) {
            setRecaptchaValid(true);
        }
    };

    const [emailResult, setEmailResult] = useState(null);
    // Function to send the email
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        // Send the email using env variables
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE,
                e.target,
                process.env.REACT_APP_EMAILJS_SERVICE_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    // inform the user that the email has been sent
                    setEmailResult(result.text);
                    setIsSending(false);
                    e.target.reset();
                    // Reset the send button
                    setTimeout(() => {
                        setEmailResult(null);
                        // Reset the send button after a delay
                    }, 2700);
                },
                (error) => {
                    console.log(error.text);
                    setEmailResult(error.text);
                    setIsSending(false);
                }
            );
    };
    useEffect(() => {
        const observerPhone = new IntersectionObserver(
            (entries) => {
                const phoneBtn = document.querySelector(".phone-btn");
                const span = phoneBtn.querySelector("a span");
                // entries are the elements that are observed, in this case, the image of the phone containing the span
                if (entries[0].isIntersecting) {
                    if (phoneBtn) {
                        if (span) {
                            // If the image is in the viewport, move the span into the container
                            span.style.transform = "translateY(0px)";
                            span.style.opacity = "1";
                        }
                    }
                } else {
                    // If the image is not in the viewport, move the span out of the container
                    span.style.transform = "translateY(-100px)";
                    span.style.opacity = "0";
                }
            },
            { threshold: 0.5 }
        );

        const callMe = document.querySelector(".contact__content--links-image");
        if (callMe) {
            // Observe the phone image
            observerPhone.observe(callMe);
        }
        return () => {
            if (callMe) {
                // Stop observing the phone image
                observerPhone.unobserve(callMe);
            }
        };
    }, []);

    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <h2>Contact</h2>
                <div className="contact__content">
                    <div className="contact__content--form">
                        <form onSubmit={sendEmail}>
                            <div className="inputs">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="inputs__icon"
                                />
                                <label
                                    htmlFor="from_name"
                                    className="visually-hidden"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="from_name"
                                    required
                                    placeholder="Your name"
                                />
                                <label
                                    htmlFor="email"
                                    className="visually-hidden"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Your email"
                                />
                                <label
                                    htmlFor="message"
                                    className="visually-hidden"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <div
                                className="captcha"
                                style={{ overflow: "hidden" }}
                            >
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                                    action="homepage"
                                    onChange={onRecaptchaChange}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!recaptchaValid}
                                className={`submit-button ${
                                    recaptchaValid ? "" : "disabled"
                                }`}
                            >
                                {isSending
                                    ? "Sending..."
                                    : emailResult === "OK"
                                    ? "Message sent"
                                    : "Send"}
                            </button>
                        </form>
                    </div>
                    <div className="contact__content--links">
                        <FontAwesomeIcon
                            className="phone-volume"
                            icon={faPhoneVolume}
                        />
                        <div className="contact__content--links-image">
                            <img
                                src={callMeImage}
                                alt="Call me, Julien Gardier"
                            />
                            <div className="contact__content--links-phone"></div>
                            <button className="phone-btn">
                                <a
                                    href="https://calendly.com/gardierjulien/15min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        Book a phone call{" "}
                                        <FontAwesomeIcon
                                            icon={faComments}
                                            className="contact__content--links-phone-icon"
                                        />
                                    </span>
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

export default ContactEng;
