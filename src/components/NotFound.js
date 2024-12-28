import React from 'react'
import NoResults from "../assets/resetti.png"
import styles from "../styles/NotFound.module.css"
import Asset from './Asset'

/**
 * This function displays an image and message when
 * the user enters a URL that doesn't exist. Uses the Asset
 * component to render this.
 */
const NotFound = () => {
  return (
    <div className={styles.Margin}>
        <Asset 
        src={NoResults} 
        message={"We're sorry, this page does not exist.."}
        height={300}/>
    </div>
  )
}

export default NotFound