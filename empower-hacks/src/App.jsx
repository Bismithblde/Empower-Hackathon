import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetInput from '../components/BudgetInput/BudgetInput'
import ExpensesInput from '../components/ExpensesInput/ExpensesInput'

function App() {

  return (
    <div className='forms-container'>
      <BudgetInput />
      <ExpensesInput />
    </div>
    
  )
}

export default App
