import React from 'react';
import './Dashboard.css'


export default function Dashboard() {
  return(
    // add text to the square and make it look nice
    <div>
      <h1 class="heading" style={{font: "bold 50px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>Welcome back!</h1>

      <div class="square">
        <h3>Daily Tip #1</h3>
        <p>Set up an auto debit from your checking account to your savings account each payday to maintain a healthy long-term savings plan.</p>
      </div>

      <div class="square2">
        <h3>Daily Tip #2</h3>
        <p>Review your automatic subscriptions and memberships! It's time to cancel any subscriptions you don’t use regularly.</p>
      </div>

      <div class="square3">
        <h3>Daily Tip #3</h3>
        <p>You spent $30 over budget last month on restaurants. Reduce spending by meal prepping to motivate eating at home!</p>
        
      </div>


    </div>
    
  );
}
