import React, { FC } from 'react';

import styles from '../Chart.module.scss';

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    value: string;
  }[];
  label?: string;
}

const CustomTooltip: FC<CustomTooltipProps> = (props): JSX.Element | null => {
  const { active, payload, label } = props;
  if (active && payload?.length) {
    return (
      <div className={styles.customTooltip}>
        <p className="label">{`${label} : ${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
