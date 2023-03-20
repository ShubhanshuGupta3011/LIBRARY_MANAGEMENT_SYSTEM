import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
// import cookie from "react-cookie";


export default function Login() {
  const [newpassword,Setnewpassword] = useState('');
  const navigate = useNavigate();

  const  submitHandler = (e) => {
    const value = e.target.value
    e.preventDefault();
    console.log("fdasdas");
   
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MCwiUm9sZSI6IiIsImV4cCI6MTY3OTMyMzgyMX0.YrKkFFeB_B-b9h9_i914ezXE388VFXX4rOCun_f2XmE");

  var raw = JSON.stringify({
    "Password": `${newpassword}`
  })
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8080/login", requestOptions)
  .then(response => response.text())
  .then(result => {
      const res = JSON.parse(result);
      if(res && res.Success) {
      alert("Login Successfull");
      navigate("/dash") 
      }else{
        alert("wrong Credenial");
      }
    }
  )

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
         <button type='submit' onClick={(e) => submitHandler(e)}>Submit</button>
         </div>

        </form>

      </div>
    </>
  )
}
