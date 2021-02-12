import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { createUser } from "../../actions/users"

const Registration = () =>{
    const [ registerData, setRegisterData ] = useState({fName: '', lName: '', password: '', employeeID: '', passwordCheck: '', userType: "Employee Type"})
    const [ isAuth, setIsAuth ] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    let registers = false;
    let idSet = false;

    useEffect(() =>{
        if(!idSet){
            generateEmployeeID()
            idSet = true;
        }
    }, [idSet])

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        setRegisterData({...registerData, userType: "General Manager"})
        setAnchorEl(null);
    };

    const handleClose2 = (e) => {
        setRegisterData({...registerData, userType: "Shift Manager"})
        setAnchorEl(null);
    };

    const handleClose3 = (e) => {
        setRegisterData({...registerData, userType: "Cashier"})
        setAnchorEl(null);
    };

    const generateEmployeeID = () =>{
        let empID = Math.floor(Math.random() * 100000);

        let temp = empID.toString();
        let temp2 = temp.padStart(5,'0');

        setRegisterData({...registerData, employeeID: temp2});
    }


    const register = () => {
        // check if passwords match and employee type is set
        if(registerData.password === registerData.passwordCheck){
            registers = true;
        }else{
            console.log("Passwords do not match")
        }

        // if true go to home else alert error
        if(registers){
            console.log(registerData);
            dispatch(createUser(registerData));
            setIsAuth(true)
        }else{
            console.log("Register Failed");
        }
    };

    if(isAuth){
        return <Redirect to={'/employd'} push/>
    }

    return (
        <div>
            <div className={"loginForm"}>
                <label>Register</label>
                <input placeholder={"First Name"} type={"text"} value={registerData.fName} onChange={(e) => setRegisterData({...registerData, fName: e.target.value})}/>
                <input placeholder={"Last Name"} type={"text"} value={registerData.lName} onChange={(e) => setRegisterData({...registerData, lName: e.target.value})}/>
                <input placeholder={"Password"} type={"text"} value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
                <input placeholder={"Confirm Password"} type={"text"} value={registerData.passwordCheck} onChange={(e) => setRegisterData({...registerData, passwordCheck: e.target.value})}/>

                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {registerData.userType}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} value={"General Manager"}>General Manager</MenuItem>
                    <MenuItem onClick={handleClose2} value={"Shift Manager"}>Shift Manager</MenuItem>
                    <MenuItem onClick={handleClose3} value={"Cashier"}>Cashier</MenuItem>
                </Menu>
                <button onClick={register}>Sign Up</button>
            </div>
        </div>
    )
}

export default Registration
