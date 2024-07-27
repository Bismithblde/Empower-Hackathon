import React from 'react'
import './BudgetInput.css'
export default function BudgetInput() {
  return (
    
    <div className='budget-input-container'>
        <form className='budget-input-form'>
            <label className='title-label'>Create Budget</label>
            <label>Budget Name</label>
            <input type='text' placeholder='e.g. Groceries'></input>
            <label>Amount</label>
            <input type='number' placeholder='$100'></input>
        </form> 
    </div>

  )
}
