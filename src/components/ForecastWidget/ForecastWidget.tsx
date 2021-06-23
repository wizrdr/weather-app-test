import React from 'react';
import { useSelector } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Chart from '../Chart/Chart';

import styles from './ForecastWidget.module.scss';
import { AppRootStateType } from '../../store/store';

const ForecastWidget = (): JSX.Element => {
  const store = useSelector((state: AppRootStateType) => state);

  const { weekForecast, cityError } = store;

  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <h3 className={styles.logo}>Forecast App</h3>
      {weekForecast && <Chart />}
      {cityError && <ErrorNotification />}
    </div>
  );
};

export default ForecastWidget;
