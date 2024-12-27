import React from 'react'
import { useCategoryContext, useSetCategoryContext } from '../../contexts/CategoryContext';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css"
import styles from "../../styles/PopularCategories.module.css"
import Asset from '../../components/Asset';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PopularCategories = ({ mobile }) => {
    const { popularCategories } = useCategoryContext();
    const setCategory = useSetCategoryContext();

    return (
        <Container className={`mt-5 ${appStyles.Content}`} >
            {popularCategories.results.length ? (
                <>
                    <p>Popular Categories</p>
                    {mobile ? (
                        <> </>
                    ) : (
                        popularCategories.results.map((category) => (
                            <div className={`${styles.BorderBottom} d-flex p-2`}>
                                <Link 
                                to={`/categories/${category.id}/`} 
                                className={styles.Link} key={category.id}
                                onClick={() => setCategory((prevState) => ({
                                    ...prevState,
                                    clickedCategory: { results: [category] },
                                }))}>
                                    {category.name}</Link>
                                <p className='ml-auto'>No. Posts: {category.posts_count}</p>
                            </div>
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