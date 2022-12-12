import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const calcRemainingDays = ()=>{
    const totalDays = 425
    const redemptionDay = Date.parse("12/1/2023")
    const today = Date.now()
    console.log(String((redemptionDay - today)/1000/36/24/totalDays).substring(0,5)+"%")
    document.getElementById("overlay").style.width = String((redemptionDay - today)/1000/36/24/totalDays).substring(0,5)+"%";
  }
  useEffect(()=>{calcRemainingDays()})
  return (
    <div className="App">
     <h1>اصبر وما صبرك إلا بالله</h1>
     <div id="overlay">
     </div>
     
    </div>
  );
}

export default App;
