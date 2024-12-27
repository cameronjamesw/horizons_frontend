import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

export const categoryContext = createContext();
export const setCategoryContext = createContext();

export const useCategoryContext = () => useContext(categoryContext);
export const useSetCategoryContext = () => useContext(setCategoryContext);

export const CategoryProvider = ({ children }) => {
    const currentUser = useCurrentUser();
    const [category, setCategory] = useState({
        clickedCategory: {results: []},
        popularCategories: {results: []}
    });
    console.log(category);

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(
              "/categories/?ordering=-posts_count"
            );
            setCategory((prevState) => ({
              ...prevState,
              popularCategories: data,
            }));
          } catch (err) {
            console.log(err);
          }
        };
        handleMount();
      }, [currentUser]);

    return (
        <categoryContext.Provider value={category}>
            <setCategoryContext.Provider value={setCategory}>
                { children }
            </setCategoryContext.Provider>
        </categoryContext.Provider>
    )
}

