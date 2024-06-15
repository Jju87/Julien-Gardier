import "./skillsbox.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function SkillsBox({ textInBox }) {
    const [hovered, setHovered] = useState(false);
    const handlePortraitOver = () => {
        setHovered(true);
    };
    const handlePortraitOut = () => {
        setHovered(false);
    };

    return (
        <div
            className={`skillsbox ${hovered ? "hovered" : ""}`}
            onMouseOver={handlePortraitOver}
            onMouseOut={handlePortraitOut}
        >
            <FontAwesomeIcon icon={faPlus} className="cross" />
            <p>{textInBox}</p>
        </div>
    );
}

export default SkillsBox;
