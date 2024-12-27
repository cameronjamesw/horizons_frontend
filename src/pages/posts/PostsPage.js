import React, { useEffect, useState } from "react";

import {Form, Col, Row, Container} from "react-bootstrap";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import btnStyles from "../../styles/Button.module.css"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import Post from "./Post";

import NoResults from "../../assets/resetti.png"
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { Dropdown } from "react-bootstrap";
import { useSetCategoryContext } from "../../contexts/CategoryContext";
import PopularCategories from "../categories/PopularCategories";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [categories, setCategories] = useState();
  const setCategory = useSetCategoryContext();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, pathname, query]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: categories }] = await Promise.all([
          axiosReq.get('/categories/')
        ])
        setCategories(categories.results)
      } catch (err) {
        // console.log(err)
      }
    }
    handleMount();
  }, []);



  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <div className="d-flex">
          <Form
            className={`w-75 ${styles.SearchBar}`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search posts"
            />
          </Form>
          <Dropdown className="ml-auto">
            <Dropdown.Toggle id="dropdown-basic" className={`${btnStyles.CatButton} ${btnStyles.Green} btn-lg`}>
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.DropDown}>
              {categories?.map((categoryObj) => (
                <Dropdown.Item
                  className={styles.DropDownItem}
                  as={"button"}
                  key={categoryObj.id}
                  value={categoryObj.id}
                  onSelect={() => setCategory((prevState) => ({
                    ...prevState,
                    clickedCategory: { results: [categoryObj] },
                }))}>
                  <Link
                    to={`/categories/${categoryObj.id}/`}
                    className={styles.Link}>
                    {categoryObj.name}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={
                  posts.results.map((post) => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                  ))
                }
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} height={250} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
        <PopularCategories />
      </Col>
    </Row >
  );
}

export default PostsPage;