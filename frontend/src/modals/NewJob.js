import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './NewJob.css';
import { Jobscontext } from '../context/Jobscontext';

import 'react-multiple-select-dropdown-lite/dist/index.css'
import Multiselect from 'multiselect-react-dropdown';


function NewJob() {
  
   
    const context=useContext(Jobscontext);
    const {dispatch}=context; 
    const [show, setShow] = useState(false);
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [role, setrole] = useState('');
    const [applylink,setapplylink] = useState('');
    const [noofbacklogs, setnoofbacklogs] = useState(null);
    const [cgpa, setcgpa] = useState(null);
    const [history, sethistory] = useState(null);
    const [branch,setBranch]=useState([]);
    const  options  = ['CSE','EEE','ECE','MECH','AI']

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlesubmit = (e) => {
        e.preventDefault();

        console.log(heading, description,role,noofbacklogs,cgpa,history,branch);
        const job = { heading, description,role,noofbacklogs,cgpa,history,branch };
        axios.post("http://localhost:9000/api/jobs", job).then((response) => {
            console.log(response.data);
            console.log('vishayam')
            dispatch({type:'CREATEJOB',payload:response.data});

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
                        <div className='title-lb'>
                        <label for="title" className='title-label'>Title :</label>
                        </div>
                        <div className='title_tb'>
                        <input id="title" className='title-textbox' type='text' value={heading} onChange={(e) =>
                            setHeading(e.target.value)
                        } />
                        </div>
                        <div className='desc-lb'>
                        <label for="desc" className='desc-label'>Description :</label>
                        </div>
                        <div className='desc-ta'>
                        <textarea id="desc" className='desc-textarea' value={description} onChange={(e) =>
                            setDescription(e.target.value)
                        } />
                        </div>
                        <div className='role-lb'>
                        <label for="role" className='role-label'>Role :</label>
                        </div>
                        <div className='role-tb'>
                        <input id="role" className='role-textbox' type='text' value={role} onChange={(e) =>
                            setrole(e.target.value)
                        } />
                        </div>
                        <div className='applylink-lb'>
                        <label for="applylink" className='applylink-label'>Application Link :</label>
                        </div>
                        <div className='applylink-tb'>
                        <input id="applylink" className='applylink-textbox' type='text' value={applylink} onChange={(e) =>
                            setapplylink(e.target.value)
                        } />
                        </div>
                        <div className='backlog-cgpa'>
                        <div className='backlog-lb'>
                        <label for="backlog" className='backlog-label'>No. of backlogs :</label>
                        </div>
                        <div className='backlog-tb'>
                        <input id="backlog" className='backlog-textbox' type='text' value={noofbacklogs} onChange={(e) =>
                            setnoofbacklogs(e.target.value)
                        } />
                        </div>
                        <div className='cgpa-lb'>
                        <label for="cgpa" className='cgpa-label'>CGPA :</label>
                        </div>
                        <div className='cgpa-tb'>
                        <input id="cgpa" className='cgpa-textbox' type='text' value={cgpa} onChange={(e) =>
                            setcgpa(e.target.value)
                        } />
                        </div>
                        </div>
                        <div className='history-lb'>
                        <label for="history" className='history-label'>History :</label>
                        </div>
                        <div className='history-tb'>
                        <input id="history" className='history-textbox' type='text' value={history} onChange={(e) =>
                            sethistory(e.target.value)
                        } />
                        </div>
                      <div className='branch'>
                        <label for="branch" className='branch-label'>Branch :</label>
                        <Multiselect id="branch" isObject={false}  options={options} showCheckbox onSelect={(e)=>{
                            setBranch(e)
                            console.log(branch);
                        }} onRemove={(e)=>{
                            setBranch(e)
                            console.log(branch);
                        }}
                        className="my-multiselect"
                        classNamePrefix="my-multiselect"
                        />
                        </div>
                        <div className='submit'>
                        <Button className="sub-btn" type='submit'>Submit</Button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default NewJob;