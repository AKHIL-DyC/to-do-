import React from "react";
import styles from './page.module.css'
export default function page(){
    return(
        <div className={styles.main}>
        <form className={styles.form}>
            <input className={styles.input}
            type="text"
            placeholder="Title"
            />

            <input className={styles.des}
            type="text"
            placeholder="Discription"
            />
            <button className={styles.button}>ADD</button>
        </form>
        </div>
    );
}

