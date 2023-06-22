import React from 'react'
import "../css/EditRow.css"
import { Button } from 'react-bootstrap'; 
const EditableRow = ({ getDepartmentTotal,yearstat, editFormData , handleEditForm, handleEditFormCancel ,handleEditFormSubmit }) => {
  const deptTotal = getDepartmentTotal(yearstat);
  if (!yearstat.offers) {
    return null;
  }
  return (
    <tr>
        <td><input type="text" className="rec" name="companyname" required="required" value={editFormData.companyname} onChange={handleEditForm}></input></td>
        <td><input type="text" className="branch" name="CSE" required="required" value={editFormData.CSE} onChange={handleEditForm}></input></td>
        <td><input type="text" className="branch" name="AI" required="required" value={editFormData.AI} onChange={handleEditForm}></input></td>
        <td><input type="text" className="branch" name="MECH" required="required" value={editFormData.MECH} onChange={handleEditForm}></input></td>
        <td><input type="text" className="branch" name="CIVIL" required="required" value={editFormData.CIVIL} onChange={handleEditForm}></input></td>
        <td><input type="text" className="branch" name="EEE" required="required" value={editFormData.EEE} onChange={handleEditForm}></input></td>
        <td><input type="text" className="branch" name="ECE" required="required" value={editFormData.ECE} onChange={handleEditForm}></input></td>
        <td>{deptTotal}</td>
        <td><Button variant="primary" onClick={(event) => handleEditFormSubmit(event)}
                                    style={{
                                      height: "4vh",
                                      width: "4vw",
                                      fontSize: "1vw",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      display: "flex",
                                      
                                    }}>Save</Button></td>
        <td><Button variant="danger" onClick={handleEditFormCancel}
                                    style={{
                                      height: "4vh",
                                      width: "4vw",
                                      fontSize: "1vw",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      display: "flex",
                                      
                                    }}>Cancel</Button></td>
        
    </tr>
  )
}

export default EditableRow