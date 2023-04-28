import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import 'react-multiple-select-dropdown-lite/dist/index.css'
import Multiselect from 'multiselect-react-dropdown';


function NewJob() {
  

    
    const [show, setShow] = useState(false);
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [role, setrole] = useState('');
    const [noofbacklogs, setnoofbacklogs] = useState(null);
    const [cgpa, setcgpa] = useState(null);
    const [history, sethistory] = useState(true);
    const [branch,setBranch]=useState([]);
    const  options  = ['CS','EEE','ECE','MECH','AI'
    ]

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlesubmit = (e) => {
        e.preventDefault();

        console.log(heading, description,role,noofbacklogs,cgpa,history,branch);
        const announcement = { heading, description,role,noofbacklogs,cgpa,history,branch};
        axios.post("http://localhost:5000/api/jobs", announcement).then((response) => {
            console.log(response.data);
            console.log('vishayam')
            // setHeading('');
            // setDescription('');
            // setcgpa('');
            // sethistory('');
            // setnoofbacklogs(0);
            // setrole('');
           
        }).catch()
    }

    return (
        <>
            <Button variant="primary" style={{ backgroundColor: '#ffa8a2', height: '45px', color: '#660a0a' }} onClick={handleShow}>
                + New Job
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handlesubmit}>
                        <label>heading:</label>
                        <input type='text' value={heading} onChange={(e) =>
                            setHeading(e.target.value)
                        } />
                        <label>description:</label>
                        <input type='text' value={description} onChange={(e) =>
                            setDescription(e.target.value)
                        } />

                        <label>role:</label>
                        <input type='text' value={role} onChange={(e) =>
                            setrole(e.target.value)
                        } />
                        <label>noofbacklogs:</label>
                        <input type='text' value={noofbacklogs} onChange={(e) =>
                            setnoofbacklogs(e.target.value)
                        } />
                        <label>cgpa:</label>
                        <input type='text' value={cgpa} onChange={(e) =>
                            setcgpa(e.target.value)
                        } />
                        <label>history:</label>
                        <input type='text' value={history} onChange={(e) =>
                            sethistory(e.target.value)
                        } />
                      
                        <
                        Multiselect  isObject={false}  options={options} showCheckbox onSelect={(e)=>{
                            setBranch(e)
                            console.log(branch);
                        }} onRemove={(e)=>{
                            setBranch(e)
                            console.log(branch);
                        }}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default NewJob;