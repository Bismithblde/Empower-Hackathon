import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BudgetCard from '../../../components/BudgetCard/BudgetCard';
import { BudgetCardContext } from '../../../contexts/BudgetCardContext';
import './BudgetCardOverview.css';
import DoughnutChart from '../../../components/DoughnutChart/DoughnutChart';
import { v4 as uuidv4 } from 'uuid';

export default function BudgetCardOverview() {
  const { id } = useParams();
  const { setBudgetArray, budgetsArray } = useContext(BudgetCardContext);
  const budget = budgetsArray.find(b => b.id === id);

  if (!budget) {
    return <div>Budget not found</div>;
  }

  return (
    <div className='budget-overview-container'>
      <div className='budget-card-overview-container'>
        <h1 style={{ fontSize: 50 }} className='pixelify-sans-normal'>
          Budget Name: {budget.name}
        </h1>
        <h3 style={{ fontSize: 35 }} className='pixelify-sans-normal'>
          Budget Amount: ${budget.budgetValue}
        </h3>
        <h3 style={{ fontSize: 35 }} className='pixelify-sans-normal'>
          Current Spending: ${budget.totalExpense}
        </h3>
        <DoughnutChart percentage={(budget.totalExpense / budget.budgetValue) * 100} />
      </div>
      <div className='history-overview-container'>
        <h1 className='pixelify-sans-normal'>History:</h1>
        {budget.expenses.map((expense, index) => (
          <div key={uuidv4()}>
            <h2 className='pixelify-sans-normal'>
              {index+1}. Expense Name: {expense.expenseName}
            </h2>
            <h2 className='pixelify-sans-normal'>
              Amount: ${expense.expenseValue}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}