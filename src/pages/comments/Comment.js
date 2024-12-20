import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

  return (
    <div>
      <hr />
      <Media className={styles.Media}>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
            <Link className={styles.Link} to={`/profiles/${profile_id}`}>
          <span className={styles.Owner} >{owner}</span>
          </Link>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;