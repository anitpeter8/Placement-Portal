import React, { useState } from "react";
import "../css/Login.css";

function Login() {
    const [showLogin, setShowLogin] = useState(true);
    const [showOTP, setShowOTP] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowOTP(false);
    };

    const handleRegisterClick = () => {
        setShowLogin(false);
        setShowOTP(false);
    };

    const handleConfirmClick = () => {
        setShowLogin(false);
        setShowOTP(true);
    };

    return (
        <div className="main">
                <div className="heading">
                    <h3 className="heading">
                        Muthoot Institute of Technology and Science
                    </h3>
                </div>
                <div className="container">
                <div className="portal">
                    <h3 className="first">Welcome to</h3>
                    <h1 className="mainhead">MITS Placement Portal</h1>
                    <p className="first">where hardwork meets result</p>
                </div>

            <div className="sub">
                {showLogin ? (
                    <LoginComponent onRegisterClick={handleRegisterClick} />
                ) : showOTP ? (
                    <OTPComponent onLoginClick={handleLoginClick} />
                ) : (
                    <RegisterComponent onConfirmClick={handleConfirmClick} />
                )}
            </div>
        </div>
    </div>
    );
}

// Login component
function LoginComponent({ onRegisterClick, onConfirmClick }) {
    return (
        <div className="login">
            <h2 className="login1">Login</h2>
            <div className="details">
                <label>Username</label>
                <input
                    type="email"
                    placeholder="Username@gmail.com"
                    className="email"
                />
                <label>Password</label>
                <input type="password" placeholder="Password" className="password" />
                <p className="forgot"> Forgot Password? </p>
            </div>
            <div>
                <button className="button">Sign in</button>
                <div className="account">
                    <div className="pas">
                        <p>Don't have an account?</p>
                    </div>
                    <button className="button register-button" onClick={onRegisterClick}>
                        Register Here
                    </button>
                </div>
            </div>
        </div>
    );
}

// Register component
function RegisterComponent({ onConfirmClick, onLoginClick }) {
    return (
        <div className="register">
            <h2 className="login1">Register</h2>
            <div className="details">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Username@gmail.com"
                    className="email"
                ></input>
            </div>
            <div>
                <button className="button" onClick={onConfirmClick}>
                    Confirm
                </button>
            </div>
        </div>
    );
}

// OTP component
function OTPComponent({ onLoginClick }) {
    return (
        <div className="otp">
            <h2 className="login1">OTP</h2>
            <div className="details">
                <label>Enter the OTP</label>
                <input type="text" placeholder="otp" className="otp1"></input>
            </div>
            <div>
                <button className="button" onClick={onLoginClick}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default Login;
