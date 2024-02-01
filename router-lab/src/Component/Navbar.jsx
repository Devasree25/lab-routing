import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar =()=>{
    return (
        <>
            <div className="nav">
               <div className="class">
               <Link to="/" id="link">Kalvium ❤️</Link>
               <h2 className="store-title">KALVIUM BOOK STORE</h2>
               </div>
               
                <div id="regi">
                <Link to="/forms" id="link">Create Account</Link>
                    
                </div>
            </div>
        
        </>
    )
}

export default Navbar;