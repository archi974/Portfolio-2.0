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
            <button onClick={closeModal}>Close Modal</button>
            <h2>{project?.name}</h2>
            <p>{project?.year}</p>
            <p>{project?.description}</p>
            <p>Langages utilisés : {project?.language.join(', ')}</p>
            {
                project?.constraints.map((issue, j) => (
                    <ul key={j}>
                        <li>{issue.first}</li>
                        <li>{issue.second}</li>
                        <li>{issue.third}</li>
                    </ul>
                ))
            }
        </Modal>
    );
};

export default ProjectModal;