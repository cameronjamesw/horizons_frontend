import React from 'react'
import NoResults from "../assets/resetti.png"
import styles from "../styles/NotFound.module.css"
import Asset from './Asset'

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