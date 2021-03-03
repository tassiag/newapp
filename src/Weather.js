import React, { useState } from "react";
import axios from "axios";
import './App.css';


import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';


export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            humidity: Math.round(response.data.main.humidity),
            maxTemp: Math.round(response.data.main.temp_max),
            minTemp: Math.round(response.data.main.temp_min)

        });


        setReady(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
        

    }

    function search() {
        const apiKey = "6c5142618c3f5b73b72829108626271d";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }
    
if (weatherData.ready) {


return (
    <div>
    <div className="container">
        <div className="search">
            <form className="search-form" id="search-form" onSubmit={handleSubmit}>
                <input type="text" id="city-input" placeholder="Search city"  onChange={handleCityChange}/>
                <button className="submit" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city}/>
        
        </div>
        <div className="footer">
            <footer>
                <p><a href="https://github.com/tassiag/newapp" target="_blank">Open-source</a> | Coded by <a href="https://www.linkedin.com/in/tassiagomes/" target="_blank">Tássia Gomes</a></p>
            </footer>
        </div>
    </div>
         

        

);
} else {
 
    search();

    return "Loading..."

}

}