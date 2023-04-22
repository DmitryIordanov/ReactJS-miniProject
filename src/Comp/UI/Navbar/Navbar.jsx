import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="navbar__items">
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
            <MyButton onClick={logout}>Sing out</MyButton>
        </div>
    );
};

export default Navbar;