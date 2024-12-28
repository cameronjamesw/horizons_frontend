import React from 'react'
import styles from '../../styles/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import { favouriteHelper, unfavouriteHelper } from '../../utils/utils';

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        favourite_id,
        title,
        content,
        image,
        updated_at,
        postPage,
        setPosts,
        category,
        category_name,
    } = props;

    const currentUser = useCurrentUser();
    const { setProfileData } = useSetProfileData();

    const is_owner = currentUser?.username === owner;
    const is_admin = currentUser?.is_admin;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit/`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            // console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleFavourite = async () => {
        try {
            const { data } = await axiosRes.post("/favourites/", { post: id });
            setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: {
                      results: prevState.pageProfile.results.map((profile) =>
                        favouriteHelper(profile)
                      ),
                    },
                  }));
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, favourite_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err)
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleUnfavourite = async () => {
        try {
            await axiosRes.delete(`/favourites/${favourite_id}/`);
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                  results: prevState.pageProfile.results.map((profile) =>
                    unfavouriteHelper(profile)
                  ),
                },
              }));
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, favourite_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <Link to={`/profiles/${profile_id}/`} className={`${styles.Link}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}   
                    </Link>
                    { category ? (
                        <span><i className={`${styles.Cat} fa-solid fa-list`}/> {category_name}</span>
                    ) : ( "" )
                    }
                    <div className='d-flex align-items-center'>
                        <span>{updated_at}</span>
                        {(is_owner || is_admin) && postPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                        {favourite_id ? (
                            <span onClick={handleUnfavourite}>
                                <i className={`fa-solid fa-star ${styles.Star}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={handleFavourite}>
                                <i className={`fa-regular fa-star ${styles.StarOutline}`} />
                            </span>
                        ) : (
                            <span className='d-none'><i className={`fa-regular fa-star ${styles.StarOutline}`} /></span>
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}/`}>
                <Card.Img src={image} alt={title} className={`${styles.Image}`} />
            </Link>
            <Card.Body>
                {title && <Card.Title className='text-center'>{title}</Card.Title>}
                {content && <Card.Text>{content}</Card.Text>}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    
                        <span><i className="far fa-comments" /></span>
                    
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Post