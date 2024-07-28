import React, { useState } from 'react'
import './BudgetInput.css'
export default function BudgetInput( {addBudget}) {
  const [name, setName] = useState("");
  const [budgetValue, setBudgetValue] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget({name: name, budgetValue: budgetValue})
    console.log("Submitted")
  }
  return (
    
    <div className='budget-input-container'>
        <form className='budget-input-form' onSubmit={handleSubmit}>
            <label className='title-label'>Create Budget</label>
            <label className='input-label'>Budget Name</label>
            <input type='text' placeholder='e.g. Groceries' className='budget-input' onChange={(e) => setName(e.target.value)}></input>
            <label className='input-label '>Amount</label>
            <input type='number' placeholder='$100' className='budget-input' onChange={(e) => setBudgetValue(e.target.value)}></input>
            <button className='budget-input-button' type='submit'>Submit</button>
        </form> 
    </div>

  )
}
