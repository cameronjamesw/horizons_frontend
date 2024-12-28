import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";
import DeletionModal from "./DeletionModal";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

/**
 * MoreDropdown adds the dropdown to specific components and
 * allows the user to edit and delete certain components.
 * 
 * Accetps handleEdit and handleDelete as props.
 */
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className={`${styles.EditIcon} fas fa-edit`} />
        </Dropdown.Item>
        <Dropdown.Item className={styles.DropdownItem}>
          <DeletionModal
          handleDelete={handleDelete} dropDown />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/**
 * This function diplays the ProfileDropdown to the user
 * and takes the profile ID as a parameter.
 */
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

/**
 * The specific dropdown for editing categories. This
 * function takes the category ID as a parameter.
 */
export function CategoryEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/categories/${id}/edit/`)}
          aria-label="edit"
        >
          <i className={`${styles.EditIcon} fas fa-edit`} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}