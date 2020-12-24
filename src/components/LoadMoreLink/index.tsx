//core
import React from "react";

//styles
import styles from "./styles/styles.module.scss";

//types
interface ILoadMoreLink  {
  label?: string
}

const LoadMoreLink: React.FC<ILoadMoreLink>  = ({label= 'Больше'}) => {
  return  (
    <div className={styles.more}>
      <span className={styles.more_text}>{label}</span>
      <span className={`${styles.more_icon} icon-arrow-longer-right`} />
    </div>
  )
};

export default LoadMoreLink;

