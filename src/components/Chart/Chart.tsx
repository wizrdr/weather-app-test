import React from 'react';

import { useSelector } from 'react-redux';
import {
  InitialStateType,
  selectWeekForecast,
} from '../../store/reducers/reducers';

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import CustomTooltip from './nested/CustomTooltip';

import styles from './Chart.module.scss';

const Chart = (): JSX.Element => {
  const store = useSelector((state: InitialStateType) =>
    selectWeekForecast(state),
  );

  return (
    <div className={styles.barChartWrapper}>
      <BarChart
        width={500}
        height={300}
        data={store}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="temperature" fill="#C5E5DE" />
      </BarChart>
    </div>
  );
};

export default Chart;
