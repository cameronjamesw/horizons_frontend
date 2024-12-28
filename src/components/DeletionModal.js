import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import styles from "../styles/MoreDropdown.module.css"

/**
 *  DeletionModal will show upon being called, confirming
 * if the user wants to delete the data clicked. Accetps props
 * of handleDelete and dropDown
 */
function DeletionModal(props) {
    // State of the modal, default is false
    const [show, setShow] = useState(false);

    // Destructure the props
    const { handleDelete, dropDown } = props

    /**
     *  This function closes the modal
     */
    const handleClose = () => setShow(false);

    /**
     * This function opens the modal
     */
    const handleShow = () => setShow(true);

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

