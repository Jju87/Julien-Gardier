import './cardcarousel.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function CardCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalGroups = 5; // Remplacez par le nombre total de groupes de cartes

    const [status, setStatus] = useState(Array(totalGroups).fill('after')); // Initialise le statut de chaque groupe de cartes

    useEffect(() => {
        let newStatus = [...status];
        newStatus = newStatus.map((_, index) => {
            if (index < currentIndex) return 'before';
            if (index > currentIndex) return 'after';
            return 'active';
        });
        setStatus(newStatus);
    }, [currentIndex]);

    const handleLeftClick = () => {
        setCurrentIndex(oldIndex => oldIndex === 0 ? totalGroups - 1 : oldIndex - 1);
    };

    const handleRightClick = () => {
        setCurrentIndex(oldIndex => oldIndex === totalGroups - 1 ? 0 : oldIndex + 1);
    };
    
    return (
        <div className="card-groups">
            {status.map((status, index) => (
                <div className={`card-group ${status}`} data-status={status} data-index={index} key={index}>
                    <div className={`little-card card group-${index}`}></div>
                    <div className={`big-card card group-${index}`}></div>
                    <div className={`little-card card group-${index}`}></div>
                    <div className={`big-card card group-${index}`}></div>
                    <div className={`little-card card group-${index}`}></div>
                    <div className={`big-card card group-${index}`}></div>
                    <div className={`little-card card group-${index}`}></div>
                    <div className={`big-card card group-${index}`}></div>
                </div>
            ))}
            <div className="arrows">
                <FontAwesomeIcon className="arrows__left" icon={faCircleChevronLeft} onClick={handleLeftClick} />
                <FontAwesomeIcon className="arrows__right" icon={faCircleChevronRight} onClick={handleRightClick} />
            </div>
        </div>
    );
}

export default CardCarousel;