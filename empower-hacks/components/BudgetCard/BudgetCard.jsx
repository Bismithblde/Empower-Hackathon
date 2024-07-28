import React, { useState } from 'react'
import DoughnutChart from '../DoughnutChart/DoughnutChart'

export default function BudgetCard( {budget} ) {
  const [budgetValue, setBudgetValue] = useState(budget.budgetValue)
  const [spending, setSpending] = useState(0)
  

  return (
    <div className='budget-card'>
        <h1>Budget Name: {budget.name}</h1>
        <h3>Budget Amount: ${budget.budgetValue}</h3>
        {}
        <h3>Current Spending: ${budget.totalExpense}</h3>
        <DoughnutChart percentage={(budget.totalExpense/budget.budgetValue)*100}/>
    </div>
  )
}
