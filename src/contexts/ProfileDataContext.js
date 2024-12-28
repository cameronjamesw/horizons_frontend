import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

/* Code in this file adapted from the Code Institute 'Moments' React walkthrough project.
Create a profile data context to allow profile details to be accessed throughout the app */

//  Contexts and hooks
export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

/**
 * Provider to give context to children
 */
export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  // Gets current user
  const currentUser = useCurrentUser();

  /**
   * Handles the follow request, takes the clicked
   * profile as a parameter
   */
  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  /**
   * Handles the unfollow request, takes the clicked profile
   * as a parameter
   */
  const handleUnfollow = async (clickedProfile) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  // Return providers for children to subscribe to
  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{ setProfileData, handleFollow, handleUnfollow }}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  )
}