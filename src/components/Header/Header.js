import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import './Header.css'
import {setFalse} from "../../actions/auth";

const Header = () => {
    const logState = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(setFalse());
        // tell server employee no longer active
        // clear session data

    }

    const userLog = () => {
        // console.log("User Info");
        let user = JSON.parse(sessionStorage.getItem("user"));
        console.log(user);
    }

    return(
        <div className={"Header"}>
            <nav>
                <h1>Eureka Health</h1>
                <button onClick={userLog}>User</button>
                <ul>
                    {/*<li><NavLink to={'/home'}>Home</NavLink></li>*/}
                    {logState ? <li><NavLink to={'/'} onClick={Logout}>Sign Out</NavLink></li> : ""}
                </ul>
            </nav>
        </div>
    )
}

export default Header

