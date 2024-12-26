import { createContext, useContext, useState } from "react";

export const categoryContext = createContext();
export const setCategoryContext = createContext();

export const useCategoryContext = () => useContext(categoryContext);
export const useSetCategoryContext = () => useContext(setCategoryContext);

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState({});
    console.log(category);

    return (
        <categoryContext.Provider value={category}>
            <setCategoryContext.Provider value={setCategory}>
                { children }
            </setCategoryContext.Provider>
        </categoryContext.Provider>
    )
}

