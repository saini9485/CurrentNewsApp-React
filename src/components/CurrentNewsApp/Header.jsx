import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
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
            <Link to="/" className="nav-links">Headline</Link>
          </li>
          <li>
            <Link to="/Home" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="About" className="nav-links">About</Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    //  </div>
  );
}
