import React from 'react'
import './ExpensesInput.css'
export default function ExpensesInput() {
  return (
    <div className='expenses-input-container'>
    <form className='expenses-input-form'>

        <label className='title-label'>Add a new expense</label>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "column", width: "30%"}}>
                <label className='input-label'> Select a Budget</label>
                <select className='expenses-dropdown'>
                    <option>Test</option>
                </select>
            </div>

            <div style={{display: "flex", flexDirection: "column", width: "65%"}}>
                <label className='input-label '>Amount</label>
                <input type='number' placeholder='$5' className='expenses-input'></input>
            </div>
        </div>
        <label className='input-label'>Expense Name</label>
        <input type='text' placeholder='e.g. 7/27/2024: Coffee' className='budget-input'></input>


        <button className='expenses-input-button'>Submit</button>
    </form> 
</div>
  )
}
