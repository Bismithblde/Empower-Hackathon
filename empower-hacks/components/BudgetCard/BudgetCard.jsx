import React, { useState } from 'react'
import DoughnutChart from '../DoughnutChart/DoughnutChart'
export default function BudgetCard( {budget} ) {
  const [budgetValue, setBudgetValue] = useState(budget.budgetValue)
  const [spending, setSpending] = useState(0)
  const [expenses, setExpenses] = useState([{expense: "Coffee", price: "100"}])
  return (
    <div className='budget-card'>
        <h1>Budget Name: {budget.name}</h1>
        <h3>Budget Amount: ${budget.budgetValue}</h3>
        <DoughnutChart percentage={(spending/budgetValue)*100}/>
    </div>
  )
}
