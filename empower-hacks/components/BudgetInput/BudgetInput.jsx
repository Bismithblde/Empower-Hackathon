import React from 'react'
import './BudgetInput.css'
export default function BudgetInput() {
  return (
    
    <div className='budget-input-container'>
        <form className='budget-input-form'>
            <label className='title-label'>Create Budget</label>
            <label className='input-label'>Budget Name</label>
            <input type='text' placeholder='e.g. Groceries' className='budget-input'></input>
            <label className='input-label '>Amount</label>
            <input type='number' placeholder='$100' className='budget-input'></input>
            <button className='budget-input-button'>Submit</button>
        </form> 
    </div>

  )
}
