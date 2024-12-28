import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { removeTokenTimestamp, shouldRefreshToken } from '../utils/utils';

/* Code in this file adapted from the Code Institute 'Moments' React walkthrough project.
Create a user context to allow user details to be accessed throughout the app, and setup
axios interceptors to refresh tokens. */

//  Contexts and hooks
export const currentUserContext = createContext();
export const setCurrentUserContext = createContext();
export const useCurrentUser = () => useContext(currentUserContext);
export const useSetCurrentUser = () => useContext(setCurrentUserContext);

/**
 * Provider to give context to children
 */
export const CurrentUserProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null)

  /**
   * Get current user details and set state
   */
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get('/dj-rest-auth/user/')
      setCurrentUser(data);
    } catch (err) {
      // console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, []);

  useMemo(() => {
    /**
   * Check tokens and refresh if needed before components mount
   */

    // Create request interceptor
    axiosReq.interceptors.request.use(

      // Check if there is a refresh token, if yes request a refresh. If error, redirect to sign-in page if
      // user was previously logged in.
      async (config) => {
        if (shouldRefreshToken()) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
            return config;
          }
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    // Create response interceptor
    axiosRes.interceptors.response.use(

      // If user not authorised, try to refresh token. If that doesn't work,
      // navigate back to sign-in page if the user was previously logged in.
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post('/dj-rest-auth/token/refresh/')
          } catch (err) {
            setCurrentUser(prevCurrentUser => {
              if (prevCurrentUser) {
                history.push('/signin')
              }
              return null
            })
          }
          return axios(err.config)
        }
        return Promise.reject(err)
      }
    )
  }, [history])

  // Return providers for children to subscribe to
  return (
    <currentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </setCurrentUserContext.Provider>
    </currentUserContext.Provider>
  )
}