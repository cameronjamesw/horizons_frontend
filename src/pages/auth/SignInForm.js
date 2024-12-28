import React, { useState } from "react";

import { Form, Alert, Button, Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";
import { useRedirect } from "../../hooks/useRedirect";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import SignInImg from "../../assets/SignInImg.webp"
import axios from "axios";

/**
 * This function displays the signin form to the user.
 */
function SignInForm() {
    // Sets the current user
    const setCurrentUser = useSetCurrentUser();

    // Redirect logged in users to home page if they try to access this page
    useRedirect('loggedIn');

    // Sets signin data
    const [signInData, setSignInData] = useState({
        username: "",
        password: ""
    });

    // Destructure the signin data
    const { username, password } = signInData;

    // Sets the errors
    const [errors, setErrors] = useState({});

    const history = useHistory();

    /**
     * This function handles change within the signin form
     * Take the event as a parameter.
     */
    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value
        });
    }

    /**
     * This function handles the submit of the signin form.
     * Posts the data to the login endpoint and redirects the user
     * to the relevent page. Form bounces if any fields are incorrect.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('/dj-rest-auth/login/', signInData);
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.goBack();
        } catch (err) {
            setErrors(err.response?.data)
        }
    }

    return (
        <Row className={styles.Row}>
            <Col className="my-auto p-0 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign in</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                className={styles.Input}
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                className={styles.Input}
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Button
                            variant="success"
                            type="submit"
                        >
                            Sign in
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signup">
                        Don't have an account? <span>Sign up now!</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={SignInImg}
                />
            </Col>
        </Row>
    );
}

export default SignInForm;