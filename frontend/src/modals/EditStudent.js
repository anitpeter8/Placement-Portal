import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "./EditStudent.css";

function EditStudent({ student }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(student.fullname);
  const [branch, setBranch] = useState(student.branch);
  const [studentid, setId] = useState(student.studentid);
  const [sclass, setClass] = useState(student.class);
  const [semester, setSemester] = useState(student.semester);
  const [emailid, setEmail] = useState(student.emailid);
  const [mobno, setMobno] = useState(student.mobno);
  const [address, setAddress] = useState(student.address);
  const [dob, setDob] = useState(student.dob);
  const [street, setStreet] = useState(student.street);
  const [city, setCity] = useState(student.city);
  const [district, setDistrict] = useState(student.district);
  const [pincode, setPinCode] = useState(student.pincode);
  const [cgpa,setCgpa] = useState(student.cgpa);
  const [noofbacklogs, setNoofBacklogs] = useState(student.noofbacklogs);
  const [historyofbacklogs, setHistoryofBacklogs] = useState(student.historyofbacklogs);
  const [cocubesscore, setCocubesScore] = useState(student.cocubesscore);
  const [amcatscore, setAmcatScore] = useState(student.amcatscore);
  const [tenth, setTenth] = useState(student.tenth);
  const [twelth, setTwelth] = useState(student.twelth);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(student.fullname,student.branch);
    const sid = student.id;
    const studentee = {name,branch }
    axios.patch('http://localhost:9000/students' + sid, studentee).then((response) => {
      console.log(response.data);
      console.log('vishayam')

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Button variant="primary" style={{ backgroundColor: '#3A8ECB', height: '35px', width: '90px' }} onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       <Modal.Header closeButton>
          
          <Modal.Title >Edit Student Details</Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className='name_branch'>
            <div className='name'>
            <div className='title-name'>
            <label>Full Name :</label>
            </div>
            <div className='text-name'>
            <input className='textst' type='text' value={name} onChange={(e) =>
              setName(e.target.value)
            } />
            </div>
            </div>
            <div className='branch'>
            <div className='branch-label'>
            <label>Branch :</label></div>
            <div className='text-branch'>
            <input type='text' className='textst' value={branch} onChange={(e) =>
              setBranch(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='id_class'>
            <div className='id'>
            <div className='id-label'>
            <label>Student ID :</label></div>
            <div className='text-id'>
            <input type='text' className='textst' value={studentid} onChange={(e) =>
              setId(e.target.value)
            } />
            </div>
            </div>
            <div className='class'>
            <div className='class-label'>
            <label>Class :</label></div>
            <div className='text-class'>
            <input type='text' className='textst' value={sclass} onChange={(e) =>
              setClass(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='sem_email'>
            <div className='sem'>
            <div className='sem-label'>
            <label>Semester :</label></div>
            <div className='text-sem'>
            <input type='text' className='textst' value={semester} onChange={(e) =>
              setSemester(e.target.value)
            } />
            </div>
            </div>
            <div className='email'>
            <div className='email-label'>
            <label>Email ID :</label></div>
            <div className='text-email'>
            <input type='text' className='textst' value={emailid} onChange={(e) =>
              setEmail(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='mob_dob'>
            <div className='mob'>
            <div className='mob-label'>
            <label>Mobile no :</label></div>
            <div className='text-mob'>
            <input type='text' className='textst' value={mobno} onChange={(e) =>
              setMobno(e.target.value)
            } />
            </div>
            </div>
            <div className='dob'>
            <div className='dob-label'>
            <label>DOB :</label></div>
            <div className='text-dob'>
            <input type='text' className='textst' value={dob} onChange={(e) =>
              setDob(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='address'>
            <div className='address-label'>
            <label>Address :</label></div>
            <div className='text-address'>
            <textarea className='textaddress' value={address} onChange={(e) =>
              setAddress(e.target.value)
            } />
            </div>
            </div>
            <div className='street_city'>
            <div className='street'>
            <div className='street-label'>
            <label>Street :</label></div>
            <div className='text-street'>
            <input type='text' className='textst' value={street} onChange={(e) =>
              setStreet(e.target.value)
            } />
            </div>
            </div>
            <div className='city'>
            <div className='city-label'>
            <label>City :</label></div>
            <div className='text-city'>
            <input type='text' className='textst' value={city} onChange={(e) =>
              setCity(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='dis_pin'>
            <div className='district'>
            <div className='district-label'>
            <label>District :</label></div>
            <div className='text-district'>
            <input type='text' className='textst' value={district} onChange={(e) =>
              setDistrict(e.target.value)
            } />
            </div>
            </div>
            <div className='pin'>
            <div className='pin-label'>
            <label>Pin Code :</label></div>
            <div className='text-pin'>
            <input type='text' className='textst' value={pincode} onChange={(e) =>
              setPinCode(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='cgpa_nback'>
            <div className='cgpa'>
            <div className='cgpa-label'>
            <label>CGPA :</label></div>
            <div className='text-cgpa'>
            <input type='text' className='textst' value={cgpa} onChange={(e) =>
              setCgpa(e.target.value)
            } />
            </div>
            </div>
            <div className='nbacklog'>
            <div className='nbacklog-label'>
            <label>No. of Backlogs :</label></div>
            <div className='text-nbacklog'>
            <input type='text' className='textst' value={noofbacklogs} onChange={(e) =>
              setNoofBacklogs(e.target.value)
            } />
            </div>
            </div>
            </div>
            
            <label className='label_his'>History of Backlogs :</label>
            <div className='text-history'>
            <input type='text' className='textst' value={historyofbacklogs} onChange={(e) =>
              setHistoryofBacklogs(e.target.value)
            } />
            </div>
            
            <div className='coc_amcat'>
            <div className='cocubes'>
            <div className='cocubes-label'>
            <label>Cocubes Score :</label></div>
            <div className='text-cocubes'>
            <input type='text' className='textst' value={cocubesscore} onChange={(e) =>
              setCocubesScore(e.target.value)
            } />
            </div>
            </div>
            <div className='amcat'>
            <div className='amcat-label'>
            <label>Amcat Score :</label></div>
            <div className='text-amcat'>
            <input type='text' className='textst' value={amcatscore} onChange={(e) =>
              setAmcatScore(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='tenth_twelth'>
            <div className='tenth'>
            <div className='tenth-label'>
            <label>Tenth Score :</label></div>
            <div className='text-tenth'>
            <input type='text' className='textst' value={tenth} onChange={(e) =>
              setTenth(e.target.value)
            } />
            </div>
            </div>
            <div className='twelth'>
            <div className='twelth-label'>
            <label>Twelfth :</label></div>
            <div className='text-twelth'>
            <input type='text' className='textst' value={twelth} onChange={(e) =>
              setTwelth(e.target.value)
            } />
            </div>
            </div>
            </div>
            <div className='sub'>
            <button className='sub-but-student'  type='submit'>Submit</button>
            </div>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default EditStudent;