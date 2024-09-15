import HeaderEng from "../../Layout/English/HeaderEng/HeaderEng";
import HeaderContentEng from "../../Components/HeaderContent/HeaderContentEng";
import AproposEng from "../../Layout/English/AproposEng/AproposEng";
import SkillsDisplayEng from "../../Layout/SkillsDisplay/SkillsDisplayEng";
import PortfolioEng from "../../Layout/English/PortfolioEng/PortfolioEng";
import ContactEng from "../../Layout/English/ContactEng/ContactEng";
import FooterEng from "../../Layout/Francais/Footer/FooterEng";
import "../Accueil/accueil.scss";

import {Helmet} from "react-helmet-async";

function Home() {
    return (
        <div className="accueil">
            <Helmet>
                <title>Julien Gardier - My Portfolio</title>
                <meta name="description" content="Explore Julien Gardier's portfolio, a MERN stack (Mongo, React, Express, Node.js) web developer. Web development projects in Paris and Île-de-France." />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://julien-gardier.com" />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Julien Gardier - Portfolio"/>
                <meta property="og:description" content="Explore Julien Gardier's portfolio, a MERN stack (Mongo, React, Express, Node.js) web developer. Web development projects in Paris and Île-de-France."/>
                <meta property="og:image" content="https://julien-gardier.com/julien-gardier-snapshot-eng.PNG"/>
                <meta property="og:image:alt" content="Portrait of Julien Gardier, web developer"/>
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="https://julien-gardier.com"/>
                <meta property="twitter:url" content="https://julien-gardier.com" />
                <meta name="twitter:title" content="Julien Gardier - Portfolio" />
                <meta name="twitter:description" content="Explore Julien Gardier's portfolio, a MERN stack (Mongo, React, Express, Node.js) web developer. Web development projects in Paris and Île-de-France."/>
                <meta name="twitter:image" content="https://julien-gardier.com/julien-gardier-snapshot-eng.PNG"/>
                <meta name="twitter:image:alt" content="Portrait of Julien Gardier, web developer (MERN-stack)" />
            </Helmet>
            <HeaderEng>
                <HeaderContentEng />
            </HeaderEng>
            <AproposEng />
            <SkillsDisplayEng />
            <PortfolioEng />
            <ContactEng />
            <FooterEng />
        </div>
    );
}

export default Home;
