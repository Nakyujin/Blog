import React from 'react'
import styles from "./GameIdeas.module.css"
import { Link } from 'react-router-dom';

export const GameIdeas = () => {
  return (
    
    <div className={styles.container}> 
        <Link to={`/`}
            className = {styles.backlink}>
                back to home
        </Link>
        <div className={styles.postnotif}>
        My GameIdea pdfs and and pptx documents will be posted on here once I make a few. Currently they are only in Japanese.
        </div>
    </div>   
  )
}
