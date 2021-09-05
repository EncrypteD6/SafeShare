import "./Homepage.css";
import NavBar from "../Navbar/Navbar";
export default function Homepage() {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="homepage">
        <h1>Safe Share</h1>
        <p>
          Introducing the file sharing platform.
          <br />A convinient way to share files
          <br />
          in seconds.
        </p>
        <button className="btn" id="btn1">
          Share
        </button>
        <br />
        <button className="btn" id="btn2">
          Receive
        </button>
      </div>
      <img
        src="./asset/home1.jpeg"
        className="background"
        alt="Home Background"
      ></img>
    </>
  );
}
