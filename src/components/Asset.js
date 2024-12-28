import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/** Renders the asset component depending on what has been passed
 * through the parameters. Spinner will render the loading spinner
 * in place, src and height refer to image dimensions.
 */
const Asset = ({ spinner, src, message, height }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img height={height} src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;