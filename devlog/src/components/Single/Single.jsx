import React, { useState, useEffect } from 'react';
import styles from './Single.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Single = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const postId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/Posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className={styles.container}>
      <div>
        <Link to={`/`} className={styles.backbtn}>
          {' '}
          back to home{' '}
        </Link>
      </div>
      <div className={styles.dateandtagcontainer}>
        Date: {post.date} Tags: {post.tag}
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.bodyimagecontainer}>
        <p className={styles.bodytext}>{post.bodytext}</p>
        {post.img && (
          <img className = {styles.postImg}
            src={`http://localhost:8800/Posts/images/${postId}`}
            alt="Image for post"
          />
        )}
      </div>
    </div>
  );
};
