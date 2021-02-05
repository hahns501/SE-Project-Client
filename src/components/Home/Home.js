import React from 'react'
import Button from "@material-ui/core/Button";
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {

    return(
        <div className={"mainMenu"}>
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
    )
}

export default Home;