import { userStudent } from "../../context/userStudentContext";
import "../../css/Myprofile.css";
import { useForm, useFormContext } from 'react-hook-form';
import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Myprofile() {
  const {student,dispatchstudent}=useContext(userStudent);
  const Navigate=useNavigate();
   const { handleSubmit, register } = useForm({
    defaultValues:student
   });
   const onSubmit = (data) => {
       console.log(data);
       axios.post('http://localhost:9000/students',data).then((response)=>{
           console.log(response.data);
           dispatchstudent({type:'SETSTUDENTUSER',payload:response.data})
       Navigate('/student/Announcements');
       }).catch((error)=>{
           console.log(error.message)
       })
      };
  return (
    <div class="myprofile">
      <div class="profile">
      <div className="wrap">
        <h1 class="heading1">MY PROFILE</h1>
        
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="main1">
              <div class="details">
                <label for="name">Full Name:</label>
                <input type="text" id="name" class="name" name="fullname" required {...register('fullname')}></input>
                <br></br>

                <label for="sem">Semester:</label>
                <input type="text" id="sem" name="name" required></input>
                <br></br>

                <label for="class">Class:</label>
                <input type="text" id="class" class="name" required></input>
                <br></br>

                <label for="email">Email id:</label>
                <input type="email" id="email" name="name" required></input>
                <br></br>

                <label for="address">Address:</label>
                <input type="text" id="address" name="name" required></input>
                <br></br>

                <label for="street">Street:</label>
                <input type="text" id="street" name="name" required></input>
                <br></br>

                <label for="district">District:</label>
                <select name="district" id="district" required>
                  <option value="0"></option>
                  <option value="1">Alappuzha</option>
                  <option value="2">Ernakulam</option>
                  <option value="3">Idukki</option>
                  <option value="4">Kannur</option>
                  <option value="5">Kasaragod</option>
                  <option value="6">Kollam</option>
                  <option value="7">Kottayam</option>
                  <option value="8">Kozhikode</option>
                  <option value="9">Malappuram</option>
                  <option value="10">Palakkad</option>
                  <option value="11">Pathanamthitta</option>
                  <option value="12">Thiruvananthapuram</option>
                  <option value="13">Thrissur</option>
                  <option value="14">Wayanad</option>
                </select>
                <br></br>

                <label for="cgpa">CGPA:</label>
                <input type="text" id="cgpa" name="name" required></input>
                <br></br>

                <label for="cocubes">Cocubes Score:</label>
                <input type="text" id="cocubes" name="name" required></input>
                <br></br>

                <label for="twelth">12th Score:</label>
                <input type="text" id="twelth" name="name" required></input>
                <br></br>

                <label for="resume">Resume Link:</label>
                <input type="text" id="resume" name="name" required></input>
                <br></br>
              </div>

              <div class="details">
                <label for="id">Student ID:</label>
                <input type="text" id="id" class="name" required></input>
                <br></br>

                <label for="branch">Branch:</label>
                <select id="branch" name="name" required>
                  <option value="0"></option>
                  <option value="1">Civil Engineering</option>
                  <option value="2">Computer Science and Engineering</option>
                  <option value="3">Electrical and Electronics</option>
                  <option value="4">Electronics and Communication</option>
                  <option value="5">Mechanical Engineering</option>
                  <option value="6">Basic Science and Humanities</option>
                  <option value="7">
                    Artificial Intelligence & Data Science
                  </option>
                  <option value="8">Computer Applications</option>
                </select>
                <br></br>

                <label for="mob">Mobile no:</label>
                <input type="text" id="mob" name="name" required></input>
                <br></br>

                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" class="name" required></input>
                <br></br>

                <label for="city">City:</label>
                <input type="text" id="city" name="name" required></input>
                <br></br>

                <label for="pin">Pincode:</label>
                <input type="text" id="pin" name="name" required></input>
                <br></br>

                <label for="backlog1">History of Backlog:</label>
                <input type="backlog1" id="mob" name="name" required></input>
                <br></br>

                <label for="backlog">No. of backlogs:</label>
                <input type="text" id="backlog" name="name" required></input>
                <br></br>

                <label for="amcat">Amcat Score:</label>
                <input type="text" id="amcat" name="name" required></input>
                <br></br>

                <label for="tenth">10th Score:</label>
                <input type="text" id="tenth" name="name" required></input>
                <br></br>
              </div>
            </div>
            <div class="button1">
              <button class="button">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
