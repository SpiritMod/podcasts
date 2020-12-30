//core
import React from "react";

//styles
import styles from "./styles/styles.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_wrapper}>
        <div className={styles.sound1}/>
        <div className={styles.sound2}/>
        <div className={styles.sound3}/>
        <div className={styles.sound4}/>
        <div className={styles.sound5}/>
        <div className={styles.sound6}/>
        <div className={styles.sound7}/>
        <div className={styles.sound8}/>
        <div className={styles.sound9}/>
      </div>
    </div>
  )
}

export default Loader;
