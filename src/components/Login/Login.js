import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { findUser } from "../../actions/users";
import { setTrue } from "../../actions/auth";
import LoginTesting from "./LoginTesting/LoginTesting";
import {validateInput} from "./validateInput.js";                   //Added by Fah Sysavanh to validate user input of id and passcode
// <button onClick = {() => validateInput(loginData.employeeID,loginData.password)} > Testing validating input </button>

import './login.css'

const Login = () =>{
    const [ loginData, setLoginData ] = useState({employeeID: '', password: ''})
    const [ isAuth, setIsAuth ] = useState(false)
    const dispatch = useDispatch();

    const Login = () => {
        // authenticate
        dispatch(findUser(loginData)).then(() => {
            let user = JSON.parse(sessionStorage.getItem("user"));

            if (user != null){
                console.log("Login Success")
                setIsAuth(true);
                dispatch(setTrue());
            }else{
                console.log("Login Failed")
            }
        })
    };

    if(isAuth){
        return <Redirect to={'/home'} push/>
    }

    return (
        <div>
            <div className={"loginForm"}>
                <label>Login</label>
                <input placeholder={"Employee ID"} type={"text"} value={loginData.employeeID} onChange={(e) => setLoginData({...loginData, employeeID: e.target.value})}/>
                <input placeholder={"Password"} type={"text"} value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}/>
                <button onClick={() => {Login(); validateInput(loginData.employeeID,loginData.password)}} >Sign In</button>
                <LoginTesting/>
            </div>
        </div>
    )
}

export default Login
