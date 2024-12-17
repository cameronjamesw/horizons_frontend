
import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";

import SignUpImg from '../../assets/SignUpImg.webp'

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});

    const { username, password1, password2 } = signUpData;

    const history = useHistory();

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData)
            history.push('/signin')
        } catch (err) {
            setErrors(err.response?.data);
        }
    }

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Sign Up</h1>

                    <Form className={styles.Form} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                className={styles.Input} />
                        </Form.Group>
                        {errors.username?.map((message, idx) => {
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        })}

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                                className={styles.Input} />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => {
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        })}

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                                className={styles.Input} />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => {
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        })}


                        <Button variant="success" type="submit">
                            Sign Up
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
                md={6} lg={4}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={
                        SignUpImg
                    }
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;
