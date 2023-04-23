import EditAnnouncement from "../modals/EditAnnouncement";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Announcement.css';
const Announcement = ({ announcement }) => {
  return (
    <div className="single-card">
      <Card style={{ borderRadius: '25px' }} className="card-content">
        <Card.Header className="header" style={{ borderRadius: '25px' }}>
          <div className="d-flex justify-content-between">
            <Card.Title><h4>{announcement.createdAt}</h4></Card.Title>
            <EditAnnouncement announcement={announcement} />
          </div>
          <Card.Title><h4>{announcement.heading}</h4></Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>{announcement.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Announcement;