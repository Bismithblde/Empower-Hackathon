import React, { useEffect, useState } from 'react'
import './BudgetInput.css'
import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useAchievements } from '../../contexts/AchievementsContext';
import { useAnimationContext } from '../../contexts/AnimationContext';

export default function BudgetInput( {addBudget, budgetArray}) {
  const [name, setName] = useState("");
  const [budgetValue, setBudgetValue] = useState("")
  const { addAchievement } = useAchievements();
  const { triggerAnimation } = useAnimationContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (budgetArray.find(b => b.name === name)) {
      alert("You added a budget with the same name as another one.")
      return;
    }
    addBudget({name: name, id: uuidv4(), budgetValue: budgetValue, expenses: [], totalExpense: 0})
    setName("")
    setBudgetValue("")
    console.log("Submitted")

    const newAchievement = {
      name: 'First Budget Created',
      description: 'Awarded for creating your first budget.',
      image: "/ribbon1.PNG",
      animationTriggered: false,
      dateEarned: new Date().toISOString()
    }
    addAchievement(newAchievement);

  }
  


  return (
    
    <div className='budget-input-container'>
        <form className='budget-input-form' onSubmit={handleSubmit}>
            <label className='title-label pixelify-sans-normal' >Create Budget</label>
            <label className='input-label pixelify-sans-normal'>Budget Name</label>
            <input type='text' placeholder='e.g. Groceries' className='budget-input pixelify-sans-normal' onChange={(e) => setName(e.target.value)} value={name}></input>
            <label className='input-label pixelify-sans-normal'>Amount</label>
            <input type='number' placeholder='$100' className='budget-input pixelify-sans-normal' onChange={(e) => setBudgetValue(e.target.value)} value={budgetValue}></input>
            <button className='budget-input-button pixelify-sans-normal' type='submit'>Submit</button>
            
        </form> 
    </div>

  )
}
