import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Statistics = () => {
  const [stats,setStats]=useState();
  useEffect(()=>{
    axios.get("http://localhost:9000/api/statistics").then((response)=>{
      console.log(response);
      setStats(response.data);
      console.log(stats);
          }).catch((error)=>
          {
            console.log(error.message)
          })
  },[setStats]
    
    )
  return (
    <>
    <div>Statistics</div>
    {stats && stats.map((yearstat)=>{
      return(
        <>
        <h1>{yearstat.year}</h1>
        <table>
        <tr>
    <th>companyname</th>
    <th>CSE</th>
    <th>AI</th>
    <th>MECH</th>
    <th>CIVIL</th>
    <th>EEE</th>
    <th>ECE</th>
  </tr>
  {
    yearstat.offers &&  yearstat.offers.map((offer)=>{
      return(
        <>
        <tr>
        <th>{offer.companyname}</th>
    <th>{offer.CSE}</th>
    <th>{offer.AI}</th>
    <th>{offer.MECH}</th>
    <th>{offer.CIVIL}</th>
    <th>{offer.EEE}</th>
    <th>{offer.ECE}</th>
    </tr>
        </>
      )
    })
  }
  </table>
        </>
      )
    
  
    })}
</>
  )
}
export default Statistics;
