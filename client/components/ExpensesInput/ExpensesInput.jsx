import React, { useState } from 'react';
import './ExpensesInput.css';
import { v4 as uuidv4 } from 'uuid';

export default function ExpensesInput({ budgetsArray, setBudgetArray }) {
  const [selectedBudget, setSelectedBudget] = useState({ name: '', expenses: [], totalExpense: 0 });
  const [expenseValue, setExpenseValue] = useState('');
  const [expenseName, setExpenseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpenses = [...selectedBudget.expenses, { expenseName: expenseName, expenseValue: Number(expenseValue), id: uuidv4() }];
    const updatedTotalExpense = selectedBudget.totalExpense + Number(expenseValue);

    if (updatedTotalExpense > selectedBudget.budgetValue) {
      alert(`You have exceeded your maximum budget for ${selectedBudget.name}`);
      return; 
    }

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
    setExpenseValue(''); // clear
  };

  const handleBudgetChange = (e) => {
    const budgetName = e.target.value;
    const budget = budgetsArray.find(b => b.name === budgetName);
    if (budget) {
      setSelectedBudget(budget);
    }
  };

  return (
    <div className='expenses-input-container pixelify-sans-normal'>
      <form className='expenses-input-form' onSubmit={handleSubmit}>
        <label className='title-label '>Add a new expense</label>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
            <label className='input-label'>Select a Budget</label>
            <select className='expenses-dropdown pixelify-sans-normal' onChange={handleBudgetChange} value={selectedBudget.name}>
              <option value=''>Select a budget</option>
              {budgetsArray.map((budget, index) => (
                <option key={budget.id} value={budget.name}>{budget.name}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
            <label className='input-label'>Amount</label>
            <input
              type='number'
              placeholder='$7'
              className='expenses-input pixelify-sans-normal'
              value={expenseValue}
              onChange={(e) => setExpenseValue(e.target.value)}
            />
          </div>
        </div>
        <label className='input-label'>Expense Name</label>
        <input
          type='text'
          placeholder='e.g. 7/27/2024: Coffee'
          className='expenses-input pixelify-sans-normal'
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <button className='expenses-input-button pixelify-sans-normal' type='submit'>Submit</button>
      </form>
    </div>
  );
}
