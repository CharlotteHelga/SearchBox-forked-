import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState({});
    let [loaded, setLoaded] = useState(false);

    function showWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
        });
        console.log(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="Search" placeholder="Input a city..." onChange={updateCity} />
            <button type="submit">Search</button>
        </form>
    );
    if (loaded) {
        return (
            <div>
                {form}
                <ul>
                    <li>Temperature: {Math.round(weather.temperature)}</li>
                    <li>Wind: {weather.wind}</li>
                    <li>description:{weather.description}</li>
                    <li>Humidity:{weather.humidity}</li>
                </ul>
            </div>
        )
    } else {
        return form;
    }

}