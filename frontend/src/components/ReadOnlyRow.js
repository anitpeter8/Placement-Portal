import React from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
const ReadOnlyRow = ({ offer, handleEditClick, handleDelete }) => {
    const total =
                            offer.CSE +
                            offer.AI +
                            offer.MECH +
                            offer.CIVIL +
                            offer.EEE +
                            offer.ECE;
  return (

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
                                    onClick={(event) => handleEditClick(event,offer)}
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
                                    onClick={()=> handleDelete(offer._id)} 
                                  >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                  </Button>
                                </td>
                                </tr>

  )
}

export default ReadOnlyRow