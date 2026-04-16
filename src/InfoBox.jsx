import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    let COLD_URL="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    
    return(
        <div class="info">
            
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity> 80? RAIN_URL:
          info.tepm> 15? 
          HOT_URL:
          COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary'component={"span"} className="taypo">
          <p>Tempreature={info.tepm}</p>
          <p>Humidity={info.humidity}</p>
          <p>Temp_Minimum={info.tepmMin}</p>
          <p>Temp_Maximum={info.tepmMax}</p>
          <p>the Weather={info.weather}</p>

        </Typography>
      </CardContent>
      
    </Card>
  

        </div>
    )
}