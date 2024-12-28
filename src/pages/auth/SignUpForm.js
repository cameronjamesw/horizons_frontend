import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRedirect } from "../../hooks/useRedirect";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import SignUpImg from '../../assets/SignUpImg.webp'
import axios from "axios";

/**
 * This function handles the signup data. Valid data is posted
 * to the relevent endpoint. Invalid forms will bounce.
 */
const SignUpForm = () => {
    // Redirects authenticated users if they try to access this component.
    useRedirect('loggedIn');

    // Sets signup data
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    // Destructure sign up data
    const { username, password1, password2 } = signUpData;

    // Sets errors
    const [errors, setErrors] = useState({});

    const history = useHistory();

    /**
     * This function handles the change of the signup
     * form data. Takes an event as the parameter.
     */
    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    /**
     * This function handles the submittion of the signup
     * form. It takes an event sa the parameter. Posts
     * the data to the relevent end point and creates a
     * user instance on the backend.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign up</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Button
                            type="submit"
                            variant="success"
                        >
                            Sign up
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>

                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={SignUpImg}
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;