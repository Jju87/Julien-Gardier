import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './modal.scss';
import '../../Styles/basics.scss'

function Modal({ isModalOpen, onClose, modalContent, projectId, title, key }) {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    document.body.style.overflowY= isModalOpen ? 'hidden' : 'auto';

    return (
        <div className={`modal ${isModalOpen ? 'open' : ''} modal-${projectId}`} >
            <div className="modal__content" ref={modalRef}>
                <div className="modal__content--header">
                    <h2>{title}</h2>
                    <button onClick={onClose}><FontAwesomeIcon icon={faXmark}  /></button>
                </div>
                <div className="modal__content--body">
                    {modalContent}
                </div>
            </div>
        </div>
    );
}

export default Modal;