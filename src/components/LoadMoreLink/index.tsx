//core
import React from "react";

//styles
import styles from "./styles/styles.module.scss";

//types
interface ILoadMoreLink  {
  label?: string,
  action?: any
}

const LoadMoreLink: React.FC<ILoadMoreLink>  = ({label= 'Больше', action}) => {

  const handleClick: React.MouseEventHandler<HTMLElement> = (e): void => {
    e.preventDefault();
    action();
  };

  return  (
    <div className={styles.more} onClick={(e) => handleClick(e)}>
      <span className={styles.more_text}>{label}</span>
      <span className={`${styles.more_icon} icon-arrow-longer-right`} />
    </div>
  )
};

export default LoadMoreLink;

