import { Link } from "react-router-dom";
import meOnAHorseInSpace from "../../Assets/Images/404.webp";
import "./errorPage.scss";

function ErrorPage() {
    return (
        <div className="error-page">
            <section className="error-page__content">
                <p>Vous êtes perdu? Ne vous inquiétez pas...</p>
                <img
                    src={meOnAHorseInSpace}
                    alt="Moi sur un cheval dans l'espace"
                />
                <Link to="/">...je vous ramène en lieu sûr.</Link>
            </section>
        </div>
    );
}

export default ErrorPage;
