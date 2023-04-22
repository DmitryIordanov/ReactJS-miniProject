import React, {useEffect, useState} from "react";
import '../src/style/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Comp/UI/Navbar/Navbar";
import AppRouter from "./Comp/AppRouter";
import Footer from "./Comp/UI/Footer/footer";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
export default App;
