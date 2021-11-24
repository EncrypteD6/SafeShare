import "./Homepage.css";
import { Link } from "react-router-dom";
import LogOut from "../LogOut/LogOut";

export default function Homepage(props) {
  return (
    <>
      {props.user ? (
        <>
          <div className="homepage">
            <h1>Safe Share</h1>
            <p>
              Introducing the file sharing platform.
              <br />A convinient way to share files
              <br />
              in seconds.
            </p>
            <Link to="/Share">
              <button className="btn" id="btn1">
                Share
              </button>
            </Link>
            <br />
            <Link to="/Receive">
              <button className="btn" id="btn2">
                Receive
              </button>
            </Link>
          </div>
        </>
      ) : (
        <LogOut />
      )}
    </>
  );
}

/*
          <img
            src="./asset/home1.jpeg"
            className="background"
            alt="Home Background"
          ></img>
          */
