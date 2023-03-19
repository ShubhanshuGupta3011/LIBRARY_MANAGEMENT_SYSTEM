import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Issue() {
  const navigate = useNavigate();
  const [bookId,setBookId] = useState('');
  const [studentId,setStudentId] = useState('');
  const IssuebookHandle = () => {
    /*
    Api call 
    if inavlid student_id display Invalid_id
    if invalid book_id display Book_not_available or Wrong_book_id
    else both are valid just assign book to this user
    display book issued
    */ 
    if(!studentId.includes("INT")){
      alert("Wrong student ID");
      navigate("/Issue");
      return ;
    }
    if(!bookId.includes("BOOK")){
      alert("Wrong Book ID");
      navigate("/Issue");
      return ;
    }
    else{
      alert("Book Issued Succesfully !")
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
            height:'30vh',
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

         <button type="submit"  onClick={IssuebookHandle} style={{
            margin:'2vh 1.1vw',
            background:'#008000',
            border:'1px solid rgb(62,59,59)',
            borderRadius:'7px',
            fontSize: '0.9rem',
            padding: '5px',
            fontWeight: '500',
            color:'white'
         }}>Issued_book</button>
        </form>

      </div>
    </>
  )
}
