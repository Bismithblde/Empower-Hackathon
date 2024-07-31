import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BudgetTracker from './pages/BudgetTracker.jsx';
import BudgetCardOverview from './pages/BudgetCardOverview/BudgetCardOverview.jsx';
import { BudgetCardContext } from '../contexts/BudgetCardContext.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx';
import CreateAccount from './pages/CreateAccount/CreateAccount.jsx';
function App() {
  const [budgetsArray, setBudgetArray] = useState([]);

  return (
    <>
    <Navbar/>
    <BudgetCardContext.Provider value={{ budgetsArray, setBudgetArray }}>
      <Routes>
        <Route path='/budget' element={<BudgetTracker />} />
        <Route path='/budget/:id' element={<BudgetCardOverview />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
      </Routes>
    </BudgetCardContext.Provider>
    </>

  );
}

export default App;