import React from 'react';
import cat from '../../assets/images/crying-cat.png';
import styles from './ErrorNotification.module.scss';
const ErrorNotification = (): JSX.Element => {
  return (
    <div className={styles.errorWrapper}>
      <img className={styles.errorImg} src={cat} alt="crying cat" />
      <div>
        Incorrect city
        <br />
        Try again.
      </div>
    </div>
  );
};

export default ErrorNotification;
