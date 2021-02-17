//Core
import React from 'react';

// Components
import Header from '../components/Header';

// styles
import classes from "./styles/MainLayout.module.scss";

interface IMainLayout  {
  children?: React.ReactNode,
  vertical?: boolean,
}

const MainLayout: React.FC<IMainLayout> = (props) => {

  const cls = [classes.MainLayout];

  if (props.vertical) {
    cls.push(classes.MainLayout__vertical);
  }

  return (
    <>
      <Header />
      <main className={cls.join(' ')}>
        <div className="container">
          {props.children}
        </div>
      </main>
    </>
  )
};

export default MainLayout;

