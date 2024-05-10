 import {Link} from 'react-router-dom';
 import './header.scss';
 import logoHeader from '../../Assets/Images/logo.PNG';
 import HeaderContent from '../../Components/HeaderContent/HeaderContent';

 import englishFlag from '../../Assets/Images/eng-flag.png';

 
 
 function Header() {
    return (
        <header>
            <nav>
                <img className='logo' src={logoHeader} alt="Logo de Julien Gardier, développeur web en Essonne" />
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="#a-propos">A propos</Link>
                        </li>
                        <li>
                            <Link to="#portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="#contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/eng/">
                                <img src={englishFlag} alt="swith to english language" />
                            </Link>
                        </li>
                    </ul>
            </nav>
            <HeaderContent />
        </header>
    );
 }

    export default Header;