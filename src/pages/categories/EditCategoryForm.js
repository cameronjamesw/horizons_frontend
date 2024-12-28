import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Alert, Button, Col, Row, Container } from "react-bootstrap";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import DeletionModal from "../../components/DeletionModal";

/**
 * This function renders the EditCategoryForm and displays
 * the predefined information to the user editing.
 */
function EditCategoryForm() {
    // Gets the current user
    const currentUser = useCurrentUser();

    // Determines if current user is an admin
    const is_admin = currentUser.is_admin

    // Sets category name
    const [categoryName, setCategoryName] = useState({
        name: ""
    });

    // Sets the errors
    const [errors, setErrors] = useState({})

    // Destructures the category name
    const { name } = categoryName;

    const history = useHistory();

    // Gets the ID of the category from the URL by using useParams
    const { id } = useParams();

    // Fetches relevent category data on mount
    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/categories/${id}/`);

                // Destructures data and gets the name prop
                const { name } = data;

                // If the user is an admin, the setCategory state and form will be updated
                is_admin ? setCategoryName({ name }) : history.push("/");
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
        // useEffect takes history, is_admin and id as parameters
    }, [history, is_admin, id]);


    /**
     * Handles the category nmae change, takes an event
     * as a parameter.
     */
    const handleChange = (e) => {
        setCategoryName({
            ...categoryName,
            [e.target.name]: e.target.value
        })
    };

    /**
     * This funtion handles the deletion of the category. Will delete
     * the category based on ID at the relevent endpoint. Will
     * redirect the user with goBack upon deletion.
     */
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/categories/${id}/`);
            history.goBack();
        } catch (err) {
            // console.log(err);
        }
    };

    /**
     * This function handles the submit of the updated
     * category form. Takes an event as a parameter.
     */
    const handleSubmit = async (e) => {
        // Default behaviour is prevented
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', name)
        try {
            await axiosReq.put(`/categories/${id}/`, formData);
            history.push('/');
        } catch (err) {
            // console.log(err)
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }

    }

    return (
        <Row className={styles.Row}>
            <Col className="my-5 p-0 p-md-2" xs={10} lg={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Edit Category</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label className="d-none">Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category name.."
                                name="name"
                                value={name}
                                onChange={handleChange}
                                className={styles.Input}
                            />
                        </Form.Group>
                        {errors?.name?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <div>
                            <Button
                                variant="success"
                                type="submit"
                                className="mx-2"
                            >
                                Edit
                            </Button>
                            <DeletionModal
                            handleDelete={handleDelete} />
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row>
    )
}

export default EditCategoryForm