import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import './App.css';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <div className="header">
                <h1 className="city">{props.data.city}</h1>
        <ul>
                    <li className="date"><FormattedDate date={props.data.date} /></li>
                    <li className="description">{props.data.description}</li>
        </ul>
        </div>

        <div className="row justify-content-md-center" id="weather-container">

        <div id="show-degrees" class="col-md-3 text-center">
            <WeatherTemperature celsius={props.data.temperature}/>
            </div>

            <div className="col-md-3 text-center teste">
            <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            </div>

            <div className="col-md-3 weather-info  text-center">
                <ul className="weather-list ">
                        <li><strong>Wind:</strong> <span class="wind">{props.data.wind}</span> km/h</li>
                        <li><strong>humidity:</strong> <span class="humidity">{props.data.humidity}</span> % </li>
                        <li><strong>Max:</strong> <span class="max">{props.data.maxTemp}</span>º | <strong>Min:</strong> <span class="min"> {props.data.minTemp} </span>º </li>
                    </ul>
                </div>

            </div>
        </div>
        

    
    

    )
}