import React, {useState} from 'react';
import axios from 'axios';
import WeatherForecastPreview from './WeatherForecastPreview';


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    function displayForecast(response) {
        setForecast(response.data);
        setLoaded(true);
        

    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                <WeatherForecastPreview data={forecast.list[0]} />
                <WeatherForecastPreview data={forecast.list[1]} />
                <WeatherForecastPreview data={forecast.list[2]} />
                <WeatherForecastPreview data={forecast.list[3]} />
                <WeatherForecastPreview data={forecast.list[4]} />
                <WeatherForecastPreview data={forecast.list[5]} />
            </div>
      
            
           
        
        );
    } else {
        let apiKey = "6c5142618c3f5b73b72829108626271d";
        let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrlForecast).then(displayForecast);

        return null;


        
    }
    
    
}