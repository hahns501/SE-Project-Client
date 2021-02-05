import React, { useState } from 'react';
import {Redirect, useLocation, Link, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './login.css'
import Home from "../Home/Home";

const Login2 = () =>{
    const { state } = useLocation();
    const [ loginData, setLoginData ] = useState({employeeID: '', pass: ''})
    const [ isAuth, setisAuth ] = useState(false)
    const dispatch = useDispatch();

    let loginAuth = false;
    let logins = true;

    const login = () => {
        // authenticate

        // if true go to home else alert error
        if(logins){
            setisAuth(true)
        }else{
            console.log("Login Failed");
        }
    };

    if(isAuth){
        return <Redirect to={'/home'} push/>
    }

    return (
        <div>
            <div className={"loginForm"}>
                <label>Login</label>
                <input placeholder={"Employee ID"} type={"text"} value={loginData.employeeID} onChange={(e) => setLoginData({...loginData, employeeID: e.target.value})}/>
                <input placeholder={"Password"} type={"text"} value={loginData.pass} onChange={(e) => setLoginData({...loginData, pass: e.target.value})}/>
                <button onClick={login}>Sign In</button>
            </div>
        </div>
    )
}

export default Login2
