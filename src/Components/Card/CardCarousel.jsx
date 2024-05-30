import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Components/Modal/Modal';
import projectsContent from '../../data/projectscontent.jsx';
import './cardcarousel.scss';

function CardCarousel({ filter }) {
    const totalGroups = projectsContent.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleGroups, setVisibleGroups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [key, setKey] = useState(Math.random())


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

    const handleCardGroupClick = (index) => {
        const projectContent = projectsContent.find(project => project.id === index);
        setModalContent(projectContent.content);
        setSelectedProjectId(projectContent.id);
        setIsModalOpen(true);
        setKey(Math.random());
        console.log(`Card group ${index} clicked. Modal open status: ${isModalOpen}`);
    };

    return (
        <>
            <div className="card-groups">
                {visibleGroups.map((index, visibleIndex) => (
                    <div className={
                        `card-group ${visibleIndex === currentIndex ? 'active' : ''}`} 
                        data-status={visibleIndex === currentIndex ? 'active' : visibleIndex < currentIndex ? 'before' : 'after'} 
                        key={index}
                        onClick={() =>{
                         handleCardGroupClick(index);
                         console.log(`Card group ${index} clicked. Modal open status: ${isModalOpen}`);
                        }}
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
            {selectedProjectId !== null && (
                <Modal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    modalContent={modalContent}
                    projectId={selectedProjectId}
                    title={projectsContent[selectedProjectId].title}
                    key={key}
                />
            )}
        </>
    );
}

export default CardCarousel;
