import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const currentUserContext = createContext();
export const setCurrentUserContext = createContext();


export const useCurrentUser = () => useContext(currentUserContext);
export const useSetCurrentUser = () => useContext(setCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null)

    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get('/dj-rest-auth/user/')
            setCurrentUser(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleMount()
    }, []);

    useMemo(() => {
        axiosReq.interceptors.request.use(
            async (config) => {
                try {
                    await axios.post('/dj-rest-auth/token/refresh/')
                } catch (err) {
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push('/signin')
                        }
                        return null
                    })
                    return config
                }
                return config
            },
            (err) => {
                return Promise.reject(err);
            }
        )

        axiosRes.interceptors.response.use(
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

    return (
        <currentUserContext.Provider value={currentUser}>
            <setCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </setCurrentUserContext.Provider>
        </currentUserContext.Provider>
    )
}