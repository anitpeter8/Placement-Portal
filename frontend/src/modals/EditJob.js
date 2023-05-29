import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "./EditJob.css";
import { useForm, useFormContext } from "react-hook-form";
import { Jobscontext } from '../context/Jobscontext';
import 'react-multiple-select-dropdown-lite/dist/index.css'
import Multiselect from 'multiselect-react-dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function EditJob({ job, EditJobmodal,onClose }) {
  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const { handleSubmit, register } = useForm({
    defaultValues: job

  });
  const [show, setShow] = useState(false);
  const options = ['CSE', 'EEE', 'ECE', 'MECH', 'AI', 'CIVIL']

  const onSubmit = (data) => {
    /*console.log(applylink, description,role,noofbacklogs,cgpa,history,branch);*/
    const id = job._id;
    /*const jobee = {applylink, description,role,noofbacklogs,cgpa,history,branch}*/
    axios.patch('http://localhost:9000/api/jobs/' + id, data).then((response) => {
      console.log(response.data);
      dispatch({ type: 'UPDATEJOB', payload: response.data });
      console.log('vishayam updated')

    }).catch((error) => {
      console.log(error)
    })
  }
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
          <form className="jobedit-modal-form"onSubmit={handleSubmit(onSubmit)}>
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

              


                showCheckbox
                required {...register("branch")}
                className="my-multiselect"
                classNamePrefix="my-multiselect"
              />
            </div>

            <div className="sub">
              <Button className="sub-but" type="submit" onClick={onClose}>
                Submit
              </Button>
            </div>
          </form>

          </div>
        </div>

      </div>









      /* <Button title="Edit Job" variant="secondary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
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

              


                showCheckbox
                required {...register("branch")}
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
        </Modal.Body>
    </Modal> */
    
  );
  }
}
export default EditJob;