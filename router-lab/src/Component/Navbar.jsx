import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
        <>
            <div>
                <Link to="/">Squad</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About</Link>

            </div>
        
        </>
    )
}

export default Navbar;