import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Dash() {
    const navigate = useNavigate();
    const outdb = () => {
        alert("Admin logOut")
        navigate("/")
      }
  return (
    <>
    <div style={{backgroundColor:'beige',height:570,width:1260}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
        <input type="text" placeholder="Search..."></input>
        <button type="text" class="btn btn-primary mx-3 my-3" >Search_book_Name</button> 
        <input type="text" placeholder="Search..." ></input>
        <button type="text" class="btn btn-primary mx-3 my-3">Search_Category</button> 
        </div>
        <button type="button" class="btn btn-danger mx-3 my-3" style={{width:150}} onClick={outdb}><marquee direction="right"> LogOut </marquee></button>
        </div>
        <div> <button type="button" class="btn btn-warning mx-3 my-3" style={{width:150,height:96}} onClick={()=>{navigate("/Register")}}>  Register_User </button> </div> 
        <div> <button type="button" class="btn btn-success mx-3 my-3" style={{width:150,height:96}} onClick={()=>{navigate("/Issue")}}>  Issued_book  </button>     </div> 
        <div> <button type="button" class="btn btn-info mx-3 my-3" style={{width:150,height:96}} onClick={()=>{navigate("/Return")}}>  Returned_book  </button>     </div> 
        <div> <button type="button" class="btn btn-dark mx-3 my-3" style={{width:150,height:96}} onClick={()=>{navigate("/BookList")}}>  Lists_of_books  </button>  </div> 
    </div>
    </>
  )
}
