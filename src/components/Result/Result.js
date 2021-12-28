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
      <div className="result-content">
        <div className="qr">
          <QRCode value={props.url} size="200" />
        </div>
        <input type="text" readOnly={true} id="copy" value={props.url} />
        <p>
          <b>
            <u>Note</u>: Directly enter the code in the downloads section to
            Download Your Files
          </b>
        </p>
        <button className="copy" onClick={copy} style={{ outline: "none" }}>
          Copy
        </button>
        <div color="success" id="alertResult"></div>
      </div>
    </>
  );
};

export default Result;
