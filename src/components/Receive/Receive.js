import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Receive = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="homepage">
        <h1>Receive Page</h1>
        <p>Select the files </p>
        <input type="text" placeholder="Key" />
        <button className="btn">Download</button>
      </div>
      <img
        src="./asset/download.png"
        className="background"
        alt="Download imag"
      ></img>
    </>
  );
};

export default Receive;
