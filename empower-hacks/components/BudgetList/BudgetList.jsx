import React from 'react';
import BudgetCard from '../BudgetCard/BudgetCard';
import './BudgetList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const BudgetList = ({ budgetsArray, setBudgetArray }) => {
  return (
    <div className='budget-list-container'>
      <TransitionGroup component={null}>
        {budgetsArray && budgetsArray.map((budget) => (
          <CSSTransition key={budget.id} timeout={500} classNames="fade">
            <div className='budget-card-container'>
              <BudgetCard budget={budget} setBudgetArray={setBudgetArray} budgetArray={budgetsArray}/>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default BudgetList;
