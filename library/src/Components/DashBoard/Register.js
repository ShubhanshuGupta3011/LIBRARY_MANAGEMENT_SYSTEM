import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const navigate = useNavigate();
  const [Firstname,Setfirstname] = useState('');
  const [Lastname,Setlastname] = useState('');
  const [Email,Setemail] = useState('');
  const [Number,Setnumber] = useState('');

  const Solve1 = () => {
    if(Firstname.length === 0){
        alert("Please_Enter_Your_First_Name");
        navigate("/Register");
        return ;
    }
    else if(Lastname.length === 0){
        alert("Please_Enter_Your_Last_Name");
        navigate("/Register");
        return ;
    }
    else if(Number.length !== 10){
        alert("Invalid_number");
        navigate("/Register");
        return ;
    }
    else if(!Email.includes("@gmail.com")){
        alert("Have_domain_of_gmail_only");
        navigate("/Register");
        return ;
    }
    else{
        /*
        Api call to generate unique_Id for this student
        suppose already register then display Registion_Already_Done
        post man code over here 
        */ 
        
        alert("User_Register_Successfully");
        navigate("/Dash");
    }
  }

  const checkfirst = (event) =>{
    Setfirstname(event.target.value);
  }
  const checklast = (event) =>{
    Setlastname(event.target.value);
  }
  const checkmail = (event) =>{
    Setemail(event.target.value);
  }
  const checknumber = (event) =>{
    Setnumber(event.target.value);
  }

  return (
    <>
      <div style={{
      border:'1px',
      height:'100vh',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      background:'beige'
      }}>

        <form style={{
            backgroundColor:'white',
            border:'1px solid black',
            borderRadius:'7px',
            boxShadow:'1px 2px 13px 0px',
            height:'50vh',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

         <div style={{margin:'1vh'}}>
         <label style={{marginRight:'2vw'}}> First_Name </label>
         <input type='text' onChange={checkfirst} style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

         <div style={{margin:'1vh'}}>
          <label style={{marginRight:'2vw'}}> Last_Name </label>
          <input type='text' onChange={checklast} style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

         
         <div style={{margin:'1vh'}}>
          <label style={{marginRight:'2vw'}}> E-Mail </label>
          <input type='text' onChange={checkmail} style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

          
         <div style={{margin:'1vh'}}>
          <label style={{marginRight:'2vw'}}> Mobile_Number </label>
          <input type='text' onChange={checknumber} style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

         <button type="submit" onClick={Solve1} style={{
            margin:'2vh 1.1vw',
            background:'#008000',
            border:'1px solid rgb(62,59,59)',
            borderRadius:'7px',
            fontSize: '0.9rem',
            padding: '5px',
            fontWeight: '500',
            color:'white'
         }}>Register User</button>
        </form>

      </div>
    </>
  )
}
