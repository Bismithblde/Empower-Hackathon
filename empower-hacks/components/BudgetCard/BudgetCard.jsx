import React from 'react';
import DoughnutChart from '../DoughnutChart/DoughnutChart';
import './BudgetCard.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import xmarker  from '../../src/assets/xmarker.png'



export default function BudgetCard({ budget, setBudgetArray, budgetArray}) {
  const handleClick = () => {
    
    const index = budgetArray.findIndex(b => b.name === budget.name);
  
    const newArray = [
      ...budgetArray.slice(0, index),
      ...budgetArray.slice(index + 1)
    ];
    
    setBudgetArray(newArray);
  };
  return (
    <div className='budget-card'>
            <button className='x-button' onClick={handleClick}>
      <img src="../../src/assets/xmarker.png" width={50} style={{marginRight: "4px", marginTop: "4px"}}/>
      </button> 
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