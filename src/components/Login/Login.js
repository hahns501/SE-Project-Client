import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { setTrue } from "../../actions/auth"
import './login.css'

export default function Login(){
    const { state } = useLocation();
    const { from } = state || { from: { pathname: "/" } };
    const [ redirect, setRedirect] = useState(false);
    const [ loginData, setLoginData ] = useState({employeeID: '', pass: ''})
    const dispatch = useDispatch();

    const login = () => {
        fakeAuth.authenticate(() => {
            setRedirect(true);

            dispatch(setTrue())
        });
    };

    if (redirect) {
        return <Redirect to={from}/>
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

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    }
};