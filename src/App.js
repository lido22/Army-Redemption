import './App.css';
import React, { useEffect} from 'react';
function App() {
  const calcRemainingDays = ()=>{
    const totalDays = 425
    const redemptionDay = Date.parse("6/1/2026")
    const today = Date.now()
    const progress = String((redemptionDay - today)/1000/36/24/totalDays).substring(0,5)+"%";
    console.log(progress)
    return progress
    
  }
  function getRemainingDays(){
    const oneDay = 24*60*60*1000
    const redemptionDay = Date.parse("6/1/2026")
    const today = Date.now()
    return Math.round(Math.abs((redemptionDay-today)/oneDay))
  }
  function getPastDays(){
    const oneDay = 24*60*60*1000
    const enslavingDay = Date.parse("4/1/2025")
    const today = Date.now()
    return Math.round(Math.abs((today-enslavingDay)/oneDay))
  }
  const displayProgress = () =>{
    const progress = calcRemainingDays()
    document.getElementById("overlay").style.right = progress
    console.log(progress)
    
  }

  useEffect(()=>{setTimeout(displayProgress, 500)})
  return (
    <div className="App">
      <div id="stats">
        <p>Remaining Days = {getRemainingDays()}</p>
        <p>Passed Days = {getPastDays()}</p>
        <p>Passed Amount = {String(getPastDays()/(getRemainingDays()+getPastDays())*100).substring(0,5)}%</p>

      </div>
      <div id="loader">
        
        <div id="container">
          <div id="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
