import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Students = () => {
  const [students,setStudents]=useState(null);

  useEffect(()=>{
    axios.get('http://localhost:9000/students').then((res)=>{
      setStudents(res.data);
    }).catch((error)=>{
      console.log(error.message);
    })
  })
  return (
    <>
  
    <div>Students</div>
    {students && students.map((student)=>(
      <>
      <p>{student.fullname}</p>
      <p>{student.branch}</p>
      </>
    ))}
    </>
  )
}
export default Students;
