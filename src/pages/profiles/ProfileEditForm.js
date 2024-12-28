import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, Image, Row, Col, Container, Alert } from "react-bootstrap";

import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

/**
 * This function renders the profile edit form
 */
const ProfileEditForm = () => {
    // Gets current user
    const currentUser = useCurrentUser();

    // Sets the current user
    const setCurrentUser = useSetCurrentUser();

    // Gets the profile id from the URL
    const { id } = useParams();

    const history = useHistory();
    const imageFile = useRef();

    // Sets the profile data
    const [profileData, setProfileData] = useState({
        name: "",
        island_name: "",
        friend_code: "",
        bio: "",
        image: "",
    });

    // Destructures the profileData
    const {
        name,
        island_name,
        friend_code,
        bio,
        image
    } = profileData;

    // Sets errors
    const [errors, setErrors] = useState({});

    useEffect(() => {
        /**
         * This function sets the profile data upon mount and then
         * prepopulates the form fields accordingly
         */
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const { name, island_name, friend_code, bio, image } = data;
                    setProfileData({ name, island_name, friend_code, bio, image });
                } catch (err) {
                    // console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };

        handleMount();
    }, [currentUser, history, id]);

    /**
     * This function handles the change of the profileEditForm
     * and takes an event as a parameter
     */
    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    /**
     * This function handles the submission of the
     * ProfileEditForm and posts data to the relevent
     * end point
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("island_name", island_name);
        formData.append("friend_code", friend_code);
        formData.append("bio", bio);

        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current?.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    // Renders the text fields 
    const textFields = (
        <>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={handleChange}
                    name="name"
                />
            </Form.Group>
            {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Island Name</Form.Label>
                <Form.Control
                    type="text"
                    value={island_name}
                    onChange={handleChange}
                    name="island_name"
                />
            </Form.Group>
            {errors?.island_name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Friend Code</Form.Label>
                <Form.Control
                    type="text"
                    value={friend_code}
                    onChange={handleChange}
                    name="friend_code"
                />
            </Form.Group>
            {errors?.friend_code?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as="textarea"
                    value={bio}
                    onChange={handleChange}
                    name="bio"
                    rows={7}
                />
            </Form.Group>
            {errors?.bio?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button
                className={`${btnStyles.Button} ${btnStyles.Green}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Green}`} type="submit">
                save
            </Button>
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container className={appStyles.Content}>
                        <Form.Group>
                            {image && (
                                <figure>
                                    <Image
                                        src={image}
                                        alt="image"
                                        fluid />
                                </figure>
                            )}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Green} btn my-auto`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfileData({
                                            ...profileData,
                                            image: URL.createObjectURL(e.target.files[0]),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
};

export default ProfileEditForm;