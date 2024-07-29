import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetInput from '../components/BudgetInput/BudgetInput'
import ExpensesInput from '../components/ExpensesInput/ExpensesInput'
import BudgetList from '../components/BudgetList/BudgetList'
import BudgetTracker from './BudgetTracker'
import { Route, Routes } from 'react-router-dom'
import BudgetCardOverview from './BudgetCardOverview'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/budget' element={<BudgetTracker />} />
        <Route path='/budget/:id' element={<BudgetCardOverview />}/>
      </Routes>
    </>

  )
}

export default App
