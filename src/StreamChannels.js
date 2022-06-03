import react from "react";
import images from './images.png'
import './Container.css'
import Amazon from './prime.png'
import Youtube from './youtube.png'
import Netflix from './netflix.png'
import {AppSearch} from "./APISearch";
import { nanoid } from 'nanoid'
function Streams (props)
{

    return (


        <>

        <img className="Images" src={Netflix} width="50" height="50"  margin= " 10px" onClick={ () => AppSearch(props.Title, true,false)} />
    <img className="Images" src = {Youtube} width="50" height="50"   margin= " 10px" onClick={ () => {window.open("https://www.youtube.com/results?search_query=" + props.Title)}}/>
    <img className="Images" src = {Amazon} width = "50" height= "50"   margin= " 10px" onClick={ () => AppSearch(props.Title, false,true)}/>
        </>
)


}

export default Streams;
