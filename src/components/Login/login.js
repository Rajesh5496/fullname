import React from "react"
import { useState, useRef } from "react"

function Login() {
    const uservalueref = useRef()
    const pwdvalueref = useRef()
    const [result, setResult] = useState(false)
    const [resultvalue, setResultvalue] = useState('')

    const handlesubmit = ((event) => {
        event.preventDefault()
        console.log(uservalueref.current.value)
        if (uservalueref.current.value == 'user' && pwdvalueref.current.value == 'password') {
            setResult(true)
            setResultvalue('Welcome, user!')
        } else {
            // setResult(true)
            setResultvalue('Invalid username or password')
        }
    })

    return (
        <div>
            <h1>Login Page</h1>
             <p>{resultvalue}</p>
            {!result && <form onSubmit={handlesubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" ref={uservalueref} required />
                <br />
                <label htmlFor="pwd">Password:</label>
                <input type="password" ref={pwdvalueref} required />
                <br />
                <button type="submit">Submit</button>
            </form>}

        </div >
    )
}
export default Login