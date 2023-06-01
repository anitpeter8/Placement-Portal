import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
 
  return (
    <nav>
      <div className="menu">
        <NavLink className="heading" activeClassName="active" to='/Announcements'> Announcements </NavLink>
        <NavLink className="heading" activeClassName="active" to='/JobAlerts'> Job Alerts </NavLink>
        <NavLink className="heading" activeClassName="active" to='/Students'> Students </NavLink>
        <NavLink className="heading" activeClassName="active" to='/Statistics'> Statistics </NavLink>
      </div>
      <div className="logout">
        <NavLink className="log" to="/"> Logout </NavLink>
      </div>
    </nav>
  )
}
export default Navbar;
