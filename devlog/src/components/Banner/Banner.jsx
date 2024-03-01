import React from 'react';
import styles from "./Banner.module.css";
import banner from "../Banner/bannerImage.png";

export const Banner = () => {
  return (
    <div className ={styles.banner}>
      <div className={styles.bannerImage}>
        <h1 className ={styles.bannerText}>Development Blog</h1>
      </div>
    </div>
  )
}
