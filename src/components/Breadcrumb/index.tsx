//core
import React from 'react';
import { Link } from 'react-router-dom';

// routes
import { book } from '../../navigation/book';

// styles
import styles from './styles/styles.module.scss';

const Breadcrumb: React.FC = () => {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link to={book.root}>Главная</Link>
        </li>
        <li className={styles.item}>
          <Link to={book.podcast}>Еще подкаст</Link>
        </li>
        <li className={`${styles.item} ${styles.active}`} aria-current="page">Epizode #1</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
