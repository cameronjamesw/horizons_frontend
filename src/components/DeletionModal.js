import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function DeletionModal(props) {
    const [show, setShow] = useState(false);
    const { handleDelete } = props

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { id }  = useParams();

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeletionModal;

