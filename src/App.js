import React from "react";
import '../src/style/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Comp/UI/Navbar/Navbar";
import AppRouter from "./Comp/AppRouter";

function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}
export default App;
