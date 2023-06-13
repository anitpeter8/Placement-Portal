import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnnounceAdmin from "./pages/admin/Announcements";
import JobsAdmin from "./pages/admin/Jobspage";
import StudentsAdmin from "./pages/admin/Students";
import StatisticsAdmin from "./pages/admin/Statistics";
import NavbarAdmin from "./pages/admin/NavbarAdmin";

import AnnounceStudent from "./pages/student/Announcements";
import JobsStudent from "./pages/student/Jobspage";
import StatisticsStudent from "./pages/student/Statistics";
import NavbarStudent from "./pages/student/NavbarStudent";

import AnnounceFaculty from "./pages/faculty/Announcements";
import JobsFaculty from "./pages/faculty/Jobspage";
import StudentsFaculty from "./pages/faculty/Students";
import StatisticsFaculty from "./pages/faculty/Statistics";
import NavbarFaculty from "./pages/faculty/NavFaculty";

import Registration from "./pages/Registration";
import "./App.css";
import Login from "./pages/Login";
import { UserAuth } from "./context/authcontext";
import { userStudent } from "./context/userStudentContext";


import { useContext, useEffect } from "react";

import Myprofile from "./pages/student/Myprofile";
import { Jobscontext } from "./context/Jobscontext";

function App() {
  const {dispatchstudent } = useContext(userStudent);
  const {dispatch}=useContext(Jobscontext);
 
  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user, dispatchRoleStudent } = authcontext;
 


   const navigate=useNavigate();
  useEffect(() => {
    const roleuser=JSON.parse(localStorage.getItem('roleuser'));
    if(roleuser)
    {
      dispatchRoleStudent({ type: "LOGIN", payload:roleuser});
      console.log(roleuser)
      console.log(roleuser.token)
      axios.get('http://localhost:9000/api/jobs',
      { headers: { 'Authorization': `Bearer ${roleuser.token}` }}).then((response)=>{
        dispatch({type:'SETJOBS',payload:response.data});
      }).catch((error)=>{
        console.log(error);
      })
      axios.get('http://localhost:9000/api/announcements',
      { headers: { 'Authorization': `Bearer ${roleuser.token}` }}
      ).then((response)=>{
        dispatch({type:'SETANNOUNCEMENTS',payload:response.data});
      }).catch((error)=>{
        console.log(error);
      })

    }
   
    
    const student = localStorage.getItem('studentuser');
    if (student) {
      dispatchstudent({ type: "SETSTUDENTUSER", payload: JSON.parse(student)});
      navigate('/Student/Announcements');
    }
  
  }, [])
 
  return (
    <>
      
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin" element={<NavbarAdmin/>}>
            <Route path="/admin/Announcements" element={<AnnounceAdmin />} />
            <Route path="/admin/JobAlerts" element={<JobsAdmin />} />
            <Route path="/admin/Students" element={<StudentsAdmin />} />
            <Route path="/admin/Statistics" element={<StatisticsAdmin />} />
          </Route>
          <Route path="/Student" element={<NavbarStudent/>}>
            <Route path="/Student/Announcements" element={<AnnounceStudent/>}/>
            <Route path="/Student/JobAlerts" element={<JobsStudent />} />
            <Route path="/Student/Myprofile" element={< Myprofile/>} />
            <Route path="/Student/Statistics" element={<StatisticsStudent />} />
          </Route>
          <Route path="/faculty" element={<NavbarFaculty/>}>
            <Route
              path="/faculty/Announcements" element={<AnnounceFaculty/>}/>
            <Route path="/faculty/JobAlerts" element={<JobsFaculty />} />
            <Route path="/faculty/Students" element={<StudentsFaculty />} />
            <Route path="/faculty/Statistics" element={<StatisticsFaculty />} />
          </Route>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
