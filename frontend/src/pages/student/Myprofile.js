import { userStudent } from "../../context/userStudentContext";
import "../../css/Myprofile.css";
import { useForm, useFormContext } from 'react-hook-form';
import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Myprofile() {
  const { student, dispatchstudent } = useContext(userStudent);
  const Navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: student
  });
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:9000/students', data).then((response) => {
      console.log(response.data);
      dispatchstudent({ type: 'SETSTUDENTUSER', payload: response.data })
      Navigate('/student/Announcements');
    }).catch((error) => {
      console.log(error.message)
    })
  };
  return (
    <div class="myprofile">
        <div className="wrap">
          <h1 class="heading1">MY PROFILE</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="main1">
              <div class="details">
                <label for="name">Full Name:</label>
                <input type="text" id="name" class="name" name="fullname" required {...register('fullname')} disabled></input>
                <br></br>

                <label for="sem">Semester:</label>
                <input type="text" id="sem" name="semester" required {...register('semester')} disabled></input>
                <br></br>

                <label for="class">Class:</label>
                <input type="text" id="class" name="class" required {...register('class')} disabled></input>
                <br></br>

                <label for="email">Email id:</label>
                <input type="email" id="email" name="emailid" required {...register('emailid')} disabled></input>
                <br></br>

                <label for="address">Address:</label>
                <input type="text" id="address" name="address" required {...register('address')} disabled></input>
                <br></br>

                <label for="street">Street:</label>
                <input type="text" id="street" name="street" required  {...register('street')} disabled></input>
                <br></br>

                <label for="district">District:</label>
                <select name="district" id="district" required {...register('district')} disabled>
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
                <br></br>

                <label for="cgpa">CGPA:</label>
                <input type="text" id="cgpa" name="cgpa" required {...register('cgpa')} disabled></input>
                <br></br>

                <label for="cocubes">Cocubes Score:</label>
                <input type="text" id="cocubes" name="cocubesscore" required {...register('cocubesscore')} disabled></input>
                <br></br>

                <label for="twelth">12th Score:</label>
                <input type="number" id="twelth" name="twelth" required {...register('twelth')} disabled></input>
                <br></br>

                <label for="resume">Resume Link:</label>
                <input type="text" id="resume" name="resumelink" required {...register('resumelink')} disabled></input>
                <br></br>
              </div>

              <div class="details">
                <label for="id">Student ID:</label>
                <input type="text" id="id" class="name" name="studentid" required {...register('studentid')} disabled></input>
                <br></br>

                <label for="branch">Branch:</label>
                <select id="branch" name="branch" required {...register('branch')} disabled>
                  <option value="ALL">ALL</option>
                  <option value="CE">Civil Engineering</option>
                  <option value="CSE">Computer Science and Engineering</option>
                  <option value="CSE AI">Computer Science and Engineering Artificial Intelligence</option>
                  <option value="ECE">Electronics and Communication</option>
                  <option value="EEE">Electrical and Electronics</option>
                  <option value="ME">Mechanical Engineering</option>
                </select>
                <br></br>

                <label for="mob">Mobile no:</label>
                <input type="number" id="mob" name="mobno" required {...register('mobno')} disabled></input>
                <br></br>

                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" class="name" name="dob" required {...register('dob')} disabled></input>
                <br></br>

                <label for="city">City:</label>
                <input type="text" id="city" name="city" required {...register('city')} disabled></input>
                <br></br>

                <label for="pin">Pincode:</label>
                <input type="text" id="pin" name="pincode" required {...register('pincode')} disabled></input>
                <br></br>

                <label for="backlog">No. of backlogs:</label>
                <input type="text" id="backlog" name="name" required {...register('noofbacklogs')} disabled></input>
                <br></br>

                <label for="amcat">Amcat Score:</label>
                <input type="text" id="amcat" name="amcatscore" required {...register('amcatscore')} disabled></input>
                <br></br>

                <label for="tenth">10th Score:</label>
                <input type="number" id="tenth" name="tenth" required {...register('tenth')} disabled></input>
                <br></br>
   
              
              
                <div className="check">
                <label for="history" className="history1">Do you have any history of backlogs:</label>
                <input type="checkbox" className="history" name="historyofbacklogs" {...register('historyofbacklogs')} disabled></input>
              </div>
              
              </div>
            </div>
            <div class="button1">
              <button class="button">submit</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Myprofile;
