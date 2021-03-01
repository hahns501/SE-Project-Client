import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from "../../actions/auth";
import LoginTesting from "./LoginTesting/LoginTesting";
import {validateInput} from "./validateInput.js";                   //Added by Fah Sysavanh to validate user input of id and passcode

import './login.css'

const Login = () =>{
    const logState = useSelector(state => state.authReducer);
    const [ loginData, setLoginData ] = useState({employeeID: '', password: ''})
    const [ testLoginData, setTestLoginData ] = useState({employeeID: '03909', password: '1234'})
    const [ isAuth, setIsAuth ] = useState(false)
    const dispatch = useDispatch();

    const Login = () => {
        // input validation and authentication
        if(validateInput(loginData.employeeID, loginData.password)){
            dispatch(loginUser(loginData)).then(() => {
                let user = JSON.parse(localStorage.getItem("user"));

                if (user != null){
                    console.log("Login Success")
                    setIsAuth(true);
                }else{
                    console.log("Login Failed")
                }
            })
        }
    };

    const Login2 = () => {
        dispatch(loginUser(testLoginData)).then(() => {
            let user = JSON.parse(localStorage.getItem("user"));

            if (user != null){
                console.log("Login Success")
                setIsAuth(true);
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
                <button onClick={Login2} >Sign In</button>
                <LoginTesting/>
            </div>
        </div>
    )
}

export default Login
