import axios from 'axios';
import "../../css/StatisticsPage.css";
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import NewBatch from '../../modals/AddYear';
import NewRecruiter from '../../modals/AddRecruiter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowUpRightFromSquare,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
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
    const getDepartmentTotal = (department) => {
      let total = 0;
      stats.forEach((yearstat) => {
        yearstat.offers.forEach((offer) => {
          total += offer[department];
        });
      });
      return total;
    };

  return (
    <>
      <div className="statmain">
        <div className="stathead">
          <h1 className="statheading">STATISTICS</h1>
          <div className="new-year">
            <NewBatch />
          </div>
        </div>
        
        {stats &&
          stats.map((yearstat) => {
            const GrandTotal =
              getDepartmentTotal("CSE") +
              getDepartmentTotal("AI") +
              getDepartmentTotal("MECH") +
              getDepartmentTotal("CIVIL") +
              getDepartmentTotal("EEE") +
              getDepartmentTotal("ECE");
            return (
              <>
                <div className="statbody">
                  <div className="year">
                    <h2 className="year_heading">Batch {yearstat.year}</h2>
                    <div className="new-recruiter">
                      <NewRecruiter />
                    </div>
                  </div>

                  <center>
                    <hr className="hor_line" />
                  </center>
                  <div className="circles">
                    <div className="circle1">
                      <div className="circle-text">
                        TOTAL OFFERS<br></br>
                        <h3>{GrandTotal}</h3>
                      </div>
                    </div>
                    <div className="circle1">
                      <div className="circle-text">
                        HIGHEST LPA <br></br>
                        <h3>{GrandTotal}</h3>
                      </div>
                    </div>
                    <div className="circle1">
                      <div className="circle-text">
                        {" "}
                        TOTAL OFFERS<br></br>
                        <h3>{GrandTotal}</h3>
                      </div>
                    </div>
                  </div>
                  <center>
                    <hr className="hor_line" />
                  </center>
                  <div className="stat-table">
                    <table>
                      <tr>
                        <th style={{ width: "20em" }}>Recruiter</th>
                        <th style={{ width: "10em" }}>CSE</th>
                        <th style={{ width: "10em" }}>AI</th>
                        <th style={{ width: "10em" }}>MECH</th>
                        <th style={{ width: "10em" }}>CIVIL</th>
                        <th style={{ width: "10em" }}>EEE</th>
                        <th style={{ width: "10em" }}>ECE</th>
                        <th style={{ width: "3em" }}>TOTAL</th>
                        <th style={{ width: "3em" }}></th>
                        <th style={{ width: "3em" }}></th>
                      </tr>
                      {yearstat.offers &&
                        yearstat.offers.map((offer) => {
                          const total =
                            offer.CSE +
                            offer.AI +
                            offer.MECH +
                            offer.CIVIL +
                            offer.EEE +
                            offer.ECE;

                          return (
                            <>
                              <tr>
                                <td>{offer.companyname}</td>
                                <td>{offer.CSE}</td>
                                <td>{offer.AI}</td>
                                <td>{offer.MECH}</td>
                                <td>{offer.CIVIL}</td>
                                <td>{offer.EEE}</td>
                                <td>{offer.ECE}</td>
                                <td>{total}</td>
                                <td>
                                  <Button
                                    variant="secondary"
                                    style={{
                                      height: "4vh",
                                      width: "2vw",
                                      fontSize: "1vw",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      display: "flex",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                  </Button>
                                </td>
                                <td>
                                  <Button
                                    variant="danger"
                                    style={{
                                      height: "4vh",
                                      width: "2vw",
                                      fontSize: "1vw",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      display: "flex",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                  </Button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      <tr>
                        <td>Total Offers</td>
                        <td>{getDepartmentTotal("CSE")}</td>
                        <td>{getDepartmentTotal("AI")}</td>
                        <td>{getDepartmentTotal("MECH")}</td>
                        <td>{getDepartmentTotal("CIVIL")}</td>
                        <td>{getDepartmentTotal("EEE")}</td>
                        <td>{getDepartmentTotal("ECE")}</td>
                        <td>{GrandTotal}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
export default Statistics;
