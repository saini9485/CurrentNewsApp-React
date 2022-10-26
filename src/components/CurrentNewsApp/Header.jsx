import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export function Header() {
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState("")
  if (toggle) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  

  return (
    <div>
      <div className="Main_Head_Bar">

        <div className="Header_Logo">
          {/* <i class="fa fa-desktop" aria-hidden="true"></i> */}
          <NavLink to ="/">
          <img className="Header_Logo" src="/RajeshLogo.jpeg" alt="image" />
          </NavLink>
        </div>
        {/* <NavLink to="/"> */}
       <h1 className="Name_Logo">
          <span className="News_Name">Current</span>_News
        </h1>
         {/* </NavLink> */}
        {/* <div className="Search_Btn_Header">
          <input
            className="Search_Input_Box"
            type="text"
            placeholder="Search"
          />
          <button className="News_Search_Btn">
            {" "}
            <i class="fa fa-search" aria-hidden="true"></i>Search
          </button>
        </div> */}
        <div>
        </div>
      </div>
      <nav className="navbar">
      <div className="Header-Container">
        <div className="NavBar_Icon">
          <ul className="Nav_Icons">
            <li>
              <NavLink
                to="/"
                id="links"
                className={({ isActive }) =>
                  isActive ? "active-link" : "not-active"
                }
                end
              >
                Headline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Home"
                id="links"
                className={({ isActive }) =>
                  isActive ? "active-link" : "not-active"
                }
                end
              >
                <i class="fa fa-home" aria-hidden="true"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="About"
                id="links"
                className={({ isActive }) =>
                  isActive ? "active-link" : "not-active"
                }
                end
              >
                <i class="fa fa-database" aria-hidden="true"></i>About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                id="links"
                className={({ isActive }) =>
                  isActive ? "active-link" : "not-active"
                }
                end
              >
                <i class="fa fa-phone" aria-hidden="true"></i>Contact
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/Login"
                id="links"
                className={({ isActive }) =>
                  isActive ? "active-link" : "not-active"
                }
                end
              >
                <i class="fa fa-user" aria-hidden="true"></i> {localStorage.getItem("Fullname")}
              </NavLink>
              
            </li>
            <div className="Toggle-Area">
          {toggle ? (
            <button className="Dark-Btn" onClick={() => setToggle(!toggle)}>
              <i className="fa fa-moon" aria-hidden="true"></i>
            </button>
          ) : (
            <button className="Light-Btn" onClick={() => setToggle(!toggle)}>
              <i className="fa fa-sun" aria-hidden="true"></i>
            </button>
          )}
          {/* <div style={{display:"flex"}}>
          <input></input>
          <button>Search</button>
          </div>*/}
        </div> 
          </ul>
        </div>
       
      </div>
       </nav>
  
    </div>
  );
}
