import phoneMockup from '../Assets/Images/phone-mockup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBookOpen, faPersonHiking, faRocket, faMinus, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projectsContent = [
    {
        id: 0,
        title: "Création d'une application web de location immobilière avec React",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img src={phoneMockup} alt="contour d'un téléphone" />
                    <iframe 
                        src="https://kasa-rose.vercel.app/" 
                        title="Kasa, application web développée par Julien Gardier"  
                    ></iframe>            
                </div>
                <div className="projects-container__text">
                    <section>
                    <h3> <FontAwesomeIcon icon={faBookOpen} /> Scénario</h3>
                    <p>Kasa, codé il y a plus de 10 ans en ASP.NET avec un code legacy important, est en refonte totale vers une stack JavaScript. Je suis chargé d'implémenter le front-end avec React.</p>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faCode} /> Compétences requises</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> Create React App, React Router, React Hooks</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Gestion de packages avec yarn ou npm</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Utilisation de Figma</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés sur ce projet</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> La création du carrousel d'images codé sans bibliothèques externes.</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> L'intégration des animations de "collapse". </li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faRocket} /> Initiatives supplémentaires</h3>
                    <p>J'ai ajouté un défilement automatique avec transitions au carrousel d'images.</p>                    </section>
                </div>
                <div className="projects-container__links">
                    <div className="projects-container__links--website">
                        <a href="https://kasa-rose.vercel.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site</a>
                    </div>
                    <div className="projects-container__links--github">
                        <a href="https://github.com/Jju87/Kasa" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Voir le code</a>
                    </div>
                </div>
            </article>
            </>
        )
    },
    {
        id: 1,
        title: "Création d'une page web dynamique avec JavaScript",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img src={phoneMockup} alt="contour d'un téléphone" />
                    <iframe 
                        src="https://sophie-bluel-architecte-iota.vercel.app/" 
                        title="Sophie Bluel, application web développée par Julien Gardier"  
                    ></iframe>            
                </div>
                <div className="projects-container__text">
                    <section>
                    <h3> <FontAwesomeIcon icon={faBookOpen} /> Scénario</h3>
                    <p>Développer le portfolio de l'architecte Sophie Bluel. Une fois connectée, elle pourra uploader ou supprimer des médias.</p>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faCode} /> Compétences requises</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> Manipulation des éléments du DOM avec JavaScript</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Communication avec une API (utilisation de Swagger/Postman)</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Récupération des données utilisateur via des formulaires</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés sur ce projet</h3>
                    <ul>
                    <li> <FontAwesomeIcon icon={faMinus} /> Mise à jour dynamique des données pour éviter le rechargement de la page par l'utilisateur</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faRocket} /> Initiatives supplémentaires</h3>
                    <p>J'ai entièrement reconstruit le back-end de ce projet pour permettre son déploiement en ligne. J'ai utilisé Express et MongoDB, en respectant la logique du front-end.</p>
                    <p>Les images, auparavant stockées localement, sont maintenant hébergées sur un CDN.</p>
                    <p>J'ai aussi ajouté un middleware pour modérer les images postées.</p>
                    <p>Essayez de vous connecter avec le compte démo pour ajouter ou supprimer une photo !</p>                    </section>
                </div>
                <div className="projects-container__links">
                    <div className="projects-container__links--website">
                        <a href="https://sophie-bluel-architecte-iota.vercel.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site</a>
                    </div>
                    <div className="projects-container__links--github">
                        <a href="https://github.com/Jju87/Sophie-Bluel_Architecte" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Voir le code</a>
                    </div>
                </div>
            </article>
            </>
        )
    },
    {
        id: 2,
        title: "Développer le back-end d'un site de notation de livres",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img src={phoneMockup} alt="contour d'un téléphone" />
                    <iframe 
                        src="https://vieux-grimoire.vercel.app/" 
                        title="Au vieux grimoire, application web développée par Julien Gardier"  
                    ></iframe>            
                </div>
                <div className="projects-container__text">
                    <section>
                    <h3> <FontAwesomeIcon icon={faBookOpen} /> Scénario</h3>
                    <p>Développer le portfolio de l'architecte Sophie Bluel. Une fois connectée, elle pourra uploader ou supprimer des médias.</p>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faCode} /> Compétences requises</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> Manipulation des éléments du DOM avec JavaScript</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Communication avec une API (utilisation de Swagger/Postman)</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Récupération des données utilisateur via des formulaires</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés sur ce projet</h3>
                    <ul>
                    <li> <FontAwesomeIcon icon={faMinus} /> Mise à jour dynamique des données pour éviter le rechargement de la page par l'utilisateur</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faRocket} /> Initiatives supplémentaires</h3>
                    <p>J'ai entièrement reconstruit le back-end de ce projet pour permettre son déploiement en ligne. J'ai utilisé Express et MongoDB, en respectant la logique du front-end.</p>
                    <p>Les images, auparavant stockées localement, sont maintenant hébergées sur un CDN.</p>
                    <p>J'ai aussi ajouté un middleware pour modérer les images postées.</p>
                    <p>Essayez de vous connecter avec le compte démo pour ajouter ou supprimer une photo !</p>                    </section>
                </div>
                <div className="projects-container__links">
                    <div className="projects-container__links--website">
                        <a href="https://vieux-grimoire.vercel.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site</a>
                    </div>
                    <div className="projects-container__links--github">
                        <a href="https://github.com/Jju87/Vieux-Grimoire" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Voir le code</a>
                    </div>
                </div>
            </article>
            </>
        )
    },
    {
        id: 3,
        content: (
            <>
                <h3>Projet Frontend 2</h3>
                <p>Détails du projet frontend 2</p>
                <ul>
                    <li>Point fort 1</li>
                    <li>Point fort 2</li>
                    <li>Point fort 3</li>
                </ul>
            </>
        )
    },
    {
        id: 4,
        content: (
            <>
                <h3>Projet d'optimisation</h3>
                <p>Détails du projet d'optimisation</p>
                <ul>
                    <li>Point fort 1</li>
                    <li>Point fort 2</li>
                    <li>Point fort 3</li>
                </ul>
            </>
        )
    }
];

export default projectsContent;
