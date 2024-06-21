import { Link } from "react-router-dom";
import meOnAHorseInSpace from "../../Assets/Images/404.webp";
import "./errorPage.scss";

function ErrorPage() {
    return (
        <div className="error-page">
            <section className="error-page__content">
                <p>Are you lost? Dont't you worry...</p>
                <img
                    src={meOnAHorseInSpace}
                    alt="Me on a horse in space"
                />
                <Link to="/eng/">...I'll take you back to safety!</Link>
            </section>
        </div>
    );
}

export default ErrorPage;
