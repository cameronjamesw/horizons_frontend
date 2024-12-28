import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

/* Create a category data context to allow category data to be accessed throughout the app */

//  Contexts and hooks
export const categoryContext = createContext();
export const setCategoryContext = createContext();
export const useCategoryContext = () => useContext(categoryContext);
export const useSetCategoryContext = () => useContext(setCategoryContext);

/**
 * Provider to give context to children
 */
export const CategoryProvider = ({ children }) => {
  // Gets current user
  const currentUser = useCurrentUser();

  // Sets the category state
  const [category, setCategory] = useState({
    clickedCategory: { results: [] },
    popularCategories: { results: [] }
  });
  const pathname = useLocation();

  useEffect(() => {
    const handleMount = async () => {
      try {
        // Fetches categories in order of post count
        const { data } = await axiosReq.get(
          "/categories/?ordering=-posts_count"
        );

        // Updates categories with new state of popularcategories
        setCategory((prevState) => ({
          ...prevState,
          popularCategories: data,
        }));
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [currentUser, pathname]);

  // Return providers for children to subscribe to
  return (
    <categoryContext.Provider value={category}>
      <setCategoryContext.Provider value={setCategory}>
        {children}
      </setCategoryContext.Provider>
    </categoryContext.Provider>
  )
}

