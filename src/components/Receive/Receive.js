import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { storage } from "../../firebase_config/firebase_config";
import { getDownloadURL, listAll, ref } from "@firebase/storage";

const Receive = () => {
  let files = [];
  const [urlArray, setUrlArray] = useState([]);

  const download = (files) => {
    let len = files.length;

    if (len > 0) {
      setUrlArray([]);
      for (let i = 0; i < len; i++) {
        const starsRef = ref(storage, files[i]);
        getDownloadURL(starsRef)
          .then((url) => {
            document.getElementById("ip").value = "";
            setUrlArray((oldVal) => [...oldVal, url]);
          })
          .catch((err) => {
            console.log(err);
            document.getElementById("alertRecieve").style.display = "block";
            document.getElementById("alertRecieve").innerHTML =
              "Unable to Download File";
            setTimeout(function () {
              document.getElementById("alertRecieve").style.display = "none";
            }, 3000);
          });
      }
    }
  };

  const checkFiles = () => {
    let text = document.getElementById("ip").value;
    files = [];
    if (text.length > 0) {
      const listRef = ref(storage, `${text}/`);
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            files.push(itemRef.fullPath);
          });
        })
        .then(() => {
          if (files.length > 0) {
            download(files);
          } else {
            document.getElementById("alertRecieve").style.display = "block";
            document.getElementById("alertRecieve").innerHTML =
              "Either the name you Entered is wrong or the item has expired";
            setTimeout(function () {
              document.getElementById("alertRecieve").style.display = "none";
            }, 4000);
          }
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("alertRecieve").style.display = "block";
          document.getElementById("alertRecieve").innerHTML =
            "We faced some error while searching for your files please try again!!";
          setTimeout(function () {
            document.getElementById("alertRecieve").style.display = "none";
          }, 4000);
        });
    } else {
      document.getElementById("alertRecieve").style.display = "block";
      document.getElementById("alertRecieve").innerHTML = "Enter a valid name";
      setTimeout(function () {
        document.getElementById("alertRecieve").style.display = "none";
      }, 2000);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="homepage">
        <h1>Receive Page</h1>
        <p>Select the files </p>
        <input type="text" placeholder="Key" id="ip" />
        <button className="btn" onClick={checkFiles}>
          Download
        </button>
        <ul>
          {urlArray.map((url) => {
            let res = url.split("?");
            let res1 = res[0].split("%2F");
            return (
              <li>
                <a rel="noreferrer" href={url} target="_blank" download>
                  {res1[1]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="alertRecieve"></div>
    </>
  );
};

export default Receive;
