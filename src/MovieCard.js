
import {Card} from "react-bootstrap";
import './Container.css'
import Streams from './StreamChannels'
import {useState} from "react";
import nopicture from './nopicture.gif'


function MovieCard (props)
{
const [flag, setFlag] = useState(false);

 return (

     <div className={"item"}>
    <Card style={{ width: '18rem' , backgroundColor: '#ffffff00'}} className= " hvr-float">
        <Card.Img variant="top hvr-float card" src =  { props.Poster === "N/A"  ?  nopicture :  props.Poster }  height='400px' width='400px' alt = {props.Title } onClick={() => {setFlag(!flag)}} />
        { flag === true ? <Card.Body  >
           <Streams Title = {props.Title}   Checked = {false}/>
         </Card.Body> : ""}
    </Card>

     </div>

 );

}

export default MovieCard;


