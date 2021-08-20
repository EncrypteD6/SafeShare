import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="homepage">
        <h1>Safe Share</h1>
        <p>
          introducing the file sharing platform.
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
      <div className="ellipse"></div>
    </>
  );
}
