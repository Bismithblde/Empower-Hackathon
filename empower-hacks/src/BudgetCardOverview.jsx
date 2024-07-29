import React from 'react'
import { useParams } from 'react-router-dom'
import BudgetCard from '../components/BudgetCard/BudgetCard';

export default function BudgetCardOverview( {budgetArray} ) {
  const { id } = useParams();
  return (
    <div>
        <BudgetCard ></BudgetCard>
    </div>
  )
}
