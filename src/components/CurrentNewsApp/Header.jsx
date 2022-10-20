import React, { useState } from "react";
import { NavLink } from "react-router-dom"
export function Header() {
  const [toggle, setToggle] = useState(true);
  if (toggle) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  let showdate = new Date();
  let dispalytodaydate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  let dt = showdate.toDateString();

  return (
    <div>
      <div className="Main_Head_Bar">
        <div className="Header_Logo">
          {/* <i class="fa fa-desktop" aria-hidden="true"></i> */}
          <img  className="Header_Logo" src="/RajeshLogo.jpeg" alt ="image"/>
        </div>
        <h1 className="Name_Logo">Current_News</h1>
        <div className="Search_Btn_Header">
          <input
            className="Search_Input_Box"
            type="text"
            placeholder="Search"
          />
          <button className="News_Search_Btn">
            {" "}
            <i class="fa fa-search" aria-hidden="true"></i>Search
          </button>
        </div>
        <div>
          <h4 className="Header_Current_Date">{dt}</h4>
        </div>
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
        </div>
      </div>
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
                <i class="fa fa-user" aria-hidden="true"></i>Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      //{" "}
    </div>
  );
}

//   .get(`https://jsonplaceholder.typicode.com/comments`)
