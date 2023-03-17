import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import LogOut from './Components/LogOutPage/LogOut';
import SignUp from './Components/SignPage/SignUp';
// import NavBar from './Components/Welcome';
import Home from "./Components/HomePage/Home"
import Dash from './Components/DashBoard/Dash';
import BookList from './Components/DashBoard/BookList';
import Issue from './Components/DashBoard/Issue';
import Register from './Components/DashBoard/Register';
import Return from './Components/DashBoard/Return';
import { useState } from 'react';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar/> */}
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/LogOut" element={<LogOut/>} />
            <Route path="/Dash" element={<Dash/>} />
            <Route path="/BookList" element={<BookList/>} /> 
            <Route path="/Issue" element={<Issue/>} /> 
            <Route path="/Register" element={<Register/>} /> 
            <Route path="/Return" element={<Return/>} />   
         </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
