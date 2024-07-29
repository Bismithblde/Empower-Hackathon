import React, { useState } from 'react'
import './BudgetInput.css'
import { Button } from '@mui/material';
export default function BudgetInput( {addBudget, budgetArray}) {
  const [name, setName] = useState("");
  const [budgetValue, setBudgetValue] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (budgetArray.find(b => b.name === name)) {
      alert("You added a budget with the same name as another one.")
      return;
    }
    addBudget({name: name, id: budgetArray.length+1, budgetValue: budgetValue, expenses: [], totalExpense: 0})
    console.log("Submitted")
  }
  return (
    
    <div className='budget-input-container'>
        <form className='budget-input-form' onSubmit={handleSubmit}>
            <label className='title-label pixelify-sans-normal' >Create Budget</label>
            <label className='input-label pixelify-sans-normal'>Budget Name</label>
            <input type='text' placeholder='e.g. Groceries' className='budget-input pixelify-sans-normal' onChange={(e) => setName(e.target.value)}></input>
            <label className='input-label pixelify-sans-normal'>Amount</label>
            <input type='number' placeholder='$100' className='budget-input pixelify-sans-normal' onChange={(e) => setBudgetValue(e.target.value)}></input>
            <button className='budget-input-button pixelify-sans-normal' type='submit'>Submit</button>
            
        </form> 
    </div>

  )
}
