import React from 'react'

function ChilComponent1({onSelection}) {
  return (
    <div style={{
        background:"#d2691e",
        height:"10vh",
        padding:"10px"
    }}>
        <p>ChilComponent1</p>
        <button onClick={()=> onSelection("Option 1")}>Option 1 </button>
        
        </div>
  )
}

export default ChilComponent1