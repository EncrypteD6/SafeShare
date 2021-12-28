import React from "react";
import "./SignIn.css";
import MobileForm from "./MobileForm";
import OTPform from "./OTPform";

const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm, err }) => {
  if (err) {
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").innerHTML = err;
    setTimeout(function () {
      document.getElementById("alert").style.display = "none";
    }, 3000);
  }

  return (
    <div className="main">
      <h1 className="sign" align="center">Sign in</h1>
      <p align="center">Sign in using your mobile number.</p>
      {!viewOtpForm ? (
        <MobileForm loginSubmit={loginSubmit} err={err} />
      ) : (
        <OTPform otpSubmit={otpSubmit} err={err} />
      )}
    </div>
  );
};

export default SignIn;
