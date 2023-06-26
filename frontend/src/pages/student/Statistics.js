import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../css/StatisticsPage.css";
import NewOffer from '../../modals/NewOffer';
import "../../modals/ViewAppliedStudents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const Statistics = () => {
  const [companyname, setcompanyname] = useState();
  const [newyear, setnewyear] = useState()
  const [CSE, setCSE] = useState()
  const [AI, setAI] = useState()
  const [MECH, setMECH] = useState()
  const [CIVIL, setCIVIL] = useState()
  const [EEE, setEEE] = useState()
  const [ECE, setECE] = useState()
  const [LPA, setLPA] = useState()
  const [editingrow, seteditingrow] = useState()
  const [NewOffermodal, setNewOffermodal] = useState(false);
  const [EditOffermodal, setEditOffermodal] = useState(false);
  const [prefilldata, setprefilldata] = useState({ companyname: "loading", year: 0, CSE: 0, CIVIL: 0, EEE: 0, ECE: 0, MECH: 0, AI: 0 });
  const [stats, setstats] = useState();
  const [Search, setSearch] = useState('')
  const [year, setyear] = useState('Filter by Year');
  console.log(year);
  useEffect(() => {
    axios.get('http://localhost:9000/api/statistics').then((res) => {
      setstats(res.data);
      console.log(res.data);
    }).catch((error) => {
      console.log(error.data)
    })
  }, [])

  return (
    <div className='statastics'>
      <div className="stathead">
        <h1 className="statheading">STATISTICS</h1>
      </div>
      <div className='stat-tablemain'>
        <div className='filter-details'>
          <input placeholder='Search Recruiter' className='input-recruiter' onChange={(e) => {
            setSearch(e.target.value)
            console.log(e.target.value)
          }
          } />
          <div>
            <select className='input-year' onChange={(e) => {
              setyear(e.target.value)
              console.log(e.target.value)
            }}>
              <option value='Filter by Year' selected >Filter by Year</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
            </select>
          </div>
        </div>

        <div className='stat-table'>
          <table className='applied-table'>
            <thead>
              <th style={{ width: "20em" }}>Recruiter</th>
              <th style={{ width: "20em" }}>Year of Recruitment</th>
              <th style={{ width: "10em" }}>Package</th>
              <th style={{ width: "10em" }}>CSE</th>
              <th style={{ width: "10em" }}>AI</th>
              <th style={{ width: "10em" }}>MECH</th>
              <th style={{ width: "10em" }}>CIVIL</th>
              <th style={{ width: "10em" }}> EEE</th>
              <th style={{ width: "10em" }}>ECE</th>
              <th style={{ width: "10em" }}>Total Recruits</th>
            </thead>
            <tbody>
              {stats && stats.filter((offer) => {
                console.log(offer.year)
                console.log(year)
                return year === 'Filter by Year' ? offer :
                  offer.year == year
              }).filter((offer) => {
                return Search === '' ? offer :
                  offer.companyname.toLowerCase().includes(Search);
              }).map((offer) => 
               
                  <tr>
                    <td>{offer.companyname}</td>
                    <td>{offer.year}</td>
                    <td>{offer.LPA}</td>
                    <td>{offer.CSE}</td>
                    <td>{offer.AI}</td>
                    <td>{offer.MECH}</td>
                    <td>{offer.CIVIL}</td>
                    <td>{offer.EEE}</td>
                    <td>{offer.ECE}</td>
                    <td>{offer.total}</td>
                  </tr>
              
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default Statistics;
