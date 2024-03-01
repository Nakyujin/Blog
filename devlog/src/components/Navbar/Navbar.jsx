import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className={styles.navbarroot}>
      <ul className={styles.navbar}>
        <li><Link to="/" className={styles.navbarItem}>Home</Link></li>
        <li><Link to="/Gameideas" className={styles.navbarItem}>Game Ideas</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/Account" className={styles.navbarItem}>Account</Link></li>
            <li><Link to="/Write" className={styles.navbarItem}>Create Post</Link></li>
            <li><button onClick={handleLogout} className={styles.navbarItem}>Logout</button></li>
          </>
        )}
        {!isLoggedIn && <li><Link to="/Account" className={styles.navbarItem}>Login</Link></li>}
        <li className={styles.navbarItemRight}><Link to="/" className={styles.navbarItem}>Language</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
