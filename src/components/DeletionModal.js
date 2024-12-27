import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../styles/MoreDropdown.module.css"

function DeletionModal(props) {
    const [show, setShow] = useState(false);
    const { handleDelete, dropDown } = props

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { id }  = useParams();

    return (
        <>
        { dropDown ? (
            <Dropdown.Item
            onClick={handleShow}
          >
            <i className={`${styles.DeleteIcon} fas fa-trash`} />
          </Dropdown.Item>
        ) : (
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>
            
        )}
            

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

