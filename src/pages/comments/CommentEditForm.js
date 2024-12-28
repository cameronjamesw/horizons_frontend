import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import styles from "../../styles/CommentCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

/**
 * This function renders the CommentEditForm and posts the
 * data to the relevent endpoint upon submission.
 */
function CommentEditForm(props) {
  // Destructure props
  const {
    id,
    content,
    setShowEditForm,
    setComments
  } = props;

  // Sets formContent
  const [formContent, setFormContent] = useState(content);

  /**
   * This function handles the change of the comment
   * edit form and takes an event as a parameter.
   */
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  /**
   * This function handles the submission of the
   * comment edit form. It takes an event as parameter and 
   * posts data to the relevent endpoint.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
              ...comment,
              content: formContent.trim(),
              updated_at: "now",
            }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Label className="d-none">Edit Comment</Form.Label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;