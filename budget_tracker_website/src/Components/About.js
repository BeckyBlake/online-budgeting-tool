import "./About.css";
import React from 'react';
// import the calc_account_balance() function from the backend in src/budget_tracker.py
// import { calc_account_balance } from '../budget_tracker.py';
// import { useState } from 'react';

// have the button display the account balance when clicked

function About() {

    // const [accountBalance, setAccountBalance] = useState(calc_account_balance());

    return (
    <div>
        {/* <h1 className="about_h1">About Us</h1>
        <p className="about_p">We are a group of Computer Science students at the University of Illinois.</p>
        <p className="about_p">The reason we decided upon a budget tracker app was to make financial literacy more accessible to the general public and students, too many times have we seen predatory online financial services advertising products that take advantage of the vulnerable and our group wanted to build a minimalistic buget app with no strings attached to solve this issue.</p>
        <p className="about_p">Contact Info:<br></br>
        Becky Blake: ryblake2@illinois.edu<br></br>
        Grace He: gche3@illinois.edu<br></br></p> */}

        <button className="account-balance-button">Account Balance</button>
        {/* <p className="account-balance">{accountBalance}</p> */}



    </div>
    
    );
}

export {About};