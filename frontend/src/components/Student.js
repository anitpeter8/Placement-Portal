
import EditStudent from "../modals/EditStudent";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Student.css';
//import moment from "moment";
const Student = ({ student }) => {

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
                <EditStudent student={student} /></div>
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