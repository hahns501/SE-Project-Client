import { NavLink, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import './Header.css'
import {logoutUser} from "../../actions/auth";

const Header = () => {
    const logState = useSelector(state => state.authReducer);
    const [isLogged, setIsLogged] = useState(false);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('user'));

        if(user !== null){
            // console.log("User is logged in");
            setIsLogged(true);
        }else{
            // console.log("No user logged in");
            setIsLogged(false);
        }
    },[logState]);

    useEffect(() => {
        if(isLogged === false){
            history.push('/')
        }else{
            history.push('/home');
        }
    }, [isLogged])

    const Logout = () => {
        console.log("Logging out");
        setIsLogged(false);
        dispatch(logoutUser());
    }

    const userLog = () => {
        // console.log("User Info");
        // let user = JSON.parse(sessionStorage.getItem("user"));
        let user2 = JSON.parse(localStorage.getItem('user'))
        console.log(user2);
    }

    return(
        <div className={"Header"}>
            <nav>
                <h1>Eureka Health</h1>
                <button onClick={userLog}>User</button>
                <ul>
                    {/*<li><NavLink to={'/home'}>Home</NavLink></li>*/}
                    {isLogged ? <li><NavLink to={'/'} onClick={Logout}>Sign Out</NavLink></li> : ""}
                </ul>
            </nav>
        </div>
    )
}

export default Header

