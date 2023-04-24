import React, {useContext} from 'react';
import MyInput from "../Comp/UI/Input/MyInput";
import MyButton from "../Comp/UI/Button/MyButton";
import {AuthContext} from "../context";

const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className="container">
            <h1 style={{textAlign:"center", marginTop: 50}}>Увійдіть до вашого облікового запису</h1>
            <form onSubmit={login} className="login__block">
                <MyInput type="text" placeholder="Введіть логін..."/>
                <MyInput type="password" placeholder="Введіть пароль..."/>
                <MyButton>Увійти</MyButton>
            </form>
        </div>
    );
};

export default LoginPage;