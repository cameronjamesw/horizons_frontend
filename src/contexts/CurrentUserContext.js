import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const currentUserContext = createContext();
export const setCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(currentUserContext);
export const useSetCurrentUser = () => useContext(setCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const handleMount = async () => {
        try {
            const { data } = await axios.get('/dj-rest-auth/user/')
            setCurrentUser(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleMount()
    }, [])

    return (
        <currentUserContext.Provider value={currentUser}>
            <setCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </setCurrentUserContext.Provider>
        </currentUserContext.Provider>
    )
}