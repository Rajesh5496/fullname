import React from "react"
import { useState } from "react"

function Counter(){
    const[increment, setIncrement] = useState(0) 
    const[decrement, setDecrement] = useState(0)
    const[finalvalue, setFinalvalue] = useState(0)

    const handleincr = ()=>{
        // setIncrement(prevnum => prevnum + 1)
        setFinalvalue(prevnum => prevnum + 1)
    }

    const handledecr = ()=>{
        // setIncrement(prevnum => prevnum - 1)
        setFinalvalue(prevnum => prevnum - 1)
    }
    return(
        <div>
            <h2>Counter App</h2>
            <p>Count: <span>{finalvalue}</span></p>
            <button onClick={handleincr}>Increment</button>
            <button onClick={handledecr}>Decrement</button>
        </div>
    )
}
export default Counter