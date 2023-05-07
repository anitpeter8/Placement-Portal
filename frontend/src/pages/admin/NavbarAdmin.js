import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
import '../../css/Navbar.css'
const Navbar = () => {
  return (<>
    <div>
    <nav>
      <div className="menu">
        <NavLink className="head" activeClassName="active" to='/admin/Announcements'> Announcements </NavLink>
        <NavLink className="head" activeClassName="active" to='/admin/JobAlerts'> Job Alerts </NavLink>
        <NavLink className="head" activeClassName="active" to='/admin/Students'> Students </NavLink>
        <NavLink className="head" activeClassName="active" to='/admin/Statistics'> Statistics </NavLink>
      </div>
      <div className="logout">
        <NavLink className="log" to="/"> Logout </NavLink>
      </div>
    </nav>
    </div>
    <Outlet/>
  </>
  )
}
export default Navbar;
