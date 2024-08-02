import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvidor } from '../contexts/AuthContext.jsx'
import { AchievementsProvider } from '../contexts/AchievementsContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthContextProvidor>
      <AchievementsProvider>
          <App />
      </AchievementsProvider>
    </AuthContextProvidor>
    

  </React.StrictMode>,
)
