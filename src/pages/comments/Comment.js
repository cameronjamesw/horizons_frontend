import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";

/**
 * This function creates the commend component
 */
const Comment = (props) => {
    // props are destructured
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        id,
        setPost,
        setComments,
    } = props;

    // Sets the state of the showEditForm
    const [showEditForm, setShowEditForm] = useState(false);

    // Gets current user
    const currnetUser = useCurrentUser();

    // Establish if current user is owner of comment
    const is_owner = currnetUser?.username === owner;

    // Establish if current user is an admin
    const is_admin = currnetUser?.is_admin;

    /**
     * Function handles the deletion of a comment posting
     * to the relevent end point. Then sets the post count
     * to the appropiate number after deletion.
     */
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) { }
    };

    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <Link className={styles.Link} to={`/profiles/${profile_id}/`}>
                        <span className={styles.Owner} >{owner}</span>
                    </Link>
                    <span className={styles.Date}>{updated_at}</span>
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {(is_owner || is_admin) && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Comment;