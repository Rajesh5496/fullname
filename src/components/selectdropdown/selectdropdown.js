import React from "react";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import axios from 'axios'
import styles from './selectdropdown.module.css'

function Selectdropdown() {
    const [allcountry, setAllcountry] = useState([])
    const [allstate, setAllstate] = useState([])
    const [allcity, setAllcity] = useState([])
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    useEffect(() => {
        axios.get("https://crio-location-selector.onrender.com/countries").then((response) => {
            setAllcountry(response.data)
        }).catch((error) => {
            console.error("Error fetching countries:", error);
        });
    }, [])


    const handleChange1 = (event) => {
        setCountry(event.target.value);
        setAllcity([])
        setCity('')
        setAllstate([])
        setState('')
        axios.get(`https://crio-location-selector.onrender.com/country=${event.target.value}/states`).then((response) => {
            setAllstate(response.data)
        }).catch((error) => {
            console.error("Error fetching countries:", error);
        });
    };

    const handleChange2 = (event) => {
        setState(event.target.value);
        setAllcity([])
        setCity('')
        axios.get(`https://crio-location-selector.onrender.com/country=${country}/state=${event.target.value}/cities`).then((response) => {
            setAllcity(response.data)
        }).catch((error) => {
            console.error("Error fetching countries:", error);
        });
    };

    const handleChange3 = ((event)=>{
        setCity(event.target.value)
    })
    return (
        <div>
            <p>Select Location</p>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Age"
                onChange={handleChange1}
                className={styles.selectcss}
                displayEmpty
            >
                <MenuItem value="" disabled>Select Country</MenuItem>
                {allcountry && allcountry.map((ele) => (
                    <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                ))}

            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Age"
                onChange={handleChange2}
                className={styles.selectcss}
                displayEmpty
                disabled={!country}
            >
                <MenuItem value="" disabled>Select State</MenuItem>
                {allstate && allstate.map((ele) => (
                    <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                ))}

            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Age"
                onChange={handleChange3}
                className={styles.selectcss}
                displayEmpty
                disabled={!state}
            >
                <MenuItem value="" disabled>Select City</MenuItem>
                {allcity && allcity.map((ele) => (
                    <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                ))}

            </Select>
            {city && <p>You selected <span>{city}</span>, {state}, {country}</p>}
        </div>
    )
}
export default Selectdropdown