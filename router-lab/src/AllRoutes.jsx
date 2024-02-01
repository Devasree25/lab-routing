import React from "react";
import {Route, Routes} from "react-router-dom"
import Squad from "./Component/Squad51";
import Forms from "./Component/Forms";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Squad />}></Route>
            <Route path="/forms" element={<Forms />} /> {/* Add this line */}
            
            
            
        </Routes>
        
        </>
    )
}

export default AllRoutes;