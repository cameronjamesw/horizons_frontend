
import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import SignUpImg from '../../assets/SignUpImg.webp'

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Sign Up</h1>

                    <Form className={styles.Form}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Username"
                            name="username"
                            className={styles.Input} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Enter Password"
                            name="password1"
                            className={styles.Input} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            name="password2"
                            className={styles.Input} />
                        </Form.Group>


                        <Button variant="success" type="submit">
                            Sign Up
                        </Button>
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
