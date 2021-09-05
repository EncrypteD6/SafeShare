import React from 'react'
import Navbar from '../Navbar/Navbar'

const Receive = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="homepage">    
            <h1>Receive Page</h1>
            <p>Select the files </p>
            <input type="text" placeholder="Key"/>
            <button className="btn">Download</button>
            </div>
            <img src="./asset/download.png" className="background" alt="Download image"></img>
        </>
    )
}

export default Receive
