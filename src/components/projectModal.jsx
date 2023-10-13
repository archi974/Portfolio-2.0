import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ProjectModal = ({ showModal, closeModal, project }) => {

    useEffect(() => {
        Modal.setAppElement("#root");
    }, []);

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            contentLabel="Project Modal"
            overlayClassName="project-modal_overlay"
            className="projet-modal_content"
        >
            <button onClick={closeModal} className="modal-close-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
            </button>
            <div className='modal-content-video'>
                {
                    project?.medias.desktop.video && (
                        <iframe className="modal-video" src={project?.medias.desktop.video} title={project?.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
                    )
                }
            </div>
        </Modal>
    );
};

export default ProjectModal;