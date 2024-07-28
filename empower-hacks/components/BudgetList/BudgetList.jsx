import React from 'react';
import ProgressCircle from '../ProgressCircle/ProgressCircle';
import DoughnutChart from '../DoughnutChart/DoughnutChart';
import BudgetCard from '../BudgetCard/BudgetCard';

const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 70 },
  { label: 'C', value: 50 },
  { label: 'D', value: 40 },
  { label: 'E', value: 20 }
];

const BudgetList = ({ budgetArray }) => {
  return (
    <div>
      {budgetArray && budgetArray.map((budget, index) => (
        
        <div key={index} className='budget-list-container'>
          <BudgetCard budget={budget} />
        </div>
        
      ))}
    </div>
  );
};

export default BudgetList;