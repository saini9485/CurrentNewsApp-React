import React,{useState} from "react";
import { NavLink } from "react-router-dom";


export function Header() {  
const [toggle, setToggle] = useState(true);
if (toggle) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  return (
    <div>
      <div className="logo">
       <h1 className="Name"><i class="fa fa-desktop" aria-hidden="true"></i>Current_News</h1>
       </div>
<div className="Toggle-Area">
    {toggle ? (
      <button className="Dark-Btn" onClick={() => setToggle(!toggle)}>DARK THEME</button>
    ) : (
      <button className="Light-Btn" onClick={() => setToggle(!toggle)}>LIGHT THEME</button>
    )}
  </div>
        <div className="Header-Container">
            {/* <div>
           <h2>Current News</h2> 
           </div> */}
      {/* <div className="Head_Input_Area">
        <input type="text" placeholder="news" />
        <button className="btn">Search</button>
      </div> */}

      {/* <div className="NavBar_Icon"> */}
        <ul className="Nav_Icons">
          <li>
            <NavLink to="/" id="links" className={({isActive})=>(isActive?"active-link":"not-active")} end>Headline</NavLink>
          </li>
          <li>
            <NavLink to="/Home" id="links" className={({isActive})=>(isActive?"active-link":"not-active")} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="About" id="links" className={({isActive})=>(isActive?"active-link":"not-active")} end>About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" id="links" className={({isActive})=>(isActive?"active-link":"not-active")} end>Contact</NavLink>
          </li>
          <li> <NavLink to="/Login" id="links" className={({isActive})=>(isActive?"active-link":"not-active")} end>Login</NavLink></li>
        </ul>
      </div>
      </div>
    //  </div>
  );
}



//   .get(`https://jsonplaceholder.typicode.com/comments`) 