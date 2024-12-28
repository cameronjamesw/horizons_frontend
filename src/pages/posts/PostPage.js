import React, { useEffect, useState } from "react";
import {Col, Row, Container} from "react-bootstrap";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import PopularCategories from "../categories/PopularCategories";

/**
 * This function rendera the Post component
 */
function PostPage() {
  // Gets the id of the post from the url
  const { id } = useParams();

  // Sets post
  const [post, setPost] = useState({ results: [] });

  // Gets current user
  const currentUser = useCurrentUser();

  // Gets users' profile image
  const profile_image = currentUser?.profile_image;

  // Sets comments
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    /**
     * The handleMount fumction fetches the comment
     * and post data and then sets them accordingly
     */
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
            children={comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setPost={setPost}
                setComments={setComments}
              />
            ))}
            dataLength={comments.results.length}
            loader={<Asset spinner />}
            hasMore={!!comments.next}
            next={() => fetchMoreData(comments, setComments)}
          />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles/>
        <PopularCategories />
      </Col>
    </Row>
  );
}

export default PostPage;