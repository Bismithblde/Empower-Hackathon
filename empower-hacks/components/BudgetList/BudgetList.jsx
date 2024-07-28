import React from 'react';
import BudgetCard from '../BudgetCard/BudgetCard';
import './BudgetList.css';

const BudgetList = ({ budgetsArray }) => {
  return (
    <div className='budget-list-container'>
      {budgetsArray && budgetsArray.map((budget, index) => (
        <div key={index} className='budget-card-container'>
          <BudgetCard budget={budget} />
        </div>
      ))}
    </div>
  );
};

export default BudgetList;