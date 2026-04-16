import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo ,setweatherInfo]=useState({
         city:"city",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:"haze",
        weather:"haze",
    });

    let updateInfo=(result)=>{
        setweatherInfo(result);

    }
    return(
        <div>
            <h2>Weather App by Delta</h2>
            <SearchBox updateinfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}