
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Login.css"

function Login() {
 const navigate=useNavigate();
  const [loginboolean,setboolean]=useState(true);
  const [email,setEmail]=useState('')
  const [realotp,setOtp]=useState(null);
  const [unrealotp,setotp]=useState(null);



  const submitmail=(e)=>{
    e.preventDefault();
    const emailid={emailid:email}
    axios.post('http://localhost:5000/otp',emailid).then((response)=>{
      console.log(response.data)
      setOtp(response.data.otp);
    }).catch((error)=>{
      console.log(error);
    })
  }


  const Handlesubmit=(e)=>{
    e.preventDefault();
    console.log(realotp,unrealotp)
    if(realotp==unrealotp){
      console.log('verified');
     navigate('/registration')
    }
    else{
      console.log('failed')
    }

  }

  return (
    <body>

      <div className="containercss" >
        <div className="container--row-1">
          <p className="headercss">Muthoot Institute of Technology and Science</p>
        </div>
        <div className="container--row-2">
          <div className="container-intro">
            
            <h2>Welcome to <br />Mits Placement Portal</h2>
            <h4>where hardwork meets results</h4>
          </div>
          <div className="container--loginReg">
            <div className="container--loginReg__card">

              {loginboolean ?
                <>
                  <h4>Login</h4>
                  <form>
                    <p>Email</p>
                    <input />
                    <p>password</p>
                    <input />
                    <button>Submit</button>
                  </form>
                  <a onClick={()=>{
                    setboolean(false)
                  }}>if you are new user register here</a>
                </>
                :
                <>
                  <h4>Submit</h4>
                  <form>
                  <label>email id:</label>
      <input type='mail' placeholder="email" onChange={(e)=>{
           setEmail(e.target.value)
           console.log(email)
      }}/>
      <button onClick={submitmail}>send otp</button>
      <label>otp</label>
      <input type="number" placeholder="otp" onChange={(e)=>{
        setotp(e.target.value);
        console.log(unrealotp)
      }}/>
      <button type='submit' onClick={Handlesubmit}>confirm</button>
    
                  </form>

                </>
}
             
            </div>
          </div>

        </div>
      </div>
    </body>
  );
}

export default Login;
