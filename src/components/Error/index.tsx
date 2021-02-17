//core
import React from 'react';

//styles
import classes from './styles/styles.module.scss';

import img from '../../assets/images/error.svg';

interface IError {
  message?: string
}

const Error = (props:IError) => {
  return (
    <div className={classes.error}>
      <div className={classes.error__content}>
        <div className={classes.error__image}>
          <img src={img} alt="img"/>
        </div>
        <div className={classes.error__description}>{props.message}</div>
      </div>
    </div>
  );
};


export default Error;
