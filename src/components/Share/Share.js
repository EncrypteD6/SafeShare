import React from "react";
import { useState } from "react";
import { storage } from "../../firebase_config/firebase_config";
import { ref, uploadBytesResumable } from "@firebase/storage";
import Result from "../Result/Result";

const Share = () => {
  const [progress, setProgress] = useState(0);
  const [FILE, setFILE] = useState([]);
  const [SIZE, setSIZE] = useState(5e6);
  const [url, setUrl] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const randomPass = () => {
    let result = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    result += String(Math.floor(Math.random() * 100) + 1);
    for (let i = 10; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    result += String(Math.floor(Math.random() * 100) + 1);
    return result;
  };

  const upload = () => {
    let len = FILE.length;
    if (len === 0) {
      try {
        document.getElementById("alert").style.display = "block";
        document.getElementById("alert").innerHTML =
          "Please Select atleast 1 file";
        setTimeout(function () {
          document.getElementById("alert").style.display = "none";
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let foldername = randomPass();
        for (let i of FILE) {
          setProgress(0);
          const fileToUpload = ref(storage, `${foldername}/${i.name}`);
          const uploadTask = uploadBytesResumable(fileToUpload, i);
          uploadTask.then((snapshot) => {
            switch (snapshot.state) {
              case "paused":
                document.getElementById("alert").style.display = "block";
                document.getElementById("alert").innerHTML =
                  "Sorry, we are facing some problem!!";
                setTimeout(function () {
                  document.getElementById("alert").style.display = "none";
                }, 1000);
                break;
              case "running":
                document.getElementById("alert").style.display = "block";
                document.getElementById("alert").innerHTML =
                  "Sorry, we are facing some problem!!";
                setTimeout(function () {
                  document.getElementById("alert").style.display = "none";
                }, 1000);
                break;
              default:
                break;
            }
          });
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              let p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(p);
            },
            (error) => {
              document.getElementById("alert").style.display = "block";
              document.getElementById("alert").innerHTML =
                "Sorry, we are facing some problem!!";
              setTimeout(function () {
                document.getElementById("alert").style.display = "none";
              }, 3000);
            },
            () => {
              FILE.pop(0);
              setFILE(FILE);
              if (FILE.length === 0) {
                setUploaded(true);
                setUrl(foldername);
                setSIZE(5e6);
              }
            }
          );
        }
      } catch (err) {
        document.getElementById("alert").style.display = "block";
        document.getElementById("alert").innerHTML =
          "Sorry, we are facing some problem!!";
        setTimeout(function () {
          document.getElementById("alert").style.display = "none";
        }, 1000);
      }
      const list = document.getElementById("filedisplaylist");
      let child = list.lastElementChild;
      while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
      }
    }
    console.log(url);
  };

  const filepick = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.multiple = "multiple";
    input.onchange = (e) => {
      const files = e.target.files;

      for (let file of files) {
        let size = file.size;
        let oldVal = SIZE;
        if (oldVal - size >= 0) {
          setFILE((oldFiles) => [...oldFiles, file]);
          setSIZE((prev) => prev - size);

          let list = document.createElement("LI");
          let node = document.createTextNode(
            String(file.name) +
              String("    ") +
              "(" +
              String((size / 1e6).toFixed(2)) +
              " MB)"
          );

          list.appendChild(node);
          document.getElementById("filedisplaylist").appendChild(list);
        } else {
          document.getElementById("alert").style.display = "block";
          document.getElementById("alert").innerHTML =
            "Your Files exceed the 5MB limit!!!";
          setTimeout(function () {
            document.getElementById("alert").style.display = "none";
          }, 2000);
        }
      }
    };
    input.click();
  };

  const removeFile = (e) => {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() === "LI") {
      let nodes = Array.from(tgt.parentNode.children);
      let index = nodes.indexOf(tgt);
      let file = FILE;
      let filesize = file.slice(index, index + 1)[0].size;
      file.splice(index, 1);
      let oldSize = SIZE;
      setFILE(file);
      setSIZE(parseFloat(oldSize) + parseFloat(filesize));
      tgt.parentNode.removeChild(tgt);
    }
  };

  if (uploaded && url.length > 0) {
    return (
      <>
        <Result url={url} />
      </>
    );
  }
  return (
    <>
      <div className="homepage">
        <h1>Share Page</h1>
        <p>Select the files </p>
        <img
          src="./asset/download.png"
          width="100px"
          alt="Symbol of addition"
          onClick={filepick}
        />

        <button className="btn" onClick={upload}>
          Upload
        </button>
        <progress id="statusIndicatorSend" value={progress} max="100" />
      </div>
      <div>
        <h5>Add more files</h5>

        <p style={{ borderBottom: "1px solid grey", marginBottom: "0" }}>
          {FILE.length} files added
        </p>
        <p style={{ fontSize: "12px" }}>click to remove files</p>
        <ul
          id="filedisplaylist"
          style={{ marginTop: "20px" }}
          onClick={removeFile}
        ></ul>
      </div>

      <div id="alert"></div>
    </>
  );
};

export default Share;

//- {(SIZE / 1e6).toFixed(2)} MB remaining{" "}
