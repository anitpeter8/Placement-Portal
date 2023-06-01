import React, { useContext } from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
import { UserAuth } from '../../context/authcontext';

import '../../css/Navbar.css'
const Navbar = () => {

const authcontext = useContext(UserAuth);
if (!authcontext) {
  console.log("cannot ascess outside the provider");
} 
const { user, dispatchRoleStudent } = authcontext;
  return (
    <>
      <div>
        <nav>
          <div className="menu">
            <NavLink
              className="head"
              activeClassName="active"
              to="/faculty/Announcements"
            >
              {" "}
              Announcements{" "}
            </NavLink>
            <NavLink
              className="head"
              activeClassName="active"
              to="/faculty/JobAlerts"
            >
              {" "}
              Job Alerts{" "}
            </NavLink>
            <NavLink
              className="head"
              activeClassName="active"
              to="/faculty/Students"
            >
              {" "}
              Students{" "}
            </NavLink>
            <NavLink
              className="head"
              activeClassName="active"
              to="/faculty/Statistics"
            >
              {" "}
              Statistics{" "}
            </NavLink>
          </div>
          <div className="logout">
            <NavLink
              className="log"
              to="/"
              onClick={()=>{
                localStorage.removeItem('roleuser')
                dispatchRoleStudent({ type: "LOGOUT"});
              }}
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
