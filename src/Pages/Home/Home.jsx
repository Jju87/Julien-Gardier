import HeaderEng from "../../Layout/English/HeaderEng/HeaderEng";
import HeaderContentEng from "../../Components/HeaderContent/HeaderContentEng";
import AproposEng from "../../Layout/English/AproposEng/AproposEng";
import SkillsDisplayEng from "../../Layout/SkillsDisplay/SkillsDisplayEng";
import PortfolioEng from "../../Layout/English/PortfolioEng/PortfolioEng";
import ContactEng from "../../Layout/English/ContactEng/ContactEng";
import Footer from "../../Layout/Francais/Footer/Footer";
import "../Accueil/accueil.scss";

function Home() {
    return (
        <div className="accueil">
            <HeaderEng>
                <HeaderContentEng />
            </HeaderEng>
            <AproposEng />
            <SkillsDisplayEng />
            <PortfolioEng />
            <ContactEng />
            <Footer />
        </div>
    );
}

export default Home;
