import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Return() {
  
  const navigate = useNavigate();
  const [bookId,setBookId] = useState('');
  const [studentId,setStudentId] = useState('');
  const ReturnbookHandler = () => {
    /*
    if both field are valid just earse the data from issue table and update the count of book
    */ 
    if(!studentId.includes("INT")){
      alert("Wrong student ID");
      navigate("/Return");
      return ;
    }
    if(!bookId.includes("BOOK")){
      alert("Wrong Book ID");
      navigate("/Return");
      return ;
    }
    else{
      alert("Book Return Succesfully !")
      navigate("/Dash");
      return ;
    }
  }

  const checkbook = (event) =>{
    setBookId(event.target.value);
  }
  const checkstudent = (event) =>{
    setStudentId(event.target.value);
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
            height:'35vh',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

         <div style={{margin:'1vh'}}>
         <label style={{marginRight:'2vw'}}> Enter_Unique_id </label>
         <input type='text' onChange={checkstudent} style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

         <div style={{margin:'1vh'}}>
          <label style={{marginRight:'2vw'}}> Enter_Book_id </label>
          <input type='text' onChange={checkbook} style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

         <button type="submit" onClick={ReturnbookHandler} style={{
            margin:'2vh 1.1vw',
            background:'#008000',
            border:'1px solid rgb(62,59,59)',
            borderRadius:'7px',
            fontSize: '1rem',
            padding: '5px',
            fontWeight: '500',
            color:'white'
         }}>Return</button>
        </form>

      </div>
    </>


  )
}
