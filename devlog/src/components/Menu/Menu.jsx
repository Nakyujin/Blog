import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get('http://localhost:8800/Posts',);
        setPosts(res.data);
        console.log("data retrieved!")
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div>
      <div className={styles.postscontainer} >
        {posts.map((post) => (

          <div key={post.id} className={styles.postid}>
            <div className = {styles.dateandtags}>
              <div className={styles.date}>{post.date}</div>
              <div className = {styles.tags}>{post.tag}</div>
            </div>
            <Link to={`/post/${post.id}`} className={styles.posttitle}>
            <h1>{post.title}</h1>
            <h2>{post.menusubtitle}</h2>
            </Link>
            
            <div className={styles.readmore}>
              <Link
                to={`/post/${post.id}` } className={styles.readmoretext}
              >
                Read more
              </Link>
            </div><hr className={styles.divbar}/>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Menu;
