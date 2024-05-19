import './cardcarousel.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function CardCarousel({ filter}) {
    const totalGroups = 5;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleGroups, setVisibleGroups] = useState([]);

    const isGroupVisible = (filter, index) => {
        if (filter === 'Tout') return true;
        if (filter === 'Frontend' && (index === 0 || index === 3)) return true;
        if (filter === 'Backend' && (index === 1 || index === 2)) return true;
        if (filter === 'Optimisation' && index === 4) return true;
        return false;
    };

    useEffect(() => {
        const updatedVisibleGroups = [];
        for (let i = 0; i < totalGroups; i++) {
            if (isGroupVisible(filter, i)) {
                updatedVisibleGroups.push(i);
            }
        }
        setVisibleGroups(updatedVisibleGroups);
        setCurrentIndex(0); // Reset currentIndex when filter changes
    }, [filter]);

    const handleLeftClick = () => {
        setCurrentIndex(oldIndex => oldIndex === 0 ? visibleGroups.length - 1 : oldIndex - 1);
    };

    const handleRightClick = () => {
        setCurrentIndex(oldIndex => oldIndex === visibleGroups.length - 1 ? 0 : oldIndex + 1);
    };

    return (
        <>
            <div className="card-groups">
                {visibleGroups.map((index, visibleIndex) => (
                    <div className={
                        `card-group ${visibleIndex === currentIndex ? 'active' : ''}`} 
                        data-status={visibleIndex === currentIndex ? 'active' : visibleIndex < currentIndex ? 'before' : 'after'} 
                        key={index}
                        >
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
                <div className={visibleGroups.length > 1 ? "arrows" : "arrows__hidden"}>
                    <FontAwesomeIcon className="arrows__left" icon={faCircleChevronLeft} onClick={handleLeftClick} />
                    <FontAwesomeIcon className="arrows__right" icon={faCircleChevronRight} onClick={handleRightClick} />
                </div>
            </div>
            <span className="counter">
                {currentIndex + 1} / {visibleGroups.length}
            </span>
        </>
    );
}

export default CardCarousel;
