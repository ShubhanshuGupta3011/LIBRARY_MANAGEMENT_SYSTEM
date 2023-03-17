import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"


export default function Login() {
  const [newpassword,Setnewpassword] = useState('');
  const navigate = useNavigate();

  const  SubmitHandler = () => {

    /*
    https:127.0.0.1:8080/login
    */ 

    if(  newpassword === localStorage.getItem("password")){
    alert("logged in")
    navigate("/Dash");
    }else{
      alert("Incorrect_Pattern_password")
    }

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MCwiUm9sZSI6IiIsImV4cCI6MTY3OTA3MDM1MH0.fkntX9qo60J1EC-M6QJR3aYCNL0hmk-Y-nJfBmQwNo0");

var raw = JSON.stringify({
  "Password": "@iu690@y?,.343"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8080/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  
  const checkpassword = (event) => {
    Setnewpassword(event.target.value)
  }

  return (
    <>
      <div className='login-container'>

        <form className='login-form'>

         <div className='login-form-group'>
          <label className='login-form-label'> Password </label>
          <input type='password' className='login-form-control' onChange={checkpassword} required/>
         </div>
      
         <div className='login-form-buttons'>
         <button type='submit' onClick={SubmitHandler}>Submit</button>
         </div>

        </form>

      </div>
    </>
  )
}
