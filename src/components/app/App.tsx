import React from 'react';
import ForecastWidget from '../ForecastWidget/ForecastWidget';
import styles from './App.module.scss';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <ForecastWidget />
    </div>
  );
}

export default App;
