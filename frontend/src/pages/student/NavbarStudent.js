import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../css/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="menu">
            <NavLink
              className="head"
              activeClassName="active"
              to="/Student/Announcements"
            >
              {" "}
              Announcements{" "}
            </NavLink>
            <NavLink
              className="head"
              activeClassName="active"
              to="/Student/JobAlerts"
            >
              {" "}
              Job Alerts{" "}
            </NavLink>
            <NavLink
              className="head"
              activeClassName="active"
              to="/Student/MyProfile"
            >
              {" "}
              My Profile{" "}
            </NavLink>
            <NavLink
              className="head"
              activeClassName="active"
              to="/Student/Statistics"
            >
              {" "}
              Statistics{" "}
            </NavLink>
          </div>
          <div className="logout">
            <NavLink
              className="log"
              to="/"
              onClick={
                ()=>{
                  console.log('logout')
                  localStorage.removeItem("studentuser")}
                }
            >
              {" "}
              Logout{" "}
            </NavLink>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
