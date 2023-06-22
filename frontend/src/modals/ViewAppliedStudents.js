import React from 'react'
import './ViewAppliedStudents.css'
const ViewAppliedStudents = ({ViewAppliedStudentsmodal,setViewAppliedStudentsmodal,job}) => {
    if(ViewAppliedStudentsmodal)
    {

    
    return (
        <div className='applied-modal-container' >
            <div className='applied-modal-content' >
                <button className='modal-close-btn' onClick={setViewAppliedStudentsmodal}><p>X</p></button>
                <div className='applied-modal-title'>
                    <h3>Applied Students</h3>
                    <h4>{job.heading}</h4>
                    <h6>{job.role}</h6>
                    <br></br>
                    <hr></hr>
                    </div>
                <div className='applied-modal-body'>
                   
                    <table className='applied-modal-table'>
                        <tr className='brownish'>
                        <th >Name</th>
                        <th>Department</th>
                        <th>Batch</th>
                        </tr>
                        {job.applied_students.length>0 &&
                        job.applied_students.map((student)=>{
                            return(
                                <tr>
                                <td>{student.name}</td>
                                <td>{student.branch}</td>
                                <td>{student.year}</td>
                               </tr>
                            )
                        })}
                    </table>
                
                </div>
            </div>

        </div>
    )
    }
}

export default ViewAppliedStudents
