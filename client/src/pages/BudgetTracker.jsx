import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import BudgetInput from '../../components/BudgetInput/BudgetInput';
import ExpensesInput from '../../components/ExpensesInput/ExpensesInput';
import BudgetList from '../../components/BudgetList/BudgetList';
import { useContext } from 'react';
import { BudgetCardContext } from '../../contexts/BudgetCardContext';
import useAuthContext from '../../src/hooks/useAuthContext'; 

function BudgetTracker() {
  const { setBudgetArray, budgetsArray } = useContext(BudgetCardContext);
  const { user } = useAuthContext(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return; 
    }

    const savedBudgets = localStorage.getItem('budgets');
    if (savedBudgets) {
      const parsedBudgets = JSON.parse(savedBudgets);
      if (Array.isArray(parsedBudgets)) {
        setBudgetArray(parsedBudgets);
      }
    }
  }, [user, navigate]); 

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
      <div className='tracker-title'>
        <h1>Budget Tracker</h1>
      </div>
      <div className='forms-container'>
        <BudgetInput addBudget={addBudget} budgetArray={budgetsArray} />
        <ExpensesInput budgetsArray={budgetsArray} setBudgetArray={setBudgetArray} />
      </div>
      <div className='budgetList-container'>
        <BudgetList budgetsArray={budgetsArray} setBudgetArray={setBudgetArray} />
      </div>
    </div>
  );
}

export default BudgetTracker;
