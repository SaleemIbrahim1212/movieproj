import react, {useEffect, useRef} from "react";
import {useState} from "react";
import './Container.css'
import Amazon from './prime.png'
import Youtube from './youtube.png'
import Netflix from './netflix.png'
import ls from "localstorage-ttl";

export const  Streams =  (props) =>
{


    const [isNetflix, setNetflix] = useState(false )
    const [isPrime, setPrime ] = useState(false)
    const [Netflixurl, setNetflixurl] = useState('')
    const [Primeurl, setPrimeurl] = useState('')

    const CacheDataNetflix  = props.Title + "Netflix"
    const CacheDataAmazon  = props.Title + "Amazon"
    const ls  = require('localstorage-ttl')



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '5865186d09msh28f738a14950d04p13e3ddjsn14200648c2e1'
        }
    };

    useEffect(() => {

        if (! ( ls.get(CacheDataNetflix) ||  ls.get(CacheDataAmazon) )) {
            fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + props.Title + '&country=ca', options)
                .then(response => response.json())
                .then(response =>

                    response.results.map((r) => r.locations.map((e) => {

                            const name = e.display_name
                            const url = e.url

                            if (name === "Netflix" && isNetflix === false) {

                                setNetflixurl(url)
                                setNetflix(true)
                                ls.set(CacheDataNetflix, url)


                            }
                            if (name === "Amazon Prime Video" && isPrime === false) {

                                setPrimeurl(url)
                                setPrime(true)
                                ls.set(CacheDataAmazon, url)

                            }

                        }
                    )))
                .catch(err => console.error(err));
        }
        else
        {

            console.log ("Checking cache .....")
            let links = ls.get(CacheDataNetflix)

            if (links) {
                setNetflixurl(ls.get(CacheDataNetflix))
                setNetflix(true)

            }
            links = ls.get(CacheDataAmazon)

            if (links)
            {
                 setPrimeurl(ls.get(CacheDataAmazon))
                setPrime(true)

            }
        }

    }, [] );











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
