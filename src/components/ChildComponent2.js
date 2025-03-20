import React from 'react'

function ChildComponent2({onSelection}) {
  return (
    <div style={{
        background:"yellow",
        height:"10vh",
        padding:"10px"
    }}>
        <p>ChilComponent2</p>
        <button onClick={() => onSelection("Option 2")}>Option 2 </button>
    </div>
  )
}

export default ChildComponent2