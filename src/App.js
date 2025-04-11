import './App.css';
import React, { useEffect} from 'react';
function App() {
  const freedom_day = "6/1/2026";
  const enslaving_day = "4/8/2025"
  const getTotalDays = () => {
    const startDate = new Date(enslaving_day);
    const endDate = new Date(freedom_day);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
  const calcRemainingDays = ()=>{
    const totalDays = getTotalDays()
    const redemptionDay = Date.parse(freedom_day)
    const today = Date.now()
    const progress = String((redemptionDay - today)/1000/36/24/totalDays).substring(0,5)+"%";
    return progress
    
  }
  function getRemainingDays(){
    const oneDay = 24*60*60*1000
    const redemptionDay = Date.parse(freedom_day)
    const today = Date.now()
    return Math.round(Math.abs((redemptionDay-today)/oneDay))
  }
  function getPastDays(){
    const oneDay = 24*60*60*1000
    const enslavingDay = Date.parse(enslaving_day)
    const today = Date.now()
    return Math.round(Math.abs((today-enslavingDay)/oneDay))
  }
  const displayProgress = () =>{
    const progress = calcRemainingDays()
    document.getElementById("overlay").style.right = progress
    
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
