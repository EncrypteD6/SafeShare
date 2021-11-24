import { useState, useEffect } from "react";
import Homepage from "./components/Hompage/Homepage";
import Share from "./components/Share/Share";
import Receive from "./components/Receive/Receive";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import { auth } from "./firebase_config/firebase_config";
import {
  RecaptchaVerifier,
  signOut,
  signInWithPhoneNumber,
} from "firebase/auth";

function App() {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
        },
        defaultCountry: "IN",
      },
      auth
    );
  }, []);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    let phoneNumber = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        setErr("Error occured please try again later");
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let otp_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(otp_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        setErr("Invalid OTP or OTP has expired please try again");
      });
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        setUser(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Router>
      <div id="recaptcha-container"></div>
      {user ? <NavBar signOut={signOutHandler} /> : <div></div>}
      <Switch>
        <Route exact path="/">
          <Homepage user={user} />
        </Route>
        <Route path="/signin" exact>
          <SignIn
            loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm}
            err={err}
          />
        </Route>
        <Route path="/Share">
          <Share user={user} />
        </Route>
        <Route path="/Receive">
          <Receive user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
bg img css in index css
background-image: url("https://firebasestorage.googleapis.com/v0/b/fir-react-upload-df25b.appspot.com/o/61mrvBzGbGDy65%2FR.jpg?alt=media&token=78193bde-7612-4c13-acbd-d4bf732a253e");
*/
