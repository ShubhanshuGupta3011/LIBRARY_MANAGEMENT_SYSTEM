import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"
import { useState } from 'react';

export default function SignUp() {
  const navigate = useNavigate();
  const [newmail,Setnewmail] = useState('');
  const [newpassword,Setnewpassword] = useState('');
 

  const  submitClickHandle = () => {
    if(newmail.includes("@gmail.com")>0 && newpassword.length>8 && newmail.length>10){
    localStorage.setItem("mail",newmail);
    localStorage.setItem("password",newpassword);
    alert("user register")
    navigate("/Dash");
    }else{
      alert("Incorrect_Pattern_of_mail_or_password")
    }
  }
  const checkmail = (event) => {
    Setnewmail(event.target.value)
  }
  const checkpassword = (event) => {
    Setnewpassword(event.target.value)
  }
  return (
    <>
      
      <div className='SignUp-container'>

        <form className='SignUp-form'>
          
         <div className='SignUp-form-group'>
          <label className='SignUp-form-label'> Email </label>
          <input type='text' className='SignUp-form-control'   onChange={checkmail}/>
         </div>

         <div className='SignUp-form-group'>
          <label className='SignUp-form-label'> Password </label>
          <input type='password' className='SignUp-form-control' onChange={checkpassword}/>
         </div>
   
        
         <div className='SignUp-form-buttons'>
         <button type='submit' onClick={submitClickHandle}>Submit</button>
         </div>

        </form>

      </div>
    </>
  );
}
