import "./Homepage.css";

export default function Homepage() {
  let sendRedirect = false;
  let receiveRedirect =false;
  
  return (
    <>
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
        <img className="background" src="./asset/home1.jpeg" alt='Home background'/>
      </div>
    </>
  );
}
