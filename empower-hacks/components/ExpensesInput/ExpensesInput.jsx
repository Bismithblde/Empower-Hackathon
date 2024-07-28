import React, { useState } from 'react';
import './ExpensesInput.css';

export default function ExpensesInput({ budgetsArray, setBudgetArray }) {
  const [selectedBudget, setSelectedBudget] = useState({ name: '', expenses: [], totalExpense: 0 });
  const [expenseValue, setExpenseValue] = useState(0);
  const [expenseName, setExpenseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpenses = [...selectedBudget.expenses, { expenseName: expenseName, expenseValue: expenseValue }];
    
    const updatedTotalExpense = selectedBudget.totalExpense + expenseValue;

    const updatedBudget = {
      ...selectedBudget,
      expenses: updatedExpenses,
      totalExpense: updatedTotalExpense,
    };

    const updatedArray = budgetsArray.map(b => 
      b.name === selectedBudget.name ? updatedBudget : b
    );

    setBudgetArray(updatedArray);

    setSelectedBudget(updatedBudget);

    setExpenseName('');
    setExpenseValue(0);
  };

  const handleBudgetChange = (e) => {
    const budgetName = e.target.value;
    const budget = budgetsArray.find(b => b.name === budgetName);
    if (budget) {
      setSelectedBudget(budget);
    }
  };

  return (
    <div className='expenses-input-container'>
      <form className='expenses-input-form' onSubmit={handleSubmit}>
        <label className='title-label'>Add a new expense</label>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
            <label className='input-label'>Select a Budget</label>
            <select className='expenses-dropdown' onChange={handleBudgetChange} value={selectedBudget.name}>
              <option value=''>Select a budget</option>
              {budgetsArray.map((budget, index) => (
                <option key={index} value={budget.name}>{budget.name}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
            <label className='input-label'>Amount</label>
            <input
              type='number'
              placeholder='$5'
              className='expenses-input'
              value={expenseValue}
              onChange={(e) => setExpenseValue(Number(e.target.value))}
            />
          </div>
        </div>
        <label className='input-label'>Expense Name</label>
        <input
          type='text'
          placeholder='e.g. 7/27/2024: Coffee'
          className='budget-input'
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <button className='expenses-input-button' type='submit'>Submit</button>
      </form>
    </div>
  );
}
