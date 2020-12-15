//Core
import React from 'react';
import { Link } from 'react-router-dom';

// components
import SocialLinks from '../SocialLinks';

// routes
import { book } from '../../navigation/book';

// styles
import styles from './styles/styles.module.scss';

// img
import logo from '../../assets/images/logo.svg';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <Link to={book.root} className={styles.logo}>
            <img src={logo} alt="Parimatch. Играют они – побеждаешь ты!"/>
          </Link>
          <SocialLinks />
        </div>
      </div>
    </header>
  )
};

export default Header;
