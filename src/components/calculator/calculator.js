import React from "react";
import styles from "./calculator.module.css"
import { useState } from "react";

function Calculator() {

    const[inputvalues, setInputvalues] = useState('')
    const[resultvalue, setResultvalue] = useState('')

    const handlebutton = ((event)=>{
        console.log(event.target.value)
        setInputvalues(inputvalues+event.target.value)
        
    })

    const result = (() => {
        console.log(eval(inputvalues))
        if(inputvalues == ''){
            setResultvalue("Error")
        }else{
            setResultvalue(eval(inputvalues))
        }
        
    })

    const clear = (()=>{
        setInputvalues('')
        setResultvalue('')
    })

    return (
        <>
            <div className={styles.divcenter}>
                <p>React Calculator</p>
                <br />
                <p value={resultvalue}>{resultvalue}</p>
                <br />
                <input type="text" value={inputvalues} />
                <br />
                {/*  Here, we're using an arrow function syntax to create a function inline that will call handlebutton(event) when the button is clicked. This ensures that handlebutton is only called when the button is clicked, and not immediately when the component is rendered. */}
                {/* <button onClick={handlebutton(event)} value={7} className={styles.buttondesign}>7</button> */}
                <button onClick={ (event) => handlebutton(event)} value={7} className={styles.buttondesign}>7</button>
                <button onClick={ (event) => handlebutton(event)} value={8} className={styles.buttondesign}>8</button>
                <button onClick={ (event) => handlebutton(event)} value={9} className={styles.buttondesign}>9</button>
                <button onClick={ (event) => handlebutton(event)} value="+" className={styles.buttondesign}>+</button>
                <br />
                <button onClick={ (event) => handlebutton(event)} value={4} className={styles.buttondesign}>4</button>
                <button onClick={ (event) => handlebutton(event)} value={5} className={styles.buttondesign}>5</button>
                <button onClick={ (event) => handlebutton(event)} value={6} className={styles.buttondesign}>6</button>
                <button onClick={ (event) => handlebutton(event)} value="-" className={styles.buttondesign}>-</button>
                <br />
                <button onClick={ (event) => handlebutton(event)} value={1} className={styles.buttondesign}>1</button>
                <button onClick={ (event) => handlebutton(event)} value={2} className={styles.buttondesign}>2</button>
                <button onClick={ (event) => handlebutton(event)} value={3} className={styles.buttondesign}>3</button>
                <button onClick={ (event) => handlebutton(event)} value="*" className={styles.buttondesign}>*</button>
                <br />
                <button onClick={ (event) => clear(event)} value="c" className={styles.buttondesign}>C</button>
                <button onClick={ (event) => handlebutton(event)} value={0} className={styles.buttondesign}>0</button>
                <button onClick={ (event) => result(event)} value="=" className={styles.buttondesign}>=</button>
                <button onClick={ (event) => handlebutton(event)} value="/" className={styles.buttondesign}>/</button>
            </div >
            
        </>
    )
}
export default Calculator