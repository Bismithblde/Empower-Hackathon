import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DoughnutChart = ({ percentage }) => {
  return (
    <div style={{height: 200, width: 200, paddingBottom: 30}}>
            <CircularProgressbar
      value={percentage}
      styles={buildStyles({
        rotation: 0.5,
        strokeLinecap: 'round',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    />
    </div>
  );
};

export default DoughnutChart;