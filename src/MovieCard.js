
import react from 'react'
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import images from './images.png'
import './Container.css'
import Amazon from './prime.png'
import Youtube from './youtube.png'
import Netflix from './netflix.png'
import {AppSearch} from "./APISearch";
import { nanoid } from 'nanoid'
function MovieCard (props)
{
    const  APISEARCH =  () =>
    {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '5865186d09msh28f738a14950d04p13e3ddjsn14200648c2e1'
            }
        };


        fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=ca', options)
            .then(response => response.json())
            .then(response => console.log(response.results.map((r) =>  r.locations.map((e ) => e.display_name))))
            .catch(err => console.error(err));
    }

 return (
<div className= "Cardz" >
    <Card style={{ width: '18rem', backgroundColor: 'lightsalmon', height: '-webkit-fill-available'}}>
        <Card.Img variant="top" src=  {props.Poster} height='400px' width='400px' alt = {props.Title } />
        <Card.Body style ={{justifyContent: 'center' , height: '30'}}>
            <img className="Images" src={Netflix} width="50" height="50"  margin= " 10px" onClick={ () => AppSearch(props.Title, true,false)} />
            <img className="Images" src = {Youtube} width="50" height="50"   margin= " 10px" onClick={ () => {window.open("https://www.youtube.com/results?search_query=" + props.Title)}}/>
            <img className="Images" src = {Amazon} width = "50" height= "50"   margin= " 10px" onClick={ () => AppSearch(props.Title, false,true)}/>

         </Card.Body>
    </Card>
</div>


 );
}

export default MovieCard;


