import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BudgetTracker from './pages/BudgetTracker.jsx';
import BudgetCardOverview from './pages/BudgetCardOverview/BudgetCardOverview.jsx';
import { BudgetCardContext } from '../contexts/BudgetCardContext.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx';
import CreateAccount from './pages/CreateAccount/CreateAccount.jsx';
import { BrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile/Profile.jsx'
import BlogCreator from './pages/BlogCreator/BlogCreator.jsx'
import BlogHub from './pages/BlogHub/BlogHub.jsx'
import Blog from './pages/Blog/Blog.jsx';
function App() {
  const [budgetsArray, setBudgetArray] = useState([]);

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <BudgetCardContext.Provider value={{ budgetsArray, setBudgetArray }}>
        <Routes>
          <Route path='/budget' element={<BudgetTracker />} />
          <Route path='/budget/:id' element={<BudgetCardOverview />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/blog-creator' element={<BlogCreator />}/>
          <Route path='/blog-hub' element={<BlogHub />}/>
          <Route path='/blog-hub/blogs/:id' element={<Blog />}/>
          <Route path='/blog-hub/scholarships/:id' element={<Blog />}/>



        </Routes>
      </BudgetCardContext.Provider>
    </BrowserRouter>

    </>

  );
}

export default App;