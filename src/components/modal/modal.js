import { Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
// import styles from "./modal.module.css"
import "./modal.css"
import Modalpopup from "./modalpopup"

function Modalform() {
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: ""
    });

    const handleClose = () => {
        setOpen(false);
        setFormData({
            username: "",
            email: "",
            phone: "",
            dob: ""
        })
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        // Phone number validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }
        // Perform form submission logic here
        console.log("Form submitted with data:", formData);

        const dobDate = new Date(formData.dob);
        const currentDate = new Date();
        // dobDate.setHours(0, 0, 0, 0);
        // currentDate.setHours(0, 0, 0, 0);
        if (dobDate > currentDate) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return;
        }

        console.log(new Date(formData.dob))
        handleClose(); // Close the modal
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <div className="centercss">
            <h1>User Details Modal</h1>
            <button className="submit-button" type="button" onClick={handleOpen}>Open Form</button>

            <Modalpopup isOpen={open} onClose={handleClose}>
                <div className="modal">
                    <div className="modal-content">
                        <h2>Fill Details</h2>
                        <form onSubmit={handlesubmit}>
                            <label htmlFor="username"><b>Username:</b></label><br />
                            <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} required /><br />
                            <label htmlFor="email"><b>Email Address:</b></label><br />
                            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required /><br />
                            <label htmlFor="phone"><b>Phone Number:</b></label><br />
                            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required /><br />
                            <label htmlFor="dob"><b>Date of Birth:</b></label><br />
                            <input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} required /><br /><br />
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            </Modalpopup>


        </div>

    )
}
export default Modalform