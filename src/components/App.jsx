import React from 'react'
import {BrowserRouter as Router,Outlet,Routes,Route} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import About from './Pages/About'
import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import ErrorPage from './Pages/Error'
import Footer from './layouts/Footer'
import {GithubProvider} from '../context/githubContext'
import { AlertProvider } from '../context/AlertContext'
import User from './Pages/User'
function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
    <Routes>
        <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/users/:login' element={<User />} />
        <Route path='*' element={<ErrorPage />} />
    </Route>
    </Routes>
    </Router>
    </AlertProvider>
    </GithubProvider>
  )      
}

function AppLayout(){
  return (
    <>
    <Navbar />
    <Outlet />
    
    </>
    
  )
}
export default App