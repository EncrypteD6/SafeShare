import React from "react";
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
    <div className="wrapper">
      <h1 className="main-heading">Sign in</h1>
      <p className="sub-text">Sign in using your mobile number.</p>
      {!viewOtpForm ? (
        <MobileForm loginSubmit={loginSubmit} err={err} />
      ) : (
        <OTPform otpSubmit={otpSubmit} err={err} />
      )}
    </div>
  );
};

export default SignIn;
