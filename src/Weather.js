import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function Weather() {
return (
    <div className="container">
        <div className="header">
            <h1 className="city">Lisbon</h1>
        <ul>
                <li className="date">monday, 10:30</li>
                <li className="description">sunny</li>
        </ul>
        </div>

        <div className="row justify-content-md-center" id="weather-container">

            <div id="show-degrees" className="col-md-3 text-center">
                <span className="degrees">16</span>
                <span className="units"><a href="#" id="celsius-link">ºC </a>| <a href="#" id="fahrenheit-link">ºF</a> </span>
            </div>

            <div className="col-md-3 weather-icon text-center">
                <img alt="" className="main-icon" src="https://weatherappshecodes.netlify.app/imgs/02d.png" />
                </div>

            <div className="col-md-3 weather-info  text-center">
                <ul className="weather-list ">
                        <li><strong>Wind:</strong> <span class="wind"></span> km/h</li>
                        <li><strong>humidity:</strong> <span class="humidity"></span> % </li>
                        <li><strong>Max:</strong> <span class="max"></span>º | <strong>Min:</strong> <span class="min"> </span>º </li>
                    </ul>
                </div>

            </div>
       

    
    </div>

      
        

);
}