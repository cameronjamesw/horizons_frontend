import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Image } from "react-bootstrap";
import Post from "../posts/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/resetti.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    const [profilePosts, setProfilePosts] = useState({ results: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`),
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setProfilePosts(profilePosts);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner} {(profile?.name ? (
                        <> | Name: {profile?.name} </>) : (
                        <></>
                    ))}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.followers_count}</div>
                            <div>followers</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.following_count}</div>
                            <div>following</div>
                        </Col>
                        {is_owner && <Col xs={3} className="my-2">
                            <Link className={styles.Link} to={() => { }}>
                                <div>{profile?.favourites_count}</div>
                                <div>favourited</div>
                            </Link>
                        </Col>
                        }

                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    {currentUser &&
                        !is_owner &&
                        (profile?.following_id ? (
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
                </Col>
            </Row>
        </>
    );

    const profileDetails = (
        <>
            < hr />
            <Row noGutters className="px-3 text-center">
                <Col sm={5}>
                    <p className="text-left">Island Name:</p>
                    <p className={styles.DetailField}>{profile?.island_name}</p>
                </Col>
                <Col sm={5} className="ml-auto">
                    <p className="text-left">Friend Code:</p>
                    <p className={styles.DetailField}>{profile?.friend_code}</p>
                </Col>
            </Row>
            <Row noGutters className="px-3">
                <Col>
                    <div className="text-left">Bio:</div>
                    <div className={styles.DetailFieldBio}>{profile?.bio}</div>
                </Col>
            </Row>
        </>
    )

    const mainProfilePosts = (
        <>
            <hr />
            <p className={`${styles.PostsText} text-left`}>{profile?.owner}'s posts:</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Asset
                    src={NoResults}
                    height={250}
                    message={`No results found, ${profile?.owner} hasn't posted yet.`}
                />
            )}
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {(profile?.island_name
                                && profile?.friend_code ? (
                                profileDetails) : (
                                <></>
                            )
                            )}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default ProfilePage;