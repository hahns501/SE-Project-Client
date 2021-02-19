import React from 'react'
import Button from "@material-ui/core/Button";
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {

    return(
	//Edited By Rudy Ramirez 2/18/21
	//Button disabled variant = unclickable button
	//Button variant = clickable buttton
	//I renamed the testing button to Create Employee since that was the function of the button.
	//Task 5 did not request the feature Employee Details Button but since it is a smart inclusion I am going to leave it alone.
	//I added a Sales Report Button and kept it unclickable.
        <div className={"mainMenu"}>
            
			<Button disabled variant="contained" color="primary">
                Start Transaction
            </Button>

            <Button variant="contained" color="primary" component={Link} to={"/shop"}>
                Product List
            </Button>            
			
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
                Cashier Report
            </Button>
        </div>
    )
}

export default Home;