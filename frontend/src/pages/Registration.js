import { useState, useContext } from "react";
import "../css/Registration.css";
import { userStudent } from "../context/userStudentContext";
import { useForm, useFormContext } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
    const { student, dispatchstudent } = useContext(userStudent);
    const Navigate = useNavigate();
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("http://localhost:9000/students", data)
            .then((response) => {
                console.log(response.data);
                dispatchstudent({ type: "SETSTUDENTUSER", payload: response.data });
                Navigate("/student/Announcements");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
      <div className="registration">
        <div className="reg-box">
          <h1 className="head">Student Registration</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="reg-form">
              <div className="columns">
                <label for="fullname">Full Name :</label>
                <input
                  type="text"
                  name="fullname"
                  class="fullname"
                  placeholder=""
                  {...register("fullname")}
                ></input>
                <br></br>
                <label for="semester">Semester :</label>
                <input
                  type="text"
                  name="semester"
                  class="semester"
                  placeholder=" "
                  {...register("semester")}
                ></input>
                <br></br>
                <label for="email">Email ID :</label>
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  {...register("emailid")}
                ></input>
                <br></br>
                <label for="address">Address :</label>
                <input
                  type="text"
                  name="address"
                  placeholder=" "
                  {...register("address")}
                ></input>
                <br></br>
                <label for="street">Street :</label>
                <input
                  type="text"
                  name="street"
                  placeholder=" "
                  {...register("street")}
                ></input>
                <br></br>
                <label for="district">District :</label>
                <select
                  name="district"
                  id="district"
                  required
                  {...register("district")}
                >
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
                <label for="cgpa">CGPA :</label>
                <input
                  type="number"
                  name="cgpa"
                  placeholder=" "
                  {...register("cgpa")}
                ></input>
                <br></br>
                <label for="cocubesscore">Cocubes Score :</label>
                <input
                  type="number"
                  name="cocubesscore"
                  placeholder=" "
                  {...register("cocubesscore")}
                ></input>
                <br></br>
                <label for="tenth">10th Score :</label>
                <input
                  type="number"
                  name="tenth"
                  placeholder=" "
                  {...register("tenth")}
                ></input>
                <br></br>
                <label for="resume-link">Resume Link :</label>
                <input
                  type="text"
                  name="resume-link"
                  placeholder=" "
                  {...register("resumelink")}
                ></input>
              </div>
              <div className="columns">
                <label for="sid">Student ID :</label>
                <input
                  type="text"
                  name="sid"
                  placeholder=" "
                  {...register("studentid")}
                ></input>
                <br></br>
                <label for="branch">Branch :</label>
                <select id="branch" name="branch" {...register("branch")}>
                  <option value="ALL">ALL</option>
                  <option value="CE">Civil Engineering</option>
                  <option value="CSE">Computer Science and Engineering</option>
                  <option value="CSE AI">
                    Computer Science and Engineering Artificial Intelligence
                  </option>
                  <option value="ECE">Electronics and Communication</option>
                  <option value="EEE">Electrical and Electronics</option>
                  <option value="ME">Mechanical Engineering</option>
                </select>
                <br></br>
                <label for="mobno">Mobile No. :</label>
                <input
                  type="number"
                  name="mobno"
                  placeholder=" "
                  {...register("mobno")}
                ></input>
                <br></br>
                <label for="dob">DOB :</label>
                <input
                  type="date"
                  name="dob"
                  placeholder=" "
                  {...register("dob")}
                ></input>
                <br></br>
                <label for="city">City :</label>
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  {...register("city")}
                ></input>
                <br></br>
                <label for="pincode">Pincode :</label>
                <input
                  type="number"
                  name="pincode"
                  placeholder=" "
                  {...register("pincode")}
                ></input>
                <br></br>
                <label for="noofbacklogs">No of Backlogs :</label>
                <input
                  type="number"
                  name="noofbacklogs"
                  placeholder=" "
                  {...register("noofbacklogs")}
                ></input>
                <br></br>
                <label for="amcatscore">Amcat Score :</label>
                <input
                  type="number"
                  name="amcatscore"
                  placeholder=" "
                  {...register("amcatscore")}
                ></input>
                <br></br>
                <label for="twelth">12th Score :</label>
                <input
                  type="number"
                  name="twelth"
                  placeholder=" "
                  {...register("twelth")}
                ></input>
                <br></br>
                <div className="input-history">
                  <label className="history-label" for="history">
                    Do you have any history of backlogs:
                  </label>
                  <input
                    type="checkbox"
                    className="history-box"
                    name="history"
                    {...register("historyofbacklogs")}
                  ></input>
                </div>
                <br></br>
              </div>
            </div>
            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
};
export default Registration;
