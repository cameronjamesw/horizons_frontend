import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, InputGroup, Form } from "react-bootstrap";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

/**
 * This function renders the CommentCreateForm and posts
 * data to the relevent endpoint.
 */
function CommentCreateForm(props) {
    // Destructure props
    const {
        post,
        setPost,
        setComments,
        profileImage,
        profile_id
    } = props;

    // Sets the content of the comment
    const [content, setContent] = useState("");

    // Sets the errors
    const [errors, setErrors] = useState({})

    /**
     * This function handles the change in the comment
     * form and takes an event as a parameter
     */
    const handleChange = (event) => {
        setContent(event.target.value);
    };

    /**
     * This function handles the submittion of the
     * comment form and takes an event as a parameter
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/comments/", {
                content,
                post,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profileImage} />
                    </Link>
                    <Form.Label className="d-none">Create Comment</Form.Label>
                    <Form.Control
                        className={styles.Form}
                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <button
                className={`${styles.Button} d-block ml-auto`}
                disabled={!content.trim()}
                type="submit"
            >
                post
            </button>
        </Form>
    );
}

export default CommentCreateForm;