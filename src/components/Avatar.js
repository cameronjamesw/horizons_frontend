import React from "react";
import styles from "../styles/Avatar.module.css";

/** Renders the Avatar component.
 * Accepts src, height and text as parameters.
 * Height will default to 45 if no parameter is passed. 
 */
const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;