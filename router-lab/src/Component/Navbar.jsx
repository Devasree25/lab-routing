import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar =()=>{
    return (
        <>
            <div className="nav">
               <div className="class">
               <Link to="/" id="link">Kalvium ❤️</Link>
               </div>
                <div className="contact">
                <Link to="/contacts" id="link">Contacts</Link>
                </div>
                <div className="about">
                <Link to="/about" id="link">About</Link>
                </div>
                <div>
                <Link to="/forms" id="link">Registration Form</Link>
                    
                </div>
            </div>
        
        </>
    )
}

export default Navbar;