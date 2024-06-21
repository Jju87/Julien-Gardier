import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal.jsx";
import projectsContentEng from "../../data/projectscontentEng.jsx";
import "./cardcarousel.scss";

function CardCarousel({ filter }) {
    const totalGroups = projectsContentEng.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleGroups, setVisibleGroups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [key, setKey] = useState(Math.random());

    // Filter projects by group
    const isGroupVisible = (filter, index) => {
        if (filter === "Tout") return true;
        if (filter === "Frontend" && (index === 0 || index === 3)) return true;
        if (filter === "Backend" && (index === 1 || index === 2)) return true;
        if (filter === "Optimisation" && index === 4) return true;
        return false;
    };

    useEffect(() => {
        // Update visible groups based on filter (a new array)
        const updatedVisibleGroups = [];
        for (let i = 0; i < totalGroups; i++) {
            if (isGroupVisible(filter, i)) {
                updatedVisibleGroups.push(i);
            }
        }
        setVisibleGroups(updatedVisibleGroups); // Update visibleGroups state with new array
        setCurrentIndex(0); // Reset currentIndex when filter changes
    }, [filter]);

    const handleLeftClick = () => {
        setCurrentIndex((oldIndex) =>
            oldIndex === 0 ? visibleGroups.length - 1 : oldIndex - 1
        );
        // if oldIndex === 0, set currentIndex to the last index of visibleGroups array , if not, set currentIndex to oldIndex - 1
    };

    const handleRightClick = () => {
        setCurrentIndex((oldIndex) =>
            oldIndex === visibleGroups.length - 1 ? 0 : oldIndex + 1
        );
        // if oldIndex === last index of visibleGroups array, set currentIndex to 0, if not, set currentIndex to oldIndex + 1
    };

    const handleCardGroupClick = (index) => {
        // Find the project content based on the index of the clicked card group, source is projectsContent.jsx
        const projectContentEng = projectsContentEng.find(
            (project) => project.id === index
        );
        // console.log(`opening ${projectContent.title} modal`);
        setModalContent(projectContentEng.content);
        setSelectedProjectId(projectContentEng.id);
        setIsModalOpen(true);
        // setKey with a random number in order to reset modal css behavior
        setKey(Math.random());
        // console.log(`Card group ${index} clicked. Modal open status: ${isModalOpen}`);
    };

    return (
        <>
            <div className="card-groups">
                {visibleGroups.map((index, visibleIndex) => (
                    <div
                        className={`card-group ${
                            visibleIndex === currentIndex ? "active" : ""
                        }`}
                        data-status={
                            visibleIndex === currentIndex
                                ? "active"
                                : visibleIndex < currentIndex
                                ? "before"
                                : "after"
                        }
                        key={index}
                        onClick={() => {
                            handleCardGroupClick(index);
                            console.log(
                                `Card group ${index} clicked. Modal open status: ${isModalOpen}`
                            );
                        }}
                    >
                        <div
                            className={`little-card card group-${index}`}
                        ></div>
                        <div className={`big-card card group-${index}`}></div>
                        <div
                            className={`little-card card group-${index}`}
                        ></div>
                        <div className={`big-card card group-${index}`}></div>
                        <div
                            className={`little-card card group-${index}`}
                        ></div>
                        <div className={`big-card card group-${index}`}></div>
                        <div
                            className={`little-card card group-${index}`}
                        ></div>
                        <div className={`big-card card group-${index}`}></div>
                    </div>
                ))}
                <div
                    className={
                        visibleGroups.length > 1 ? "arrows" : "arrows__hidden"
                    }
                >
                    <FontAwesomeIcon
                        className="arrows__left"
                        icon={faCircleChevronLeft}
                        onClick={handleLeftClick}
                    />
                    <FontAwesomeIcon
                        className="arrows__right"
                        icon={faCircleChevronRight}
                        onClick={handleRightClick}
                    />
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
                    title={projectsContentEng[selectedProjectId].title}
                    key={key}
                />
            )}
        </>
    );
}

export default CardCarousel;
