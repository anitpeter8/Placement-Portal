import axios from "axios";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authcontext";
import { Jobscontext } from "../context/Jobscontext";
import { userStudent } from "../context/userStudentContext";
import "../css/Login.css";

function Login() {
  const {dispatch}=useContext(Jobscontext);
  //context things
  const context = useContext(userStudent);
  const navigate=useNavigate();
  const { student, dispatchstudent } = useContext(userStudent);
  useEffect(()=>{
    // const student= localStorage.getItem('student');
    // if(student){

    //   dispatchstudent({ type: "SETSTUDENTUSER", payload: student });
    //   navigate('/Student/Announcements');
    // }
    
  },[])
  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user, dispatchRoleStudent } = authcontext;
 


  const [loginboolean, setboolean] = useState("login");
  const [email, setEmail] = useState("");
  const [realotp, setOtp] = useState(null);
  const [unrealotp, setotp] = useState(null);
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [error, setError] = useState(null);
  const [emailid, setEmailid] = useState("");
  const [password, setpassword] = useState("");

  const submitmail = (e) => {
    e.preventDefault();
    console.log("helloooo otp");
    const emailid = { emailid: email };
    axios
      .post("http://localhost:9000/otp", emailid)
      .then((response) => {
        console.log(response.data);
        setOtp(response.data.otp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Handlesubmit1 = (e) => {
    e.preventDefault();
    console.log(realotp, unrealotp);
    if (realotp == unrealotp) {
      console.log("otp verified");
      setboolean("register2");
    } else {
      console.log("failed");
    }
  };
  const Handlesubmit2 = (e) => {
    e.preventDefault();
    if (password1 == password2) {
      const user = { emailid: email, password: password1, role: "student" };
      console.log(user);
      axios
        .post("http://localhost:9000/roles", user)
        .then((response) => {
          console.log(response.data);
          navigate("/registration");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("not same passwords");
    }
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/roles/login", { email: emailid, password })
      .then((res) => {
        console.log(res.data);
        dispatchRoleStudent({ type: "LOGIN", payload: res.data });
      
        axios.get('http://localhost:9000/api/jobs').then((response)=>{
          dispatch({type:'SETJOBS',payload:response.data});
        })
        axios.get('http://localhost:9000/api/announcements',
        { headers: { 'Authorization': `Basic ${user.token}` }}
        ).then((response)=>{
          dispatch({type:'SETANNOUNCEMENTS',payload:response.data});
        })
        if (res.data.user.role == "student") {
          axios
            .get(`http://localhost:9000/students/${res.data.user.emailid}`)
            .then((res) => {
              console.log(res.data);
              dispatchstudent({ type: "SETSTUDENTUSER", payload: res.data });
              localStorage.setItem("studentuser",JSON.stringify(res.data));
            });
          navigate("/student/Announcements");
        } else if (res.data.user.role == "faculty") {
          navigate("/faculty/Announcements");
        } else if (res.data.user.role == "admin") {
          navigate("/admin/Announcements");
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setError(error.response.data.error);
      });
  };

  return (
    <div className="main">
      <div className="containercss">
        <div className="container--row-1">
          <p className="headercss">
            Muthoot Institute of Technology and Science
          </p>
        </div>
        <div className="container--row-2">
          <div className="container-intro">
            <h2>Welcome to</h2>
            <h1>
              MITS<br></br> Placement Portal
            </h1>
            <h2>where hardwork meets results</h2>
          </div>
          <div className="container--loginReg">
            <div className="container--loginReg__card">
              {loginboolean == "login" && (
                <>
                  <h4>Login</h4>
                  <form>
                    <div className="email">
                      <p>Email</p>
                      <input
                        type="text"
                        className="log_mail"
                        placeholder=" example@mgits.ac.in"
                        onChange={(e) => {
                          setEmailid(e.target.value);
                        }}
                      />
                    </div>
                    <div className="password">
                      <p>Password</p>
                      <input
                        type="password"
                        className="log_pass"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </div>
                    {error && <p>{error}</p>}
                    <div className="subButton">
                      <button
                        type="submit"
                        onClick={LoginSubmit}
                        className="subBtn"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="newRegister">
                    <a
                      onClick={() => {
                        setboolean("register1");
                      }}
                    >
                      New user? Register here
                    </a>
                  </div>
                </>
              )}
              {loginboolean == "register1" && (
                <>
                  <h4>Verify Email</h4>
                  <form>
                    <div className="otp-mail">
                      <label>Email id :</label>
                    </div>
                    <div className="mail-tb">
                      <input
                        type="mail"
                        className="mail-textbox"
                        placeholder=" example@mgits.ac.in"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          console.log(email);
                        }}
                      />
                    </div>
                    <div className="send-otp-container">
                      <button className="send-otp-btn" onClick={submitmail}>
                        Send OTP
                      </button>
                    </div>
                    <div className="otp-label">
                      <label>OTP</label>
                    </div>
                    <div className="otp-box">
                      <input
                        type="number"
                        className="otp-textbox"
                        placeholder="enter otp"
                        onChange={(e) => {
                          setotp(e.target.value);
                          console.log(unrealotp);
                        }}
                      />
                    </div>
                    <div className="otp-confirm-box">
                      <button
                        type="submit"
                        className="confirm-btn"
                        onClick={Handlesubmit1}
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </>
              )}
              {loginboolean == "register2" && (
                <>
                  <h4>Set Your Password</h4>
                  <form>
                    <div className="otp-mail">
                      <label>Email id :</label>
                    </div>
                    <div className="mail-tb">
                      <input
                        type="mail"
                        value={email}
                        className="mail-textbox"
                        disabled
                        onChange={(e) => {
                          setEmail(e.target.value);
                          console.log(email);
                        }}
                      />
                    </div>

                    <div className="send-otp-container">
                      <label>Password</label>
                      <input
                        type="text"
                        className="otp-textbox"
                        placeholder="enter password"
                        onChange={(e) => {
                          setpassword1(e.target.value);
                          console.log(password1);
                        }}
                      />
                    </div>

                    <div className="otp-box">
                      <input
                        type="text"
                        className="otp-textbox"
                        placeholder="re-enter password"
                        onChange={(e) => {
                          setpassword2(e.target.value);
                          console.log(password2);
                        }}
                      />
                    </div>
                    <div className="otp-confirm-box">
                      <button
                        type="submit"
                        className="confirm-btn"
                        onClick={Handlesubmit2}
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
