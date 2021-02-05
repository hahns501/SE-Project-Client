import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import './Header.css'

const Header = () => {
    const logState = useSelector(state => state.authReducer)

    return(
        <div className={"Header"}>
            <nav>
                <h1>Eureka Health</h1>
                <ul>
                    {/*<li><NavLink to={'/home'}>Home</NavLink></li>*/}
                    {logState ? <li><NavLink to={'/login'} onClick={() => {console.log("fart")}}>Sign Out</NavLink></li> : ""}
                </ul>
            </nav>
        </div>
    )
}

export default Header

