import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Login from './Login/Login'
import Shop from './Shop/Shop'
import PrivateRoute from "../Auth";

import './Main.css'

const Main = () =>{

    return(
        <div>
            <Switch>
                <Route exact path='/login' component={Login}/>
                {/*<Route exact path='/home' component={Home}/>*/}
                <PrivateRoute path="/" component={Shop}/>
            </Switch>
        </div>
    )
}

export default Main;