import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetInput from '../components/BudgetInput/BudgetInput'
import ExpensesInput from '../components/ExpensesInput/ExpensesInput'

function App() {
  const [budgetsArray, setBudgetArray] = useState([])
  const addBudget = (budget) => {
    setBudgetArray([...budgetsArray, budget])
  }
  return (
    <div className='forms-container'>
      <BudgetInput addBudget={addBudget}/>
      <ExpensesInput budgetsArray={budgetsArray}/>
    </div>
    
  )
}

export default App
