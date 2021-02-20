import React from 'react'
import Button from "@material-ui/core/Button";
import './Home.css'
import {Link} from 'react-router-dom'
import ElevateButton from './ElevateButton.js'

const Home = () => {

    return(
	//Edited By Rudy Ramirez 2/18/21
	//Button disabled variant = unclickable button
	//Button variant = clickable buttton
	//I renamed the testing button to Create Employee since that was the function of the button.
	//Task 5 did not request the feature Employee Details Button but since it is a smart inclusion I am going to leave it alone.
	//I added a Sales Report Button and kept it unclickable.
        <div className={"mainMenu"}>
            {/*ILLUSTRATE BUTTON OPTIONS GIVEN THE USER THAT LOGGED IN*/}
            {/*EDITED BY FAH SYSAVANH. ALL OF RUDY'S BUTTONS IS IN THE ELEVATEBUTTON.JS FILE*/}
            {/*AT FIRST I THOUGHT IT WOULD BE EASIER TO DO CONDITIONAL RENDERING IN A DIFFERENT JS FILE... STILL WORKING ON IT*/}
                <ElevateButton/>
        </div>
    
    )
}

export default Home;