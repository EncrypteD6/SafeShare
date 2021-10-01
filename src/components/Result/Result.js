import NavBar from "../Navbar/Navbar";
import "./Result.css";

const Result = (props) => {
  const QRCode = require("qrcode.react");
  
  const copy = () => {
    let url = document.getElementById("copy").value;
    navigator.clipboard.writeText(url);
    let alert = document.getElementById("alertResult");
    alert.style.display = "block";
    alert.innerHTML = "copied";
    setTimeout(function () {
      alert.style.display = "none";
    }, 1000);
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="qr">
          <QRCode value={props.url} />
        </div>
        <input type="text" readOnly={true} id="copy" value={props.url} />
        <p style={{ width: "80%", textAlign: "center", marginTop: "20px" }}>
          <u>Note</u>: Directly enter the code in the downloads section to
          Download Your Files
        </p>
        <button
          onClick={copy}
          className="CopyButton"
          style={{ outline: "none" }}
        >
          Copy
        </button>
        <div color="success" id="alertResult"></div>
      </div>
    </>
  );
};

export default Result;
