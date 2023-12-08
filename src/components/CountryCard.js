
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CountryCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{height:"35vh", width:"20%",marginTop:"20px"}}>
       <CardMedia
        component="img"
        alt={props.name}
        height="160"
        image={props.flagUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
          {props.capital} || {props.population}
        </Typography>
      </CardContent>

    </Card>
  );
}
    