import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../Pages/Posts";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"></Route>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    );
};

export default AppRouter;