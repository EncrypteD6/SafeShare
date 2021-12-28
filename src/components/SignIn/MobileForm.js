import "./form.css";

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
        <div>
          <input
            align="center"
            className="un"
            type="text"
            placeholder="Phone Number"
            name="phone"
          />
        </div>
        <button
          align="center"
          className="submit"
          type="submit"
          id="sign-in-button"
        >
          Sign in
        </button>
      </form>
      <div id="alert"></div>
    </div>
  );
};

export default MobileForm;
