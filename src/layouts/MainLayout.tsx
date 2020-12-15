//Core
import React from 'react';

// Components
import Header from '../components/Header';

// styles
import classes from "./styles/MainLayout.module.scss";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.MainLayout}>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
};

export default MainLayout;

