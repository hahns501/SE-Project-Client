import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { setTrue } from "../../actions/auth"

export default function Login(){
    const { state } = useLocation();
    const { from } = state || { from: { pathname: "/" } };
    const [ redirect, setRedirect] = useState(false);
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
        <dib>
            <h1>Login Page</h1>
            <button onClick={login}>Login</button>
        </dib>
    )
}

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    }
};