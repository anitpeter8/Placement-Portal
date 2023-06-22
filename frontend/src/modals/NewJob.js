import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './NewJob.css';

import { Jobscontext } from '../context/Jobscontext';

import 'react-multiple-select-dropdown-lite/dist/index.css'
import Multiselect from 'multiselect-react-dropdown';
import { UserAuth } from '../context/authcontext';



function NewJob({ NewJobmodal, onclose }) {



  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  }
  const { user } = authcontext;



  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [role, setrole] = useState('');
  const [applylink, setapplylink] = useState('');
  const [noofbacklogs, setnoofbacklogs] = useState(null);
  const [cgpa, setcgpa] = useState(null);
  const [history, sethistory] = useState(null);
  const [branch, setBranch] = useState([]);
  const options = ['CSE', 'EEE', 'ECE', 'MECH', 'AI']

  const handlesubmit = (e) => {
    e.preventDefault();
    onclose();

    console.log(heading, description, role, noofbacklogs, cgpa, history, branch);
    const job = { heading, description, role, noofbacklogs, cgpa, history, branch };
    axios.post("http://localhost:9000/api/jobs", job,
      { headers: { 'Authorization': `Bearer ${user.token}` } }).then((response) => {
        console.log(response.data);
        console.log('vishayam')
        dispatch({ type: 'CREATEJOB', payload: response.data });


      }).catch()
  }

  if (NewJobmodal) {



    return (
      <>
        <div className='jobedit-modal-container' >
          <div className='jobedit-modal-content' >
            <button className='modal-close-btn' onClick={onclose} ><p>X</p></button>
            <div className='jobedit-modal-title'>
              <h3>New Job</h3>
              <hr></hr>
            </div>
            <div className='jobedit-modal-body'>
              <form className="jobedit-modal-form" onSubmit={handlesubmit}>
                <div className="title">
                  <div className="edit-label">
                    <label>Title :</label>
                  </div>
                  <div className="textbox">
                    <input
                      className="textbox-max"
                      type="text"
                      value={heading} onChange={(e) =>
                        setHeading(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="desc">
                  <div className="edit-label">
                    <label>Description :</label>
                  </div>
                  <div className="textarea">
                    <textarea
                      className="desc-textarea"
                      value={description} onChange={(e) =>
                        setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="role">
                  <div className="edit-label">
                    <label>Role :</label>
                  </div>
                  <div className="textbox">
                    <input
                      className="textbox-max"
                      type="text"
                      value={role} onChange={(e) =>
                        setrole(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="link">
                  <div className="edit-label">
                    <label>Application link:</label>
                  </div>
                  <div className="textbox">
                    <input
                      className="textbox-max"
                      type="text"
                      value={applylink} onChange={(e) =>
                        setapplylink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="noofbacklogs">
                  <div className="edit-label">
                    <label>No. of backlogs :</label>
                  </div>
                  <div className="textbox">
                    <input
                      className="textbox-min"
                      type="text"
                      value={noofbacklogs} onChange={(e) =>
                        setnoofbacklogs(e.target.value)}
                    />
                  </div>
                </div>
                <div className="cgpa">
                  <div className="edit-label">
                    <label>CGPA :</label>
                  </div>
                  <div className="textbox">
                    <input
                      className="textbox-min"
                      type="text"
                      value={cgpa} onChange={(e) =>
                        setcgpa(e.target.value)}
                    />
                  </div>
                </div>
                <div className="history">
                  <div className="edit-label">
                    <label>History:</label>
                  </div>
                  <div className="textbox">
                    <input
                      className="textbox-min"
                      type="text"
                      value={history} onChange={(e) =>
                        sethistory(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="branch">
                  <div className="edit-label">
                    <label>Branch :</label>
                  </div>
                  <Multiselect
                    isObject={false}
                    options={options} showCheckbox onSelect={(e) => {
                      setBranch(e)
                      console.log(branch);
                    }} onRemove={(e) => {
                      setBranch(e)
                      console.log(branch);
                    }}
                    classNamePrefix="my-multiselect"
                  />
                </div>

                <div className="sub">
                  <Button className="sub-but" type="submit" >
                    Submit
                  </Button>
                </div>
              </form>

            </div>
          </div>

        </div>


      </>
    );
  }
}
export default NewJob;