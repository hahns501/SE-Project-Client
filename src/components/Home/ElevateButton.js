import React, {Component} from 'react'
import './Home.css'
import './Home.js'
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

export class ElevateButton extends Component
{
    constructor(props)
    {
        super(props);

        //Define initial state--all will be false
        this.state = 
        {
            isGeneralManager: false,
            isShiftManager: false,
            isCashier: false,
        };
    }

    render()
    {
            return (
            <div>
                <Button variant="contained" color="primary" component={Link} to={"/test"}>
                    Create Employee
                </Button>
                <Button variant="contained" color="primary" component={Link} to={"/employd"}>
                    Employee Details
                </Button>
                <Button disabled variant="contained" color="primary">
                    Sales Report
                </Button>
                <Button disabled variant="contained" color="primary">
                    Start Transaction
                </Button>
                <Button variant="contained" color="primary" component={Link} to={"/shop"}>
                    Product List
                </Button>  
                <Button variant="contained" color="primary" component={Link} to={"/employd"}>
                    Employee Details
                </Button>
                <Button disabled variant="contained" color="primary">
                    Cashier Report
                </Button>
            </div>
            );
    }
}
export default ElevateButton
