import '../../Layout/Francais/Header/Header';
import Header from '../../Layout/Francais/Header/Header';
import HeaderContent from '../../Components/HeaderContent/HeaderContent';
import Apropos from '../../Layout/Francais/Apropos/Apropos';
import SkillsDisplay from '../../Layout/SkillsDisplay/SkillsDisplay'
import Portfolio from '../../Layout/Francais/Portfolio/Portfolio';
import Contact from '../../Layout/Francais/Contact/Contact';
import Footer from "../../Layout/Francais/Footer/Footer";
import './accueil.scss';

function Accueil() {
    return (
        <div className="accueil">
            <Header>
                <HeaderContent />
            </Header>
            <Apropos /> 
            <SkillsDisplay />
            < Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default Accueil;