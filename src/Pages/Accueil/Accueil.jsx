import '../../Layout/Francais/Header/Header';
import Header from '../../Layout/Francais/Header/Header';
import HeaderContent from '../../Components/HeaderContent/HeaderContent';
import Apropos from '../../Layout/Francais/Apropos/Apropos';
import SkillsDisplay from '../../Layout/SkillsDisplay/SkillsDisplay'
import Portfolio from '../../Layout/Francais/Portfolio/Portfolio';

function Accueil() {
    return (
        <div className="Accueil">
            <Header>
                <HeaderContent />
            </Header>
            <Apropos /> 
            <SkillsDisplay />
            < Portfolio />
        </div>
    );
}

export default Accueil;