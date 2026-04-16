import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateinfo}){
    let[city,setcity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="9292b0d093ff49412d028fdbebb08bcb";

    let getWeatherInfo =async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let JsonResponse=await response.json();
         console.log(JsonResponse);

         let Result={
            city:city,
            tepm:JsonResponse.main.temp,
             tepmMin:JsonResponse.main.temp_min,
             tepmMax:JsonResponse.main.temp_max,
             humidity:JsonResponse.main.humidity,
             feelsIsLike:JsonResponse.main.feels_like,
             weather:JsonResponse.weather[0].description,
             
         };
         console.log(Result);
         return Result;
    }


    let handleChange=(event)=>{
        setcity(event.target.value);
    };

        let handleSubmit= async(event)=>{
            event.preventDefault();
            console.log(city);
            setcity("");
           let newInfo=await getWeatherInfo();
            updateinfo(newInfo);
        }

    

    return(
        <div>
          

           <form onSubmit={handleSubmit}>

         <TextField id="city" 
         label="city name"
          variant="outlined" value={city}
           onChange={handleChange}
            />
            <br/> <br/>


          <Button variant="contained"
           type="submit" style={{ marginBottom: 20 }}>  search</Button>

           </form>
        </div>
    )
}