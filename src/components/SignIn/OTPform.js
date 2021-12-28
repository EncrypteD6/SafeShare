const OTPform = (props) => {
  if (props.err) {
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").innerHTML = props.err;
    setTimeout(function () {
      document.getElementById("alert").style.display = "none";
    }, 3000);
  }
  return (
    <div className="form-wrapper" onSubmit={props.otpSubmit}>
      <form id="otpForm">
        <div>
          <input
            className="un"
            align="center"
            type="text"
            placeholder="Enter OTP"
            name="otp_value"
          />
        </div>
        <button className="submit" type="submit">
          Verify OTP
        </button>
      </form>
      <div id="alert"></div>
    </div>
  );
};

export default OTPform;
