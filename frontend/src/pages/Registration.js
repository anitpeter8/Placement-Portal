import { useState,useContext } from "react";
import "../css/Registration.css";
import { userStudent } from '../context/userStudentContext';
import { useForm, useFormContext } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
    const {student,dispatchstudent}=useContext(userStudent);
   const Navigate=useNavigate();
    const { handleSubmit, register } = useForm();
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
        <>
            <div className="registration">
                <div className="reg-box">
                    <div className="head">
                        <h2>Student Registration</h2>
                    </div>
                    <div className="reg-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="fname">Full Name :</label>
                                    <input type="text" name="fname" placeholder="" {...register('fullname')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="sid">Student ID :</label>
                                    <input type="text" name="sid" placeholder=" " {...register('studentid')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="semester">Semester :</label>
                                    <input type="text" name="semester" placeholder=" " {...register('semester')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="branch">Branch :</label>
                                    <input type="text" name="branch" placeholder=" " {...register('branch')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="email">Email ID :</label>
                                    <input type="email" name="email" placeholder=" " {...register('emailid')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="mobno">Mobile No. :</label>
                                    <input type="number" name="mobno" placeholder=" " {...register('mobno')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="address">Address :</label>
                                    <input type="text" name="address" placeholder=" " {...register('address')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="dob">DOB :</label>
                                    <input type="date" name="dob" placeholder=" " {...register('dob')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="street">Street :</label>
                                    <input type="text" name="street" placeholder=" " {...register('street')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="city">City :</label>
                                    <input type="text" name="city" placeholder=" " {...register('city')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="district">District :</label>
                                    <input type="text" name="district" placeholder=" " {...register('district')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="pincode">Pincode :</label>
                                    <input type="number" name="pincode" placeholder=" " {...register('pincode')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="cgpa">CGPA :</label>
                                    <input type="number" name="cgpa" placeholder=" " {...register('cgpa')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="noofbacklogs">No of Backlogs :</label>
                                    <input type="number" name="noofbacklogs" placeholder=" " {...register('noofbacklogs')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="cocubesscore">Cocubes Score :</label>
                                    <input type="number" name="cocubesscore" placeholder=" " {...register('cocubesscore')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="amcatscore">Amcat Score :</label>
                                    <input type="number" name="amcatscore" placeholder=" " {...register('amcatscore')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="tenth">10th Score :</label>
                                    <input type="number" name="tenth" placeholder=" " {...register('tenth')}></input>
                                </div>
                                <div className="input-field">
                                    <label for="twelth">12th Score :</label>
                                    <input type="number" name="twelth" placeholder=" " {...register('twelth')}></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-field">
                                    <label for="resume-link">Resume Link :</label>
                                    <input type="text" name="resume-link" placeholder=" " {...register('resumelink')}></input>
                                </div>
                                <div className="input-history">
                                    <label for="history">Do you have any history of backlogs:</label>
                                    <input type="checkbox" className="history" name="history" {...register('historyofbacklogs')}></input>
                                </div>
                            </div>
                            <div className="submit-button">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Registration;
