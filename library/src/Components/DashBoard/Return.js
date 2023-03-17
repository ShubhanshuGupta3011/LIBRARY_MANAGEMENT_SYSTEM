import React from 'react'

export default function Return() {
  const ReturnbookHandler = () => {
    /*
    if both field are valid just earse the data from issue table and update the count of book
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
            height:'35vh',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

         <div style={{margin:'1vh'}}>
         <label style={{marginRight:'2vw'}}> Enter_Unique_id </label>
         <input type='text' style={{
            outline:'none',
            fontSize:'0.8rem',
            color: 'black',
            border: '1px solid rgb(213, 213, 213);',
            borderRadius: '7px'
         }}></input>
         </div>

         <div style={{margin:'1vh'}}>
          <label style={{marginRight:'2vw'}}> Enter_Book_id </label>
          <input type='text' style={{
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
