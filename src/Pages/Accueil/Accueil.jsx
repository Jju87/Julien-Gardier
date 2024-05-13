import '../../Layout/Francais/Header/Header';
import Header from '../../Layout/Francais/Header/Header';
import HeaderContent from '../../Components/HeaderContent/HeaderContent';
import Apropos from '../../Layout/Francais/Apropos/Apropos';

function Accueil() {
    return (
        <div className="Accueil">
            <Header>
                <HeaderContent />
            </Header>
            <Apropos /> 
        </div>
    );
}

export default Accueil;