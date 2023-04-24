
import Card from 'react-bootstrap/Card';
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Job.css';
const Job = ({ job }) => {
    return (
        <div className="single-card">
            <Card style={{ borderRadius: '25px' }} className="card-content">
                <Card.Header className="header" style={{ borderRadius: '25px' }}>
                    <div>
                        <Card.Title><h5>{moment(job.createdAt).format('LL')}</h5></Card.Title>
                        <Card.Title><h4>{job.heading}</h4></Card.Title>
                        <Card.Title><h5>{job.role}</h5></Card.Title>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>{job.description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Job;