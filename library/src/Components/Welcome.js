import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate()

  return (
  <>
  <div className="nav">
  <nav className="navbar navbar-expand-lg-light navbar bg-light">
  <a className="navbar-brand"  href="#" onClick={()=>navigate("/")}>handyLibrary</a>
  
  <button type="button" class="btn btn-primary mx-3 my-3" onClick={()=>navigate("/")}>Home <span className="sr-only">(current)</span></button>
  <button type="button" class="btn btn-primary mx-3 my-3" onClick={()=>navigate("/Login")} >Login</button>
  {/* <button type="button" class="btn btn-primary mx-3 my-3" onClick={()=>navigate("/SignUp")}>SignUp</button> */}
  {/* <button type="button" class="btn btn-primary mx-3 my-3" onClick={()=>navigate("/LogOut")}>LogOut</button>    */}
  </nav>
  </div>
  </>
  );
}
