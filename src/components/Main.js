import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Login from './Login/Login'
import Shop from './Shop/Shop'
import PrivateRoute from "../Auth";
import Home from './Home/Home';
import EmployeeDetail from "./EmployeeDetails/EmployeeDetails";

import './Main.css'

const Main = () =>{

    return(
        <div>
            <Switch>
                {/*<PrivateRoute path="/" component={Home}/>*/}
                <Route exact path='/' component={Login}/>
                <Route exact path='/shop' component={Shop}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/employd' component={EmployeeDetail}/>
                {/*<PrivateRoute path="/" component={Home}/>*/}
            </Switch>
        </div>
    )
}

export default Main;