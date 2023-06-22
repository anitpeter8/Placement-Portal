import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../css/Navbar.css'
import { useContext } from "react";
import { userStudent } from '../../context/userStudentContext';
import { UserAuth } from '../../context/authcontext';

const Navbar = () => {

  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user, dispatchRoleStudent } = authcontext;
 
  const {dispatchstudent } = useContext(userStudent);
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
                  
                  localStorage.removeItem('studentuser')
                  localStorage.removeItem('roleuser')
                  dispatchRoleStudent({ type: "LOGOUT"});
                  dispatchstudent({ type: "REMOVEUSER"});}
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
