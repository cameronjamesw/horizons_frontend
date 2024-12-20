import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
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

    const currnetUser = useCurrentUser();
    const is_owner = currnetUser?.username === owner;

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
        <div>
            <hr />
            <Media className={styles.Media}>
                <Link to={`/profiles/${profile_id}/`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <Link className={styles.Link} to={`/profiles/${profile_id}/`}>
                        <span className={styles.Owner} >{owner}</span>
                    </Link>
                    <span className={styles.Date}>{updated_at}</span>
                    <p>{content}</p>
                </Media.Body>
                {is_owner && (
                    <MoreDropdown handleEdit={() => { }} handleDelete={handleDelete} />
                )}
            </Media>
        </div>
    );
};

export default Comment;