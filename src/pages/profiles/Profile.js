import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

/**
 * This function renders the profile component for the user
 */
const Profile = (props) => {
  // Destructure props
  const { profile, mobile, imageSize = 55 } = props;

  // Destructure profile
  const { id, following_id, image, owner } = profile;

  // Sets current user
  const currentUser = useCurrentUser();

  // Determines if the current user is the owner of the profile
  const is_owner = currentUser?.username === owner;

  // Destructures the useSetProfileData object
  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.DarkGreen}`}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Green}`}
              onClick={() => handleFollow(profile)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;