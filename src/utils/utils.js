import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults"

/**
 * This function fetches more data when using
 * the infinite scroll component
 */
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
    // console.log(err)
  };
};

/**
 * This function updates the followers and
 * following count of the user profile provided 
 * within the parameters upon following a user
 * 
 * @param {*} profile 
 * @param {*} clickedProfile 
 * @param {*} following_id 
 * @returns 
 */
export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
    // update its followers count and set its following id
    {
      ...profile,
      followers_count: profile.followers_count + 1,
      following_id,
    }
    : profile.is_owner
      ? // This is the profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count + 1 }
      : // this is not the profile the user clicked on or the profile
      // the user owns, so just return it unchanged
      profile;
};

/**
 * This function updates the followers and
 * following count of the user profile provided 
 * within the parameters upon unfollowing a user
 * 
 * @param {*} profile 
 * @param {*} clickedProfile 
 * @returns 
 */
export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? {
      ...profile,
      followers_count: profile.followers_count - 1,
      following_id: null,
    }
    : profile.is_owner
      ? { ...profile, following_count: profile.following_count - 1 }
      : profile;
};

/**
 * This function updates the user's favourites count
 * upon favouriting a post
 * 
 * @param {*} profile 
 * @returns 
 */
export const favouriteHelper = (profile) => {
  return {
    ...profile,
    favourites_count: profile.favourites_count + 1
}
};

/**
 * This function updates the user's favourites count
 * upon unfavouriting a post
 * 
 * @param {*} profile 
 * @returns 
 */
export const unfavouriteHelper = (profile) => {
  return {
    ...profile,
    favourites_count: profile.favourites_count - 1
}
};

/**
 * Decode refresh token from API and save in local storage
 * @param {object} data Data returned from the API when the user logs in
 */
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

/**
 * Check if there is a refresh token
 * @returns boolean
 */
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

/**
 * Clean up local storage
 */
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};