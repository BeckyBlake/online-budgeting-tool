import React from 'react';

export default function Dashboard() {
  return(
    // add text to the square and make it look nice
    <div>
      <h1 style={{font: "bold 30px/37px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif",
      color: "#1E5AA9",
      textAlign: "right",
      marginRight: "100px",
      marginTop: "0px",
      fontSize: "50px",
      position: "relative",
      top: "-70px"}}>Welcome back!</h1>

      <style>
        {`.square {
          height: 400px;
          width: 300px;
          background-color: #ACEEF6;
          position: relative;
          justify-content: center;
          left: 100px;
          align-self: center;
          border-radius: 10px;
        }

        .square p {
          font: 20px/24px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif;
          color: #1E5AA9;
          text-align: center;
        }
        
        `}
      </style>

      <div class="square">
        <p>Daily Tip #1</p>
      </div>

      <style>
        {`.square2 {
          height: 400px;
          width: 300px;
          background-color: #ACEEF6;
          position: relative;
          justify-content: center;
          left: 80vh;
          align-self: center;
          border-radius: 10px;
          top: -400px;
        }

        .square2 p {
          font: 20px/24px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif;
          color: #1E5AA9;
          text-align: center;
        }

        `}
      </style>

      <div class="square2">
        <p>Daily Tip #2</p>
      </div>


    </div>
    
  );
}
