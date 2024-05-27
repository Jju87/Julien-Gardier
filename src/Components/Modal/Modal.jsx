import React, { useEffect, useRef } from "react";
import './modal.scss';
import '../../Styles/basics.scss'

function Modal({ isModalOpen, onClose, modalContent, projectId }) {
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

    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';


    if (!isModalOpen) return null;

    return (
        <div className={`modal open modal-${projectId}`} >
            <div className="modal__content" ref={modalRef}>
                <div className="modal__content--header">
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal__content--body">
                    {modalContent}
                </div>
            </div>
        </div>
    );
}

export default Modal;
