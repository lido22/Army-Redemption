import './App.css';
import React, { useEffect} from 'react';
function App() {
  const calcRemainingDays = ()=>{
    const totalDays = 425
    const redemptionDay = Date.parse("12/1/2023")
    const today = Date.now()
    const progress = String((redemptionDay - today)/1000/36/24/totalDays).substring(0,5)+"%";
    console.log(progress)
    return progress
    
  }
  const displayProgress = () =>{
    const progress = calcRemainingDays()
    document.getElementById("overlay").style.right = progress
    // const message = document.getElementById("stats")
    // message.textContent = progress
  }
  useEffect(()=>{setTimeout(displayProgress, 500)})
  return (
    <div className="App">
      
      <div id="loader">
      
        <div id="container">
          
          <div id="overlay"></div>
        </div>
      </div>
      
     
     
     
    </div>
  );
}

export default App;
