
import React, { useState } from "react";
import './../styles/App.css';
import ChilComponent1 from "./ChilComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selctedOption,setSelectedOption] = useState(null)

  const handleOptionChane = (option) => {
    setSelectedOption(option);
  }


  return (
    <div style={{
      background:"#00FF00",
      height:"50vh",
      
    }}>
      <p style={{
        fontWeight:"bolder",
        fontSize:"30px"
      }}>Parent componet </p>
        <ChilComponent1 onSelection={handleOptionChane}/>
        <ChildComponent2 onSelection={handleOptionChane}/>
      <p>Selcted Option :- {selctedOption} </p>

    </div>
  )
}

export default App
