import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const logState = useSelector(state => state.authReducer)

    return(
        <nav>
            <h1>Eureka Health</h1>
            <ul>
                {/*<li><NavLink to={'/home'}>Home</NavLink></li>*/}
                {logState ? <li><NavLink to={'/login'} onClick={() => {console.log("fart")}}>Sign Out</NavLink></li> : ""}
            </ul>
        </nav>
    )
}

export default Header

