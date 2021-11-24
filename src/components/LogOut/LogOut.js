import "./LogOut.css";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div className="logout">
      <h1>Login to continue</h1>
      <Link to="/signin">SignIn</Link>
    </div>
  );
};

export default LogOut;
