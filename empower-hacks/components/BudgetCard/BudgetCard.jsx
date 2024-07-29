import React from 'react';
import DoughnutChart from '../DoughnutChart/DoughnutChart';
import './BudgetCard.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';




export default function BudgetCard({ budget }) {
  return (
    <div className='budget-card'>
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
      <Link to={`/budget/${budget.id}`}> View Details</Link >
    </div>
  );
}