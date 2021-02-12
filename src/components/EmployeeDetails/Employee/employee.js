import React from 'react';

const Employee = ( {employee} ) => {

    return(
        <div className='employee'>
            <h2>First Name:{employee.fName}</h2>
            <h2>Last Name:{employee.lName}</h2>
            <h2>Employee ID:{employee.employeeID}</h2>
            <h2>Password:{employee.password}</h2>
            <h2>Employee Type:{employee.userType}</h2>
        </div>
    )
}

export default Employee;