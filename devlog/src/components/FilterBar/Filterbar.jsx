import React, { useState } from "react";
import styles from "./Filterbar.module.css";

export const Filterbar = () => {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(open => !open);
    }

    return (
    
        <div className={styles.filterbar}>
            <div className={styles.filterbartext}>Set filters : </div>
            <button className = {styles.filterbutton} onClick={handleClick}>Filters</button>

            <div className={`${styles.dropdownmenu} ${open && styles.dropdownmenuclosed}`}>
                <h3 className={styles.filterbartitle}>Select Categories</h3>
                <div className={styles.filterbarcontainer}>
                    <ul className={styles.filterbaritems}>tag1, tag2, tag3
                    </ul>
                </div>
                <div className = {styles.applyfiltercontainer}><button>Apply filters</button><button>Reset Filters</button></div>
            
            </div>
        </div>
    )
}
