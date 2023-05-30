import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "./EditStudent.css";
import { useForm, useFormContext } from "react-hook-form";


function EditStudent({ student,EditStudentModal,onClose }) {
  const [show, setShow] = useState(false);
  const { handleSubmit, register } = useForm({
    defaultValues: student
      
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(student.fullname,student.branch);
    const sid = student.id;
    /*const studentee = {name,branch }*/
    axios.patch('http://localhost:9000/students' + sid).then((response) => {
      console.log(response.data);
      console.log('vishayam')

    }).catch((error) => {
      console.log(error)
    })
  }
  if(EditStudentModal)
  {

  
  return (
    <>
    

    <div className='jobedit-modal-container' >
        <div className='jobedit-modal-content' >
          <button className='modal-close-btn' onClick={onClose} ><p>X</p></button>
          <div className='jobedit-modal-title'>
            <h3>Edit Job</h3>
            <hr></hr>
          </div>
          <div className='jobedit-modal-body'>
          <form onSubmit={handlesubmit} className="jobedit-modal-form">
            <div className="name_branch">
              <div className="name">
                <div className="title-name">
                  <label for="title">Full Name :</label>
                </div>
                <div className="text-name">
                  <input
                    id="title"
                    className="textst"
                    type="text"
                    required {...register("fullname")}
                  />
                </div>
              </div>
              <div className="branch">
                <div className="branch-label">
                  <label for="branch">Branch :</label>
                </div>
                <div className="text-branch">
                  <input
                    id="branch"
                    type="text"
                    className="textst"
                    required {...register("branch")}
                  />
                </div>
              </div>
            </div>
            <div className="id_class">
              <div className="id">
                <div className="id-label">
                  <label for="id">Student ID :</label>
                </div>
                <div className="text-id">
                  <input
                    type="text"
                    id="id"
                    className="textst"
                    required {...register("studentid")}
                  />
                </div>
              </div>
              <div className="class">
                <div className="class-label">
                  <label for="class">Class :</label>
                </div>
                <div className="text-class">
                  <input
                    type="text"
                    id="class"
                    className="textst"
                    required {...register("class")}
                  />
                </div>
              </div>
            </div>
            <div className="sem_email">
              <div className="sem">
                <div className="sem-label">
                  <label for="sem">Semester :</label>
                </div>
                <div className="text-sem">
                  <input
                    type="text"
                    id="sem"
                    className="textst"
                    required {...register("semester")}
                  />
                </div>
              </div>
              <div className="email">
                <div className="email-label">
                  <label for="email">Email ID :</label>
                </div>
                <div className="text-email">
                  <input
                    type="text"
                    id="email"
                    className="textst"
                    required {...register("emailid")}
                  />
                </div>
              </div>
            </div>
            <div className="mob_dob">
              <div className="mob">
                <div className="mob-label">
                  <label for="mobno">Mobile no :</label>
                </div>
                <div className="text-mob">
                  <input
                    type="text"
                    id="mobno"
                    className="textst"
                    required {...register("mobno")}
                  />
                </div>
              </div>
              <div className="dob">
                <div className="dob-label">
                  <label for="dob">DOB :</label>
                </div>
                <div className="text-dob">
                  <input
                    type="date"
                    id="dob"
                    className="textst"
                    required {...register("dob")}
                  />
                </div>
              </div>
            </div>
            <div className="address">
              <div className="address-label">
                <label for="add">Address :</label>
              </div>
              <div className="text-address">
                <textarea
                  className="desc-textarea"
                  id="add"
                  required {...register("address")}
                />
              </div>
            </div>
            <div className="street_city">
              <div className="street">
                <div className="street-label">
                  <label for="street">Street :</label>
                </div>
                <div className="text-street">
                  <input
                    type="text"
                    id="street"
                    className="textst"
                    required {...register("street")}
                  />
                </div>
              </div>
              <div className="city">
                <div className="city-label">
                  <label for="city">City :</label>
                </div>
                <div className="text-city">
                  <input
                    type="text"
                    id="city"
                    className="textst"
                    required {...register("city")}
                  />
                </div>
              </div>
            </div>
            <div className="dis_pin">
              <div className="district">
                <div className="district-label">
                  <label for="dis">District :</label>
                </div>
                <div className="text-district">
                  <select className="district-list" id="dis" required {...register("district")}>
                  <option></option>
                  <option>Alappuzha</option>
                  <option>Ernakulam</option>
                  <option>Idukki</option>
                  <option>Kannur</option>
                  <option>Kasaragod</option>
                  <option>Kollam</option>
                  <option>Kottayam</option>
                  <option>Kozhikode</option>
                  <option>Malappuram</option>
                  <option>Palakkad</option>
                  <option>Pathanamthitta</option>
                  <option>Thiruvananthapuram</option>
                  <option>Thrissur</option>
                  <option>Wayanad</option>

                  </select>
                </div>
              </div>
              <div className="pin">
                <div className="pin-label">
                  <label for="pin">Pin Code :</label>
                </div>
                <div className="text-pin">
                  <input
                    type="text"
                    id="pin"
                    className="textst"
                    required {...register("pincode")}
                  />
                </div>
              </div>
            </div>
            <div className="cgpa_nback">
              <div className="cgpa">
                <div className="cgpa-label">
                  <label for="cgpa">CGPA :</label>
                </div>
                <div className="text-cgpa">
                  <input
                    type="text"
                    id="cgpa"
                    className="textst"
                    required {...register("cgpa")}
                  />
                </div>
              </div>
              <div className="nbacklog">
                <div className="nbacklog-label">
                  <label for="backlog">No. of Backlogs :</label>
                </div>
                <div className="text-nbacklog">
                  <input
                    type="text"
                    id="backlog"
                    className="textst"
                    required {...register("noofbacklogs")}
                  />
                </div>
              </div>
            </div>
            <div className="his_link">
              <div className="sthistory">
                <div className="history-label">
                  <label for="history">History of Backlogs :</label>
                </div>
                <div className="text-history">
                  <input
                    type="text"
                    id="history"
                    className="textst"
                    required {...register("historyofbacklogs")}
                  />
                </div>
              </div>
              <div className="link">
                <div className="link-label">
                  <label for="link">Resume Link :</label>
                </div>
                <div className="text-link">
                  <input
                    type="text"
                    id="link"
                    className="textst"
                    required {...register("resumelink")}
                  />
                </div>
              </div>
            </div>
            <div className="coc_amcat">
              <div className="cocubes">
                <div className="cocubes-label">
                  <label for="cocubes">Cocubes Score :</label>
                </div>
                <div className="text-cocubes">
                  <input
                    type="text"
                    id="cocubes"
                    className="textst"
                    required {...register("cocubesscore")}
                  />
                </div>
              </div>
              <div className="amcat">
                <div className="amcat-label">
                  <label for="amcat">Amcat Score :</label>
                </div>
                <div className="text-amcat">
                  <input
                    type="text"
                    id="amcat"
                    className="textst"
                    required {...register("amcatscore")}
                  />
                </div>
              </div>
            </div>
            <div className="tenth_twelth">
              <div className="tenth">
                <div className="tenth-label">
                  <label for="tenth">Tenth Score :</label>
                </div>
                <div className="text-tenth">
                  <input
                    type="text"
                    id="tenth"
                    className="textst"
                    required {...register("tenth")}
                  />
                </div>
              </div>
              <div className="twelth">
                <div className="twelth-label">
                  <label for="twelfth">Twelfth :</label>
                </div>
                <div className="text-twelth">
                  <input
                    type="text"
                    id="twelfth"
                    className="textst"
                    required {...register("twelth")}
                  />
                </div>
              </div>
            </div>
            <div className="sub">
              <Button className="sub-but-student" type="submit" onClick={onClose}>
                Submit
              </Button>
            </div>
          </form>

          </div>
        </div>

      </div>









      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className="name_branch">
              <div className="name">
                <div className="title-name">
                  <label for="title">Full Name :</label>
                </div>
                <div className="text-name">
                  <input
                    id="title"
                    className="textst"
                    type="text"
                    required {...register("fullname")}
                  />
                </div>
              </div>
              <div className="branch">
                <div className="branch-label">
                  <label for="branch">Branch :</label>
                </div>
                <div className="text-branch">
                  <input
                    id="branch"
                    type="text"
                    className="textst"
                    required {...register("branch")}
                  />
                </div>
              </div>
            </div>
            <div className="id_class">
              <div className="id">
                <div className="id-label">
                  <label for="id">Student ID :</label>
                </div>
                <div className="text-id">
                  <input
                    type="text"
                    id="id"
                    className="textst"
                    required {...register("studentid")}
                  />
                </div>
              </div>
              <div className="class">
                <div className="class-label">
                  <label for="class">Class :</label>
                </div>
                <div className="text-class">
                  <input
                    type="text"
                    id="class"
                    className="textst"
                    required {...register("class")}
                  />
                </div>
              </div>
            </div>
            <div className="sem_email">
              <div className="sem">
                <div className="sem-label">
                  <label for="sem">Semester :</label>
                </div>
                <div className="text-sem">
                  <input
                    type="text"
                    id="sem"
                    className="textst"
                    required {...register("semester")}
                  />
                </div>
              </div>
              <div className="email">
                <div className="email-label">
                  <label for="email">Email ID :</label>
                </div>
                <div className="text-email">
                  <input
                    type="text"
                    id="email"
                    className="textst"
                    required {...register("emailid")}
                  />
                </div>
              </div>
            </div>
            <div className="mob_dob">
              <div className="mob">
                <div className="mob-label">
                  <label for="mobno">Mobile no :</label>
                </div>
                <div className="text-mob">
                  <input
                    type="text"
                    id="mobno"
                    className="textst"
                    required {...register("mobno")}
                  />
                </div>
              </div>
              <div className="dob">
                <div className="dob-label">
                  <label for="dob">DOB :</label>
                </div>
                <div className="text-dob">
                  <input
                    type="date"
                    id="dob"
                    className="textst"
                    required {...register("dob")}
                  />
                </div>
              </div>
            </div>
            <div className="address">
              <div className="address-label">
                <label for="add">Address :</label>
              </div>
              <div className="text-address">
                <textarea
                  className="textaddress"
                  id="add"
                  required {...register("address")}
                />
              </div>
            </div>
            <div className="street_city">
              <div className="street">
                <div className="street-label">
                  <label for="street">Street :</label>
                </div>
                <div className="text-street">
                  <input
                    type="text"
                    id="street"
                    className="textst"
                    required {...register("street")}
                  />
                </div>
              </div>
              <div className="city">
                <div className="city-label">
                  <label for="city">City :</label>
                </div>
                <div className="text-city">
                  <input
                    type="text"
                    id="city"
                    className="textst"
                    required {...register("city")}
                  />
                </div>
              </div>
            </div>
            <div className="dis_pin">
              <div className="district">
                <div className="district-label">
                  <label for="dis">District :</label>
                </div>
                <div className="text-district">
                  <select className="district-list" id="dis" required {...register("district")}>
                  <option></option>
                  <option>Alappuzha</option>
                  <option>Ernakulam</option>
                  <option>Idukki</option>
                  <option>Kannur</option>
                  <option>Kasaragod</option>
                  <option>Kollam</option>
                  <option>Kottayam</option>
                  <option>Kozhikode</option>
                  <option>Malappuram</option>
                  <option>Palakkad</option>
                  <option>Pathanamthitta</option>
                  <option>Thiruvananthapuram</option>
                  <option>Thrissur</option>
                  <option>Wayanad</option>

                  </select>
                </div>
              </div>
              <div className="pin">
                <div className="pin-label">
                  <label for="pin">Pin Code :</label>
                </div>
                <div className="text-pin">
                  <input
                    type="text"
                    id="pin"
                    className="textst"
                    required {...register("pincode")}
                  />
                </div>
              </div>
            </div>
            <div className="cgpa_nback">
              <div className="cgpa">
                <div className="cgpa-label">
                  <label for="cgpa">CGPA :</label>
                </div>
                <div className="text-cgpa">
                  <input
                    type="text"
                    id="cgpa"
                    className="textst"
                    required {...register("cgpa")}
                  />
                </div>
              </div>
              <div className="nbacklog">
                <div className="nbacklog-label">
                  <label for="backlog">No. of Backlogs :</label>
                </div>
                <div className="text-nbacklog">
                  <input
                    type="text"
                    id="backlog"
                    className="textst"
                    required {...register("noofbacklogs")}
                  />
                </div>
              </div>
            </div>
            <div className="his_link">
              <div className="sthistory">
                <div className="history-label">
                  <label for="history">History of Backlogs :</label>
                </div>
                <div className="text-history">
                  <input
                    type="text"
                    id="history"
                    className="textst"
                    required {...register("historyofbacklogs")}
                  />
                </div>
              </div>
              <div className="link">
                <div className="link-label">
                  <label for="link">Resume Link :</label>
                </div>
                <div className="text-link">
                  <input
                    type="text"
                    id="link"
                    className="textst"
                    required {...register("resumelink")}
                  />
                </div>
              </div>
            </div>
            <div className="coc_amcat">
              <div className="cocubes">
                <div className="cocubes-label">
                  <label for="cocubes">Cocubes Score :</label>
                </div>
                <div className="text-cocubes">
                  <input
                    type="text"
                    id="cocubes"
                    className="textst"
                    required {...register("cocubesscore")}
                  />
                </div>
              </div>
              <div className="amcat">
                <div className="amcat-label">
                  <label for="amcat">Amcat Score :</label>
                </div>
                <div className="text-amcat">
                  <input
                    type="text"
                    id="amcat"
                    className="textst"
                    required {...register("amcatscore")}
                  />
                </div>
              </div>
            </div>
            <div className="tenth_twelth">
              <div className="tenth">
                <div className="tenth-label">
                  <label for="tenth">Tenth Score :</label>
                </div>
                <div className="text-tenth">
                  <input
                    type="text"
                    id="tenth"
                    className="textst"
                    required {...register("tenth")}
                  />
                </div>
              </div>
              <div className="twelth">
                <div className="twelth-label">
                  <label for="twelfth">Twelfth :</label>
                </div>
                <div className="text-twelth">
                  <input
                    type="text"
                    id="twelfth"
                    className="textst"
                    required {...register("twelth")}
                  />
                </div>
              </div>
            </div>
            <div className="sub">
              <Button className="sub-but-student" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal> */}
    </>
  );
    }
}
export default EditStudent;