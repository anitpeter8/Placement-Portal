
import EditStudent from "../modals/EditStudent";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Student.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const Student = ({ student }) => {
  const [EditStudentModal,setEditStudentModal]=useState(false);
  return (
    <div className="single-card">
      <Card className="stbody">

        <Card.Body>
          <Card.Text>
            <div className="edit">
              <div>
                <h6>{student.studentid}</h6>
                <h6>S{student.semester}</h6>
                <h4>{student.fullname}</h4>
              </div>
              <div className="edit-modal">
              <Button
        variant="primary"
        style={{ backgroundColor: "#3A8ECB" }}
        onClick={()=>setEditStudentModal(true)}
      >
        <div className="edit-btn">
          <div>Edit</div>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        </div>
      </Button>
                <EditStudent student={student} EditStudentModal={EditStudentModal} onClose={()=>setEditStudentModal(false)}/></div>
            </div>
            <p>{student.branch}</p>
            <p>CGPA: {student.cgpa}</p>
            <p>Backlogs: {student.noofbacklogs}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Student;