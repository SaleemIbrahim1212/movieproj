
import react from 'react'
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import images from './images.png'
import './Container.css'
import Amazon from './prime.png'
import Youtube from './youtube.png'
import Netflix from './netflix.png'


function MovieCard (props)
{
 return (
<div className= "Cardz">
    <Card key = {props.imdbID} style={{ width: '18rem', backgroundColor: 'black', height: '-webkit-fill-available'}}>
        <Card.Img variant="top" src=  {props.Poster} height='400px' width='400px'/>
        <Card.Body style ={{justifyContent: 'center'}}>
            <img className="Images" src={Netflix} width="50" height="50"  margin= " 10px"/>
            <img className="Images" src = {Youtube} width="50" height="50"   margin= " 10px"/>
            <img className="Images" src = {Amazon} width = "50" height= "50"   margin= " 10px"/>
         </Card.Body>
    </Card>
</div>


 );
}

export default MovieCard;


