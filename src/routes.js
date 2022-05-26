import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Repos from './Pages/Repositories/';
import Home from "./Pages/Home/";

export default function Routess() {
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/repos' element={<Repos/>}/>
            </Routes>
        </Router>
    );
}