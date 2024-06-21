import Header from "../../Layout/Francais/Header/Header";
import HeaderContent from "../../Components/HeaderContent/HeaderContent";
import Apropos from "../../Layout/Francais/Apropos/Apropos";
import SkillsDisplay from "../../Layout/SkillsDisplay/SkillsDisplay";
import Portfolio from "../../Layout/Francais/Portfolio/Portfolio";
import Contact from "../../Layout/Francais/Contact/Contact";
import Footer from "../../Layout/Francais/Footer/Footer";
import "./accueil.scss";

import {Helmet} from "react-helmet-async";

function Accueil() {
    return (
        <div className="accueil">
            <Helmet>
                <title>Julien Gardier - Mon portfolio</title>
                <meta name="description" content="Découvrez le portfolio de Julien Gardier, développeur web MERN (Mongo, React, Express, Nodejs). Projets de développement web à Paris et en Île-de-France." />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://julien-gardier.com" />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Julien Gardier - Portfolio"/>
                <meta property="og:description" content="Découvrez le portfolio de Julien Gardier, développeur web MERN (Mongo, React, Express, Nodejs)."/>
                <meta property="og:image" content="https://julien-gardier.com/julien-gardier-snapshot.PNG"/>
                <meta property="og:image:alt" content="Portrait de Julien Gardier, développeur web"/>
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="https://julien-gardier.com"/>
                <meta property="twitter:url" content="https://julien-gardier.com" />
                <meta name="twitter:title" content="Julien Gardier - Portfolio" />
                <meta name="twitter:description" content="Découvrez le portfolio de Julien Gardier, développeur web MERN (Mongo, React, Express, Nodejs)."/>
                <meta name="twitter:image" content="https://julien-gardier.com/julien-gardier-snapshot.PNG"/>
                <meta name="twitter:image:alt" content="Portrait de Julien Gardier, développeur Web (MERN-stack)" />
            </Helmet>
            <Header>
                <HeaderContent />
            </Header>
            <Apropos />
            <SkillsDisplay />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Accueil;
