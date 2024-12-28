import React from 'react'
import { useCategoryContext, useSetCategoryContext } from '../../contexts/CategoryContext';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { CategoryEditDropdown } from '../../components/MoreDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import appStyles from "../../App.module.css"
import styles from "../../styles/PopularCategories.module.css"
import Asset from '../../components/Asset';

/**
 * This function displays the popular categories
 * to the user. Takes mobile as a prop.
 */
const PopularCategories = ({ mobile }) => {
    // Calls categoryContext hook to retrieve current categories
    const { popularCategories } = useCategoryContext();

    // Calls the useSetCategory hook to update the current categories
    const setCategory = useSetCategoryContext();

    // Gets the current user
    const currentUser = useCurrentUser();

    return (
        <Container className={`mt-5 ${appStyles.Content}`} >
            {popularCategories.results.length ? (
                <>
                    <p>Popular Categories</p>
                    {mobile ? (
                        <> </>
                    ) : (
                        popularCategories.results.map((category) => (
                            <>
                            <div className={`${styles.BorderBottom} d-flex p-2`}>
                                { currentUser?.is_admin ? (
                                    <div><CategoryEditDropdown key={category.id} id={category.id}/></div>
                                ) : (
                                    <></>
                                )}
                                <div><Link 
                                to={`/categories/${category.id}/`} 
                                className={styles.Link} 
                                key={category.id}
                                onClick={() => setCategory((prevState) => ({
                                    ...prevState,
                                    clickedCategory: { results: [category] },
                                }))}>
                                    {category.name}</Link></div>
                                <div className='ml-auto'><p >No. Posts: {category.posts_count}</p></div>
                            </div>
                            </>
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    )
}

export default PopularCategories