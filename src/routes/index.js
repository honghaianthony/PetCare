import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import {Service} from "../pages"
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/service" element={<Service />}></Route>
            </Routes>
        </Router>
    );
}
