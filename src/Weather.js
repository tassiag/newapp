import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: Math.round(response.data.main.humidity),
            maxTemp: Math.round(response.data.main.temp_max),
            minTemp: Math.round(response.data.main.temp_min)

        });


        setReady(true);
    }
    
if (weatherData.ready) {


return (
    <div className="container">
        <div className="header">
            <h1 className="city">{weatherData.city}</h1>
        <ul>
                <li className="date">monday, 10:30</li>
                <li className="description">{weatherData.description}</li>
        </ul>
        </div>

        <div className="row justify-content-md-center" id="weather-container">

            <div id="show-degrees" className="col-md-3 text-center">
                <span className="degrees">{Math.round(weatherData.temperature)}</span>
                <span className="units"><a href="#" id="celsius-link">ºC </a>| <a href="#" id="fahrenheit-link">ºF</a> </span>
            </div>

            <div className="col-md-3 weather-icon text-center">
                <img alt="" className="main-icon" src="https://weatherappshecodes.netlify.app/imgs/02d.png" />
                </div>

            <div className="col-md-3 weather-info  text-center">
                <ul className="weather-list ">
                        <li><strong>Wind:</strong> <span class="wind">{weatherData.wind}</span> km/h</li>
                    <li><strong>humidity:</strong> <span class="humidity">{weatherData.humidity}</span> % </li>
                        <li><strong>Max:</strong> <span class="max">{weatherData.maxTemp}</span>º | <strong>Min:</strong> <span class="min"> {weatherData.minTemp} </span>º </li>
                    </ul>
                </div>

            </div>
       

    
    </div>

      
        

);
} else {
 
    const apiKey = "6c5142618c3f5b73b72829108626271d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..."

}

}