import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvidor } from '../contexts/AuthContext.jsx'
import { AchievementProvider } from '../contexts/AchievementsContext.jsx'
import { AnimationProvider } from '../contexts/AnimationContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AnimationProvider>
    <AuthContextProvidor>
      <AchievementProvider>
          <App />
      </AchievementProvider>
    </AuthContextProvidor>
  </AnimationProvider >

  </React.StrictMode>,
)
