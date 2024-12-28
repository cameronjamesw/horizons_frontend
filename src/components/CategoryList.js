import React, { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';

/** Renders the list of categories by mapping
 * over the current categories fetched.
 * 
 */
const CategoryList = () => {
    // States for categories, updated upon each render.
    const [categories, setCategories] = useState();

    // CategoriesList variable maps out categories in readiness for select lists.
    const categoriesList = categories?.map((category) => {

        // Returns the category name along with the id and key
        return <option value={category.id} key={category.id}>{category.name}</option>
    })

    useEffect(() => {
        /**
         * Upon mount categories data is fetched, any new categories
         * created will now be fetched through this function.
         */
        const handleMount = async () => {
            try {
                const [{ data: categories }] = await Promise.all([
                    axiosReq.get('/categories/')
                ])
                
                // Empty catObject
                const catObject = {};
                
                // category results are mapped and then pushed to catObject
                categories.results.map((category, idx) => {
                    return catObject[idx] = [category.name, category.id]
                })

                // categories results update the setCategories state
                setCategories(categories.results)
            } catch (err) {
                // console.log(err)
            }
        }
        handleMount();
    }, [])

    return (
        <>
            {categoriesList}
        </>
    )
}

export default CategoryList