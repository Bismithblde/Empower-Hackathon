import React, { useState } from 'react';
import BudgetCard from '../BudgetCard/BudgetCard';
import './BudgetList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Fuse from 'fuse.js';

const BudgetList = ({ budgetsArray, setBudgetArray }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fuse = new Fuse(budgetsArray, {
    keys: ['name'], 
    includeScore: true,
  });

  const filteredBudgets = searchTerm
    ? fuse.search(searchTerm).map(result => result.item)
    : budgetsArray;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
      type="text"
      placeholder="Search budgets..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="search-input"
        />
      <div className='budget-list-container'>
        <TransitionGroup component={null}>
          {filteredBudgets.map((budget) => (
            <CSSTransition key={budget.id} timeout={500} classNames="fade">
              <div className='budget-card-container'>
                <BudgetCard budget={budget} setBudgetArray={setBudgetArray} budgetArray={filteredBudgets}/>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default BudgetList;