import '../../Layout/Francais/Header/Header';
import Header from '../../Layout/Francais/Header/Header';
import HeaderContent from '../../Components/HeaderContent/HeaderContent';
import Apropos from '../../Layout/Francais/Apropos/Apropos';
import SkillsDisplay from '../../Layout/SkillsDisplay/SkillsDisplay'

function Accueil() {
    return (
        <div className="Accueil">
            <Header>
                <HeaderContent />
            </Header>
            <Apropos /> 
            <SkillsDisplay />
        </div>
    );
}

export default Accueil;