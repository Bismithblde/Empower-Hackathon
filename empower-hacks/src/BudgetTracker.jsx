import { useEffect, useState } from 'react';
import './App.css';
import BudgetInput from '../components/BudgetInput/BudgetInput';
import ExpensesInput from '../components/ExpensesInput/ExpensesInput';
import BudgetList from '../components/BudgetList/BudgetList';

function BudgetTracker() {
  const [budgetsArray, setBudgetArray] = useState([]);

  // Initialize budgetsArray from localStorage on component mount
  useEffect(() => {
    const savedBudgets = localStorage.getItem('budgets');
    if (savedBudgets) {
      const parsedBudgets = JSON.parse(savedBudgets);
      if (Array.isArray(parsedBudgets)) {
        setBudgetArray(parsedBudgets);
      }
    }
  }, []);

  // Save budgetsArray to localStorage whenever it changes
  useEffect(() => {
    if (budgetsArray.length > 0) {
      localStorage.setItem('budgets', JSON.stringify(budgetsArray));
    }
  }, [budgetsArray]);

  const addBudget = (budget) => {
    setBudgetArray([...budgetsArray, budget]);
  };



  return (
    <div className='main-container'>
      <div className='forms-container'>
        <BudgetInput addBudget={addBudget} budgetArray={budgetsArray}/>
        <ExpensesInput budgetsArray={budgetsArray} setBudgetArray={setBudgetArray} />
      </div>
      <div className='budgetList-container'>
        <BudgetList budgetsArray={budgetsArray} />
      </div>
    </div>
  );
}

export default BudgetTracker;
