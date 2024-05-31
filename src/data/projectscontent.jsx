import phoneMockup from '../Assets/Images/phone-mockup.png';
import NinaCarducci from '../Assets/Modals/NinaCarducci.webp';
import KasaScreenshot from '../Assets/Modals/kasa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBookOpen, faPersonHiking, faRocket, faMinus, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

const projectsContent = [
    {
        id: 0,
        title: "Création d'une application web de location immobilière avec React",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img className="projects-container__mobile--mockup" src={phoneMockup} alt="contour d'un téléphone" />
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
                        <a href="https://kasa-rose.vercel.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site en ligne</a>
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
                    <img className="projects-container__mobile--mockup" src={phoneMockup} alt="contour d'un téléphone" />
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
                        <a href="https://sophie-bluel-architecte-iota.vercel.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site en ligne </a>
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
        title: "Développement du back-end d'un site de notation de livres",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img className="projects-container__mobile--mockup" src={phoneMockup} alt="contour d'un téléphone" />
                    <iframe 
                        src="https://vieux-grimoire.vercel.app/" 
                        title="Au vieux grimoire, application web développée par Julien Gardier"  
                    ></iframe>            
                </div>
                <div className="projects-container__text">
                    <section>
                    <h3> <FontAwesomeIcon icon={faBookOpen} /> Scénario</h3>
                    <p>Permettre aux utilisateurs de créer, noter et consulter des livres.</p>                    
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faCode} /> Compétences requises</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> Green code</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Multer, fs, bcrypt, mongoose</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Respect des exigences de l'API</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés sur ce projet</h3>
                    <ul>
                    <li> <FontAwesomeIcon icon={faMinus} /> Création d'une route qui envoie un array (tableau) des trois meilleurs notes</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faRocket} /> Initiatives supplémentaires</h3>
                    <p>J'ai migré le stockage des images à un CDN pour améliorer les performances et pouvoir déployer en ligne.</p>
                    <p>J'ai intégré une logique de modération de contenu pour filtrer les images. Le middleware de modération envoie l'image à une API, qui permet à une IA d'analyser l'image. Mon code valide ensuite l'image en fonction de l'analyse.</p>
                    <p>J'ai également modifié le modèle pour permettre aux utilisateurs d'ajouter des avis dans une nouvelle section "À propos de ce livre".</p>                    
                    <p>N'hésitez pas à ajouter ou supprimer un livre ! Un compte démo et des inputs préremplis sont disponibles pour faciliter l'expérience.</p>
                    </section>                
                </div>
                <div className="projects-container__links">
                    <div className="projects-container__links--website">
                        <a href="https://vieux-grimoire.vercel.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site en ligne</a>
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
        title: "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img className="projects-container__mobile--mockup" src={phoneMockup} alt="contour d'un téléphone" />
                    <iframe 
                        src="https://jju87.github.io/booki-openclassrooms/" 
                        title="Booki, développé par Julien Gardier"  
                    ></iframe>            
                </div>
                <div className="projects-container__text">
                    <section>
                    <h3> <FontAwesomeIcon icon={faBookOpen} /> Scénario</h3>
                    <p>Intégration de la page d'acceuil de Booki, site de type "Airbnb". Premier projet de ma formation "développeur web" avec OpenClassrooms.</p>                    
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faCode} /> Compétences requises</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> HTML, CSS</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Intégration d'une maquette Figma</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Utilisation de Github</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés sur ce projet</h3>
                    <ul>
                    <li> <FontAwesomeIcon icon={faMinus} /> Intégration des maquettes en responsive</li>
                    <li> <FontAwesomeIcon icon={faMinus} /> Modification d'un code CSS préexistant</li>                    
                    </ul>
                    </section>
                </div>
                <div className="projects-container__links">
                    <div className="projects-container__links--website">
                        <a href="https://jju87.github.io/booki-openclassrooms/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site en ligne </a>
                    </div>
                    <div className="projects-container__links--github">
                        <a href="https://github.com/Jju87/booki-openclassrooms" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Voir le code</a>
                    </div>
                </div>
            </article>
            </>
        )
    },
    {
        id: 4,
        title: "Débuggage et optimisation d'un site de photographe",
        content: (
            <>
             <article className="projects-container">
                <div className="projects-container__mobile">
                    <img 
                        id="ninaImg"
                        src={NinaCarducci}
                        alt="Nina Carducci, développé par Julien Gardier"  
                    />            
                </div>
                <div className="projects-container__text">
                    <section>
                    <h3> <FontAwesomeIcon icon={faBookOpen} /> Scénario</h3>
                    <p>Optimisation SEO pour le site de Nina Carducci, une photographe, selon ses demandes indiquées dans son mail. Un rapport détaillé de l'intervention sera fourni.</p>                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faCode} /> Compétences requises</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMinus} /> Optimisation des performances (compression d'images, minification, CDN)</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> SEO (référencement et mots-clefs)</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Intégration des balises Meta pour les réseaux sociaux</li>
                        <li> <FontAwesomeIcon icon={faMinus} /> Amélioration de l'accessibilité (Wave, ARIA, sémantique HTML)</li>
                    </ul>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés sur ce projet</h3>
                    <ul>
                    <li> <FontAwesomeIcon icon={faMinus} /> Production d'un rapport d'intervention détaillé</li>
                    <li> <FontAwesomeIcon icon={faMinus} /> Débuggage du carrousel d'images</li>
                    </ul>
                    </section>
                </div>
                <div className="projects-container__links">
                    <div className="projects-container__links--website">
                        <a href="https://jju87.github.io/Carducci-OpenClassroomss/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> Voir le site en ligne </a>
                    </div>
                    <div className="projects-container__links--pdf">
                        <a href="https://docs.google.com/document/d/1WNRTv070XOpPMh36o0PTYpS6GgP2FsIp7SGzIVCzMHA/edit?usp=sharing" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGoogleDrive} /> Voir le rapport</a>
                    </div>
                </div>
            </article>
            </>
        )    
    }
];

export default projectsContent;
