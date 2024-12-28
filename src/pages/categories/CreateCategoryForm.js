import React, { useState } from "react";
import { Form, Alert, Button, Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRedirect } from "../../hooks/useRedirect";

import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";

/**
 * This function creates a new category
 */
function CreateCategoryForm() {
    // Redirects unauthenticated users that try to access this URL
    useRedirect('loggedOut');

    // Sets category name
    const [categoryName, setCategoryName] = useState({
        name: ""
    });

    // Sets errors
    const [errors, setErrors] = useState({})

    // Destructures the category name
    const { name } = categoryName;
    const history = useHistory();

    /**
     * This function handles the change within the
     * category form, takes an event as a parameter.
     */
    const handleChange = (e) => {
        setCategoryName({
            ...categoryName,
            [e.target.name]: e.target.value
        })
    };

    /**
     * This function handles the submit of the create category
     * form. If data is valid then the form will submit to the categories
     * endpoint. User will be redirected to the home page upon submission.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', name)
        try {
            await axiosReq.post('/categories/', formData);
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
                    <h1 className={styles.Header}>Create Category</h1>
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

                        <Button
                            variant="success"
                            type="submit"
                        >
                            Create
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    )
}

export default CreateCategoryForm