import React from "react";
import FormattedDate from './FormattedDate';

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

            <div id="show-degrees" className="col-md-3 text-center">
                    <span className="degrees">{Math.round(props.data.temperature)}</span>
                <span className="units"><a href="#" id="celsius-link">ºC </a>| <a href="#" id="fahrenheit-link">ºF</a> </span>
            </div>

            <div className="col-md-3 weather-icon text-center">
                <img alt="" className="main-icon" src={props.data.iconUrl} />
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