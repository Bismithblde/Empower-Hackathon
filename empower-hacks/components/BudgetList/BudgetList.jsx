import React from 'react';
import BudgetCard from '../BudgetCard/BudgetCard';
import './BudgetList.css';
import { v4 as uuidv4 } from 'uuid';

const BudgetList = ({ budgetsArray, setBudgetArray }) => {
  return (
    <div className='budget-list-container'>
      {budgetsArray && budgetsArray.map((budget, index) => (
        <div key={uuidv4()} className='budget-card-container'>
          <BudgetCard budget={budget} setBudgetArray={setBudgetArray} budgetArray={budgetsArray}/>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;