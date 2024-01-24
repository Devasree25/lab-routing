import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar =()=>{
    return (
        <>
            <div className="nav">
               <div className="class">
               <Link to="/">Squad</Link>
               </div>
                <div className="contact">
                <Link to="/contacts">Contacts</Link>
                </div>
                <div className="about">
                <Link to="/about">About</Link>

                </div>
            </div>
        
        </>
    )
}

export default Navbar;