import react from "react";
import {useState} from "react";
import './Container.css'
import Amazon from './prime.png'
import Youtube from './youtube.png'
import Netflix from './netflix.png'

function Streams (props)
{

    const [isNetflix, setNetflix] = useState(false )
    const [isPrime, setPrime ] = useState(false)
    const [Netflixurl, setNetflixurl] = useState('')
    const [Primeurl, setPrimeurl] = useState('')

    const [isChecked, setChecked] = useState(false)


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '5865186d09msh28f738a14950d04p13e3ddjsn14200648c2e1'
        }
    };



 if (!isChecked) {
     console.log ("Here")
     fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + props.Title + '&country=ca', options)
         .then(response => response.json())
         .then(response =>

             response.results.map((r) => r.locations.map((e) => {

                     const name = e.display_name
                     const url = e.url

                     if (name === "Netflix" && isNetflix === false) {

                         setNetflixurl(url)
                         setNetflix(true)


                     }
                     if (name === "Amazon Prime Video" && isPrime === false) {

                         setPrimeurl(url)
                         setPrime(true)

                     }

                     setChecked(true)


                 }
             )))
         .catch(err => console.error(err));

 }

    return (


        <>


            { isNetflix === true ? <img className="Images" src={Netflix} width="50" height="50"  margin= " 10px" onClick={ () => window.open(Netflixurl, '_blank').focus() } />
             : <div></div>}


    <img className="Images" src = {Youtube} width="50" height="50"   margin= " 10px" onClick={ () => {window.open("https://www.youtube.com/results?search_query=" + props.Title)}}/>


            {isPrime === true ?            <img className="Images" src={Amazon} width="50" height="50" margin=" 10px"
                                                onClick={() => window.open(Primeurl, '_blank').focus() }/> : <div></div> }


        </>
)


}

export default Streams;
