import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import UploadIcon from "../../assets/upload-icon.jpeg";
import { axiosReq } from '../../api/axiosDefaults'

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Alert, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function PostEditForm() {

    const [errors, setErrors] = useState({});

    const [categories, setCategories] = useState();

    const [formDetail, setFormDetail] = useState({
        title: "",
        category: "",
        content: "",
        image: ""
    })

    const { title, category, content, image } = formDetail;

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/${id}/`);
            const { title, category, content, image, is_owner } = data;
            console.log(title, category, content, image, is_owner);
    
            is_owner ? setFormDetail({ title, category, content, image }) : history.push("/");
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);

    const handleChange = (e) => {
        setFormDetail({
            ...formDetail,
            [e.target.name]: e.target.value
        })
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setFormDetail({
                ...formDetail,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleCategoryChange = (event) => {
        setFormDetail({
          ...formDetail,
          category : event.target.value,
        })
      }

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: categories }] = await Promise.all([
                    axiosReq.get('/categories/')
                ])
                setCategories(categories.results)
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("category", category);
        formData.append("content", content);

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };


    const textFields = (
        <div className="text-center">
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange} />
                </Form.Group>
                {errors?.title?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        as="select"
                        value={category}
                        name="category"
                        onChange={handleCategoryChange}>
                        <option value="" disabled>Select Category</option>
                        {categories?.map((categoryObj) => (
                            <option key={categoryObj.id} value={categoryObj.id}>
                                {categoryObj.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                {errors?.categories?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        rows={6}
                        value={content}
                        onChange={handleChange} />
                </Form.Group>
                {errors?.content?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form>



            <Button
                className={`${btnStyles.Button}`}
                onClick={() => history.goBack()}
                variant="success"
            >
                cancel
            </Button>
            <Button
                className={`${btnStyles.Button}`}
                type="submit"
                variant="success">
                edit
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                            htmlFor="image-upload"
                                        >
                                            Change the image
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className={`${appStyles.Pointer} d-flex justify-content-center`}
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={UploadIcon}
                                        height={250}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}

                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}


export default PostEditForm;