import React from "react";
import {Route, Routes} from "react-router-dom"
import Squad from "./Component/Squad51";
import Contacts from "./Component/Contacts";
import About from "./Component/About";
import Forms from "./Component/Forms";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Squad />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/forms" element={<Forms/>}></Route>
            
            
        </Routes>
        
        </>
    )
}

export default AllRoutes;