import pcMockup from "../Assets/Images/phone-mockup.png";
import NinaCarducci from "../Assets/Modals/NinaCarducci.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faBookOpen,
    faPersonHiking,
    faRocket,
    faMinus,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

const projectsContentEng = [
    {
        id: 0,
        title: "Kasa, a real-estate rental web application. Created with React",
        content: (
            <>
                <article className="projects-container">
                    <div className="projects-container__mobile">
                        <img
                            className="projects-container__mobile--mockup"
                            src={pcMockup}
                            alt="outline of a pc"
                        />
                        <iframe
                            src="https://kasa-rose.vercel.app/"
                            title="Kasa, web application developed by Julien Gardier"
                        ></iframe>
                    </div>
                    <div className="projects-container__text">
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faBookOpen} /> Project
                            </h3>
                            <p>
                                Kasa, coded over 10 years ago in ASP.NET with
                                significant legacy code, is being completely
                                overhauled to a JavaScript stack. I am
                                responsible for implementing the front-end with
                                React.
                            </p>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faCode} /> Required
                                Skills
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Create
                                    React App, React Router, React Hooks
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Package
                                    management with yarn or npm
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Using
                                    Figma devmode
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faPersonHiking} />{" "}
                                Challenges I faced 
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Creating
                                    the image carousel without any external
                                    libraries.
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} />{" "}
                                    Integration of the "collapse" animations.
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faRocket} /> More
                                initiatives
                            </h3>
                            <p>
                                I added auto-scrolling and transitions to the
                                image carousel.
                            </p>{" "}
                        </section>
                    </div>
                    <div className="projects-container__links">
                        <div className="projects-container__links--website">
                            <a
                                href="https://kasa-rose.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} /> View the
                                website
                            </a>
                        </div>
                        <div className="projects-container__links--github">
                            <a
                                href="https://github.com/Jju87/Kasa"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} /> View the
                                code
                            </a>
                        </div>
                    </div>
                </article>
            </>
        ),
    },
    {
        id: 1,
        title: "Sophie Bluel, a dynamic web page created with JavaScript (vanilla)",
        content: (
            <>
                <article className="projects-container">
                    <div className="projects-container__mobile">
                        <img
                            className="projects-container__mobile--mockup"
                            src={pcMockup}
                            alt="outline of a pc"
                        />
                        <iframe
                            src="https://sophie-bluel-architecte-iota.vercel.app/"
                            title="Sophie Bluel, web application developed by Julien Gardier"
                        ></iframe>
                    </div>
                    <div className="projects-container__text">
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faBookOpen} /> Project
                            </h3>
                            <p>
                                Once logged in, the architect Sophie Bluel will be able to upload or
                                delete media on her portfolio website.
                            </p>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faCode} /> Required
                                Skills
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} />{" "}
                                    Manipulating DOM elements with JavaScript
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} />{" "}
                                    Communicating with an API (using
                                    Swagger/Postman)
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Gathering
                                    user data (images, text) through forms
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faPersonHiking} />{" "}
                                Challenges I faced 
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} />{" "}
                                    Dynamically updating data to avoid page
                                    reloads for the user
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faRocket} /> More
                                initiatives
                            </h3>
                            <p>
                                I completely rebuilt the back-end of this
                                project to allow online deployment. I used
                                Express and MongoDB, following the front-end
                                logic.
                            </p>
                            <p>
                                Images, previously stored locally, are now
                                hosted on a CDN.
                            </p>
                            <p>
                                I also added a middleware to moderate posted
                                images.
                            </p>
                            <p>
                                Try logging in with the demo account to add or
                                delete a photo!
                            </p>{" "}
                        </section>
                    </div>
                    <div className="projects-container__links">
                        <div className="projects-container__links--website">
                            <a
                                href="https://sophie-bluel-architecte-iota.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} /> View the
                                website{" "}
                            </a>
                        </div>
                        <div className="projects-container__links--github">
                            <a
                                href="https://github.com/Jju87/Sophie-Bluel_Architecte"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} /> View the
                                code
                            </a>
                        </div>
                    </div>
                </article>
            </>
        ),
    },
    {
        id: 2,
        title: "Back-end development of a book-rating site using MERN stack",
        content: (
            <>
                <article className="projects-container">
                    <div className="projects-container__mobile">
                        <img
                            className="projects-container__mobile--mockup"
                            src={pcMockup}
                            alt="outline of a pc"
                        />
                        <iframe
                            src="https://vieux-grimoire.vercel.app/"
                            title="Au vieux grimoire, web application developed by Julien Gardier"
                        ></iframe>
                    </div>
                    <div className="projects-container__text">
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faBookOpen} /> Scenario
                            </h3>
                            <p>
                                Allow users to create, rate, and review books.
                            </p>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faCode} /> Required
                                Skills
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Green
                                    code
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Multer,
                                    fs, bcrypt, mongoose
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Meeting
                                    API requirements
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faPersonHiking} />{" "}
                                Challenges faced in this project
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Creating
                                    a route that sends an array of the top three
                                    ratings
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faRocket} /> Additional
                                Initiatives
                            </h3>
                            <p>
                                I migrated image storage to a CDN to improve
                                performance and enable online deployment.
                            </p>
                            <p>
                                I integrated a content moderation logic to
                                filter images. The moderation middleware sends
                                the image to an API, allowing an AI to analyze
                                the image. My code then validates the image
                                based on the analysis.
                            </p>
                            <p>
                                I also modified the model to allow users to rate
                                books (1-5) and write a text review.
                            </p>{" "}
                        </section>
                    </div>
                    <div className="projects-container__links">
                        <div className="projects-container__links--website">
                            <a
                                href="https://vieux-grimoire.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} /> View the
                                website{" "}
                            </a>
                        </div>
                        <div className="projects-container__links--github">
                            <a
                                href="https://github.com/Jju87/P7_Vieux_Grimoire"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} /> View the
                                code
                            </a>
                        </div>
                    </div>
                </article>
            </>
        ),
    },
    {
        id: 3,
        title: "Booki, homepage for a travel agency with HTML & CSS",
        content: (
            <>
                <article className="projects-container">
                    <div className="projects-container__mobile">
                        <img
                            className="projects-container__mobile--mockup"
                            src={pcMockup}
                            alt="phone outline"
                        />
                        <iframe
                            src="https://jju87.github.io/booki-openclassrooms/"
                            title="Booki, developed by Julien Gardier"
                        ></iframe>
                    </div>
                    <div className="projects-container__text">
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faBookOpen} /> Project
                            </h3>
                            <p>
                                Integration of Booki's homepage, a site similar to "Airbnb". First project of my "web developer" training with OpenClassrooms.
                            </p>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faCode} /> Required Skills
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> HTML, CSS
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Integration of a Figma mockup
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Use of Github
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faPersonHiking} /> Challenges I faced
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Integration of responsive mockups
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Modification of pre-existing CSS code
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="projects-container__links">
                        <div className="projects-container__links--website">
                            <a
                                href="https://jju87.github.io/booki-openclassrooms/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} /> View the site online{" "}
                            </a>
                        </div>
                        <div className="projects-container__links--github">
                            <a
                                href="https://github.com/Jju87/booki-openclassrooms"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} /> View the code
                            </a>
                        </div>
                    </div>
                </article>
            </>
        ),
    },
    {
        id: 4,
        title: "Debugging and optimizing a photographer's website with Lighthouse",
        content: (
            <>
                <article className="projects-container">
                    <div className="projects-container__mobile">
                        <img
                            id="ninaImg"
                            src={NinaCarducci}
                            alt="Nina Carducci, developed by Julien Gardier"
                        />
                    </div>
                    <div className="projects-container__text">
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faBookOpen} /> Project
                            </h3>
                            <p>
                                SEO optimization for Nina Carducci's website, a photographer, following her requests. A very detailed report of the intervention is provided.
                            </p>{" "}
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faCode} /> Required Skills
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Performance optimization (image compression, minification, CDN)
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> SEO (keywords and optimization)
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Integration of Meta tags for social media
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Accessibility improvement (Wave, ARIA, HTML semantics)
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>
                                {" "}
                                <FontAwesomeIcon icon={faPersonHiking} /> Challenges I faced
                            </h3>
                            <ul>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Production of a detailed intervention report
                                </li>
                                <li>
                                    {" "}
                                    <FontAwesomeIcon icon={faMinus} /> Debugging the image carousel
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="projects-container__links">
                        <div className="projects-container__links--website">
                            <a
                                href="https://jju87.github.io/Carducci-OpenClassroomss/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEye} /> View the site online{" "}
                            </a>
                        </div>
                        <div className="projects-container__links--pdf">
                            <a
                                href="https://docs.google.com/document/d/1WNRTv070XOpPMh36o0PTYpS6GgP2FsIp7SGzIVCzMHA/edit?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGoogleDrive} /> View the report
                            </a>
                        </div>
                    </div>
                </article>
            </>
        ),
    },  
];

export default projectsContentEng;
