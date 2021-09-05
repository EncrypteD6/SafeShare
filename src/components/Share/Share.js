import React from 'react'
import Navbar from '../Navbar/Navbar'

const Share = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="homepage">    
            <h1>Share Page</h1>
            <p>Select the files </p>
            <input type="file"/>
            <button className="btn">Upload</button>
            </div>
            <img src="./asset/upload.png" className="background" alt="Upload image"></img>
        </>
    )
}

export default Share

