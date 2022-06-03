
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
import Streams from './StreamChannels'
import {useState} from "react";
import {useEffect} from "react";

function MovieCard (props)
{



    const [i, seti] = useState(1)
    const [flag, setFlag] = useState(false);
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

    function increment()
    {
        seti(i+ 1 )

    }


 return (

     <div className={"item"}>
    <Card style={{ width: '18rem', backgroundColor: 'black'}}>
        <Card.Img variant="top" src=  {props.Poster} height='400px' width='400px' alt = {props.Title } onClick={() => {setFlag(!flag)}} />
        { flag === true ? <Card.Body id = "myDiv" >
            <Streams Title = {props.Title} />
         </Card.Body> : ""}
    </Card>

     </div>


 );

}

export default MovieCard;


