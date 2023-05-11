
import EditStudent from "../modals/EditStudent";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Student.css';
//import moment from "moment";
const Student = ({student }) => {

  return (
    

    <div className="single-card">
      <Card className="stbody">
      
        <Card.Body>
          <Card.Text>
            <div className="edit">
          <div>
          <h4>{student.fullname}</h4>
          </div>
          <div className="edit-modal">
            <EditStudent student={student} /></div>
          </div>
            <p>{student.branch}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Student;