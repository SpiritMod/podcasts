//core
import React from "react";

//styles
import styles from './styles/styles.module.scss';

const Sort: React.FC = () => {

  return (
      <div className={styles.sort}>
          <div className={styles.text} >Сначала новые</div>
          <div className={styles.nav}>
              <div className={`${styles.icon} ${styles.active}`}>
                  <span className="icon-arrow-short-right"/>
              </div>
              <div className={styles.icon}>
                  <span className="icon-arrow-short-left"/>
              </div>
          </div>
      </div>
  )
};

export default Sort;
