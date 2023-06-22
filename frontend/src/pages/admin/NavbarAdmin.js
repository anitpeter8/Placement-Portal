import React, { useContext } from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
import '../../css/Navbar.css'
import { UserAuth } from '../../context/authcontext';

const Navbar = () => {

const authcontext = useContext(UserAuth);
if (!authcontext) {
  console.log("cannot ascess outside the provider");
} 
const { dispatchRoleStudent } = authcontext;
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
        <NavLink className="log" to="/" onClick={()=>{
           localStorage.removeItem('roleuser')
           dispatchRoleStudent({ type: "LOGOUT"});
        }}> Logout </NavLink>
      </div>
    </nav>
    </div>
    <Outlet/>
  </>
  )
}
export default Navbar;
