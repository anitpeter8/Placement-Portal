import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./EditJob.css";
import { useForm, } from "react-hook-form";
import { Jobscontext } from '../context/Jobscontext';
import 'react-multiple-select-dropdown-lite/dist/index.css'
import Multiselect from 'multiselect-react-dropdown';
import { UserAuth } from '../context/authcontext';

function EditJob({ job, EditJobmodal, onClose }) {
  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user } = authcontext;
  const [branch,setBranch]=useState(job.branch);

  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const { handleSubmit, register } = useForm({
    defaultValues: job
  });
  const options = ['CSE', 'EEE', 'ECE', 'MECH', 'AI', 'CIVIL']


  const onSubmit = (data) => {
 
    const id = job._id;
    data['branch']=branch;
    
    axios.patch('http://localhost:9000/api/jobs/' + id, data,
    { headers: { 'Authorization': `Bearer ${user.token}` }}).then((response) => {
      console.log(response.data);
      dispatch({ type: 'UPDATEJOB', payload: response.data });
      console.log('vishayam updated')
      onClose();

    }).catch((error) => {
      console.log(error)
    })
  }

  const [selectedValue, setSelectedValue] = useState(job.branch);

  if (EditJobmodal) {
  
    return (

      <div className='jobedit-modal-container' >
        <div className='jobedit-modal-content' >
          <button className='modal-close-btn' onClick={onClose} ><p>X</p></button>
          <div className='jobedit-modal-title'>
            <h3>Edit Job</h3>
            <hr></hr>
          </div>
          <div className='jobedit-modal-body'>
            <form className="jobedit-modal-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="title">
                <div className="edit-label">
                  <label>Title :</label>
                </div>
                <div className="textbox">
                  <input
                    className="textbox-max"
                    type="text"
                    required {...register("heading")}
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
                    required {...register("description")}
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
                    required {...register("role")}
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
                    required {...register("applylink")}
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
                    required {...register("noofbacklogs")}
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
                    required {...register("cgpa")}
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
                    required {...register("history")}
                  />
                </div>
              </div>
              <div className="branch">
                <div className="edit-label">
                  <label>Branch :</label>
                </div>
                <Multiselect
                  isObject={false}
                  options={options}
                   
                  selectedValues={job.branch}

                  showCheckbox
                  onSelect={(e)=>{
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

              <div className="sub">
                <Button className="sub-but" type="submit">
                  Submit
                </Button>
              </div>
            </form>

          </div>
        </div>

      </div>







    );
  }
}
export default EditJob;