import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "./EditJob.css";
import { Jobscontext } from '../context/jobscontext';
import 'react-multiple-select-dropdown-lite/dist/index.css'
import Multiselect from 'multiselect-react-dropdown';

function EditJob({ job }) {
  const context=useContext(Jobscontext);
  const {dispatch}=context;

  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(job.heading);
  const [description, setDescription] = useState(job.description);
  const [role, setrole] = useState(job.role);
  const [noofbacklogs, setnoofbacklogs] = useState(job.noofbacklogs);
  const [cgpa, setcgpa] = useState(job.cgpa);
  const [history, sethistory] = useState(job.history);
  const [branch, setBranch] = useState(job.branch);
  const  options  = ['CSE','EEE','ECE','MECH','AI']

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(heading, description,role,noofbacklogs,cgpa,history,branch);
    const id = job._id;
    const jobee = {heading, description,role,noofbacklogs,cgpa,history,branch}
    axios.patch('http://localhost:9000/api/jobs/' + id, jobee).then((response) => {
      console.log(response.data);
      dispatch({type:'UPDATEJOB',payload:response.data});
      console.log('vishayam')

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       <Modal.Header closeButton>
          
          <Modal.Title >Edit Job</Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className='title'>
            <div className='title-label'>
            <label>Title :</label>
            </div>
            <div className='textbox'>
            <input className='title-textbox' type='text' value={heading} onChange={(e) =>
              setHeading(e.target.value)
            } />
            </div>
            </div>
            <div className='desc'>
            <div className='desc-label'>
            <label>Description :</label></div>
            <div className='textarea'>
            <textarea className='desc-textarea' value={description} onChange={(e) =>
              setDescription(e.target.value)
            } />
            </div>
            </div>
            <div className='role'>
            <div className='role-label'>
            <label>Role :</label>
            </div>
            <div className='textbox'>
            <input className='role-textbox' type='text' value={role} onChange={(e) =>
              setrole(e.target.value)
            } />
            </div>
            </div>
            <div className='noofbacklogs'>
            <div className='noofbacklogs-label'>
            <label>No. of backlogs :</label>
            </div>
            <div className='textbox'>
            <input className='edit-backlog-textbox' type='text' value={noofbacklogs} onChange={(e) =>
              setnoofbacklogs(e.target.value)
            } />
            </div>
            </div>
            <div className='cgpa'>
            <div className='cgpa-label'>
            <label>CGPA :</label>
            </div>
            <div className='textbox'>
            <input className='edit-cgpa-textbox' type='text' value={cgpa} onChange={(e) =>
              setcgpa(e.target.value)
            } />
            </div>
            </div>
            <div className='history'>
            <div className='edit-history-label'>
            <label>History:</label>
            </div>
            <div className='textbox'>
            <input className='edit-history-textbox' type='text' value={history} onChange={(e) =>
              sethistory(e.target.value)
            } />
            </div>
            </div>
            <div className='branch'>
            <div className='branch-label'>
            <label>Branch :</label>
            </div>
            <Multiselect  isObject={false}  options={options} showCheckbox onSelect={(e)=>{
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
            

            <div className='sub'>
            <button className='sub-but'  type='submit'>Submit</button>
            </div>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default EditJob;