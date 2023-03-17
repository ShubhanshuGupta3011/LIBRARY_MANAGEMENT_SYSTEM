import React from 'react'

export default function BookList() {
  const AddbookHandler = () => {
    /*
    if already exist then return Alreadyexist
    else add this book to list_of_book with unique id
    */ 
   
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
          height:'60vh',
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
      }}>

       <div style={{margin:'1vh'}}>
       <label style={{marginRight:'2vw'}}> Book_Name </label>
       <input type='text' style={{
          outline:'none',
          fontSize:'0.8rem',
          color: 'black',
          border: '1px solid rgb(213, 213, 213);',
          borderRadius: '7px'
       }}></input>
       </div>

       <div style={{margin:'1vh'}}>
        <label style={{marginRight:'2vw'}}> Author_Name </label>
        <input type='text' style={{
          outline:'none',
          fontSize:'0.8rem',
          color: 'black',
          border: '1px solid rgb(213, 213, 213);',
          borderRadius: '7px'
       }}></input>
       </div>

       
       <div style={{margin:'1vh'}}>
        <label style={{marginRight:'2vw'}}> Category_Name </label>
        <input type='text' style={{
          outline:'none',
          fontSize:'0.8rem',
          color: 'black',
          border: '1px solid rgb(213, 213, 213);',
          borderRadius: '7px'
       }}></input>
       </div>

        
       <div style={{margin:'1vh'}}>
        <label style={{marginRight:'2vw'}}> Details </label>
        <input type='text' style={{
          outline:'none',
          fontSize:'0.8rem',
          color: 'black',
          border: '1px solid rgb(213, 213, 213);',
          borderRadius: '7px'
       }}></input>
       </div>

       <div style={{margin:'1vh'}}>
        <label style={{marginRight:'2vw'}}> Stocks </label>
        <input type='text' style={{
          outline:'none',
          fontSize:'0.8rem',
          color: 'black',
          border: '1px solid rgb(213, 213, 213);',
          borderRadius: '7px'
       }}></input>
       </div>

       <div style={{margin:'1vh'}}>
        <label style={{marginRight:'2vw'}}> Price </label>
        <input type='text' style={{
          outline:'none',
          fontSize:'0.8rem',
          color: 'black',
          border: '1px solid rgb(213, 213, 213);',
          borderRadius: '7px'
       }}></input>
       </div>

       <button type="submit" onClick={AddbookHandler} style={{
          margin:'2vh 1.1vw',
          background:'#008000',
          border:'1px solid rgb(62,59,59)',
          borderRadius:'7px',
          fontSize: '0.9rem',
          padding: '5px',
          fontWeight: '500',
          color:'white'
       }}>Add_BOOK</button>
      </form>

    </div>
  </>

  )
}
