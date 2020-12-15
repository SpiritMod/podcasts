//Core
import React from 'react';

//styles
import styles from './styles/styles.module.scss';

const SocialLinks: React.FC = () => (
  <div className={styles.social}>
    <a href="https://www.instagram.com/podcasts.pm/" className={styles.item} target="_blank" rel="noreferrer nofollow">
      <span className="icon-instagram"></span>
    </a>
  </div>
);

export default SocialLinks;