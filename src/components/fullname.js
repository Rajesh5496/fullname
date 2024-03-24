import React from "react"
import styles from "./fullname.module.css"
import { useState, useRef } from "react"

function Fullname(){
    // Ref = useRef()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullname, setfullname] = useState('')
    const [bool, setbool] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        setfullname(firstName+lastName)
        setbool(true)
    };

    return(
        <div>
            <h2>Full Name Display</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="FirstName">First Name:</label>
                <input id="FirstName" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required/>
                <br />
                <label htmlFor="LastName">Last Name:</label>
                <input id="FirstName" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required/>
                <br />
                <button>Submit</button>
                
            </form>
            { (bool && <p>Full Name: {fullname}</p>)}
        </div>
    )

}

export default Fullname