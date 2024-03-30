import React from "react";
import { useState, useRef } from "react";

function Dict(){
    const inputref = useRef()
    const [ans,setAns] = useState('')
    const dict = [

        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ]

    const handleclick = (()=>{
        let temp = dict.find((ele)=> inputref.current.value.toLowerCase() == ele.word.toLowerCase())
        console.log(temp)
        if(temp == undefined)
            setAns("Word not found in the dictionary.")
        else
            setAns(temp.meaning)
    })
    return(
        <div>
            <p>Dictionary App</p>
            <input type="text" ref={inputref} placeholder="Search for a word..."/>
            <button onClick={handleclick} type="button">Search</button>
            <p>Definition:</p>
            <p>{ans}</p>
        </div>
    )
}
export default Dict