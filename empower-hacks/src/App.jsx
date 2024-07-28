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

  const findAndSetBudgetArray = (budget) => {
    const index = budgetsArray.findIndex(b => b.name === budget.name)
    if (index !== -1) {
      const updatedArray = [...budgetsArray]
      updatedArray[index] = budget
      setBudgetArray(updatedArray)
      console.log(updatedArray)
    }
  }
  return (
    <div className='main-container'>
      <div className='forms-container'>
        <BudgetInput addBudget={addBudget}/>
        <ExpensesInput budgetsArray={budgetsArray} setBudgetArray={setBudgetArray}/>
      </div>
      <div className='budgetList-container'>
        <BudgetList budgetArray={budgetsArray}/>
      </div>
    </div>

  )
}

export default App
