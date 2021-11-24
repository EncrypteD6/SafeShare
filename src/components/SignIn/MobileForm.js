const MobileForm = (props) => {
  if (props.err) {
    document.getElementById("alert").style.display = "block";
    document.getElementById("alert").innerHTML = props.err;
    setTimeout(function () {
      document.getElementById("alert").style.display = "none";
    }, 3000);
  }

  return (
    <div className="form-wrapper">
      <form id="loginForm" onSubmit={props.loginSubmit}>
        <div className="input-field">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone" name="phone" />
        </div>
        <button className="main-button" type="submit" id="sign-in-button">
          Sign in
        </button>
      </form>
      <div id="alert"></div>
    </div>
  );
};

export default MobileForm;
