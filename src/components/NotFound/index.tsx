//core
import React from "react";
import { Link } from "react-router-dom";

//components
import { book } from "../../navigation/book";

//styles
import classes from './styles/styles.module.scss';

const NotFound: React.FC = () => {
  return (
    <>
      <div className={classes.not_found}>
        <div className={classes.not_found__content}>
          <div className={classes.not_found__text}>Хмм...<br/> Страница не найдена</div>
          <div className={classes.not_found__error}>404</div>
          <div className={classes.not_found__action}>
            <Link className="c-btn" to={book.root}><span className="c-btn__text">На главную</span></Link>
          </div>
        </div>
      </div>
    </>
  )
};


export default NotFound;
