import phoneMockup from '../Assets/Images/phone-mockup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBookOpen, faPersonHiking, faRocket, faMinus } from '@fortawesome/free-solid-svg-icons';

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
                        title="Kasa, application web développée par julien Gardier"  
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
                    <h3> <FontAwesomeIcon icon={faPersonHiking} /> Défis relevés</h3>
                    <p> - La création d'un carrousel d'images codé à partir de zéro s'est révélée être assez technique.</p>
                    <p> - L'intégration des animations </p>
                    </section>
                    <section>
                    <h3> <FontAwesomeIcon icon={faRocket} /> Initiatives supplémentaires</h3>
                    <p>Pour aller plus loin, j'ai intégré au carrousel d'images une logique de défilement automatique avec un effet de transition entre les images.</p>
                    </section>
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
                <h3>Projet Backend 1</h3>
                <p>Détails du projet backend 1</p>
                <ul>
                    <li>Point fort 1</li>
                    <li>Point fort 2</li>
                    <li>Point fort 3</li>
                </ul>
            </>
        )
    },
    {
        id: 2,
        content: (
            <>
                <h3>Projet Backend 2</h3>
                <p>Détails du projet backend 2</p>
                <ul>
                    <li>Point fort 1</li>
                    <li>Point fort 2</li>
                    <li>Point fort 3</li>
                </ul>
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
