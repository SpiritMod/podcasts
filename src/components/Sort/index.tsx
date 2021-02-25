//core
import React from "react";

//styles
import styles from './styles/styles.module.scss';

interface ISort {
  sort: boolean,
  handler: (sort: boolean) => void
}

const Sort: React.FC<ISort> = ({ sort, handler }) => {

  const handleSortNew: React.MouseEventHandler<HTMLElement> = (e): void => {
    e.preventDefault();
    !sort && handler(true);
  };

  const handleSortOld: React.MouseEventHandler<HTMLElement> = (e): void => {
    e.preventDefault();
    sort && handler(false);
  };

  return (
      <div className={styles.sort}>
          <div className={styles.text} >Сначала новые</div>
          <div className={styles.nav}>
              <div className={`${styles.icon} ${sort && styles.active}`} onClick={(e) => handleSortNew(e)}>
                  <span className="icon-arrow-short-right"/>
              </div>
              <div className={`${styles.icon} ${!sort && styles.active}`} onClick={(e) => handleSortOld(e)}>
                  <span className="icon-arrow-short-left"/>
              </div>
          </div>
      </div>
  )
};

export default Sort;
