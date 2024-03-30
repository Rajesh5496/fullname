import React from "react"
import "./weather.css"
import { useState, useEffect } from "react"
import axios from "axios"

function Weather() {

    const [loading, setLoading] = useState(false)
    const [weatherdata, setWeatherdata] = useState('')

    const handonclick = (() => {
        setLoading(true)
        axios.get("http://api.weatherapi.com/v1/current.json?q=pune&key=1775ae95ee3e4d22b8372535230411").then((response) => {
            
            console.log(response.data)
            setWeatherdata(response.data)
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            alert("Failed to fetch weather data")
            console.log(error)
        })
    })

    useEffect(() => {

    }, [])
    return (
        <div className="fulslscreen">
            <div className="centercss">
                <input className="inputcss" type="text" placeholder="Enter City name" />
                <button onClick={handonclick} className="buttoncss" type="button">Search</button>
            </div>
            <div className="centercss">
                {loading && <p>Loading data...</p>}
            </div>
            {weatherdata && <div className="gridcss">
                <div className="weather-card">
                    <div class="card-header">
                        <b>Temperature</b>
                    </div>
                    <div class="humidity-info">
                        <p class="humidity-value">{weatherdata.temp_c}</p>
                    </div>
                </div>
                <div className="weather-card">
                    <div class="card-header">
                        <b>Humidity</b>
                    </div>
                    <div class="humidity-info">
                        <p class="humidity-value">{weatherdata.humidity}</p>
                    </div>
                </div>
                <div className="weather-card">
                    <div class="card-header">
                        <b>Condition</b>
                    </div>
                    <div class="humidity-info">
                        <p class="humidity-value">{weatherdata.condition.text}</p>
                    </div>
                </div>
                <div className="weather-card">
                    <div class="card-header">
                        <b>WindSpeed</b>
                    </div>
                    <div class="humidity-info">
                        <p class="humidity-value">{weatherdata.wind_kph}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}


export default Weather