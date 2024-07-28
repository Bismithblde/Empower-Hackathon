import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetInput from '../components/BudgetInput/BudgetInput'
import ExpensesInput from '../components/ExpensesInput/ExpensesInput'
import BudgetList from '../components/BudgetList/BudgetList'

function App() {
  const [budgetsArray, setBudgetArray] = useState([])
  const addBudget = (budget) => {
    setBudgetArray([...budgetsArray, budget])
  }
  return (
    <div className='main-container'>
      <div className='forms-container'>
        <BudgetInput addBudget={addBudget}/>
        <ExpensesInput budgetsArray={budgetsArray}/>
      </div>
      <div className='budgetList-container'>
        <BudgetList budgetArray={budgetsArray}/>
      </div>
    </div>

  )
}

export default App
