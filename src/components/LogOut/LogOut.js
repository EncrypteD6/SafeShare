import "./LogOut.css";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div className="logout">
      <h1 className="heading">Login to continue</h1>
      <Link className="submi" to="/signin">
        SignIn
      </Link>
    </div>
  );
};

export default LogOut;
