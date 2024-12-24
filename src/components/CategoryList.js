import React, { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';


const CategoryList = () => {
    const [categories, setCategories] = useState();

    const categoriesList = categories?.map((category) => {
        return <option value={category.id} key={category.id}>{category.id} - {category.name}</option>
    })

    

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: categories }] = await Promise.all([
                    axiosReq.get('/categories/')
                ])
                
                const catObject = {};

                categories.results.map((category, idx) => {
                    return catObject[idx] = [category.name, category.id]
                })

                console.log(catObject);

                setCategories(categories.results)
            } catch (err) {
                console.log(err)
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