import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
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
              onClick={localStorage.removeItem("student")}
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
