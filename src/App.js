import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Logo from './images.png'
import Form from 'react-bootstrap/Form'
import {FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import MovieCard from './MovieCard'
import react, {useState} from "react";
import ReactDOM from 'react-dom';
import {useEffect} from "react";

function App() {

    const [Searchs, UpdateSearch] = useState(`https://www.omdbapi.com/?s=one piece&apikey=2cd52f36`);
    const [MovieData, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url = Searchs;

        const response = await fetch(Searchs);
        const responseJson = await response.json();
        setMovies([])
        if (responseJson.Search) {
            setMovies([])
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest();
    }, [Searchs]);
    const getinputfromsearch = (e) =>
    {
        e.preventDefault();

        const val = document.getElementById("Forms").value;
        UpdateSearch(`https://www.omdbapi.com/?s=` + val + `&apikey=2cd52f36` )


    };



  return (

      <body>
    <div className="main">

      <div className="NavBar">
        <img className="iniLogo" src ={Logo} onClick= {() => window.location.reload(false) }  />


          <div className="SearchBar">
        <Form className = "d-flex" onSubmit={getinputfromsearch}>

            <FormControl
                id = "Forms"
                type = "search"
                placeholder =" Search for movies"
                className = "me-2"
                aria-label = "Search"

                />
            <Button variant = "outline-success" onClick= {getinputfromsearch}>Search</Button>
        </Form>
          </div>


      </div>

        <div className="center">
      { MovieData.map( (m) =>  <MovieCard   Title = {m.Title} Year = {m.Year} imdbID = {m.imdbID} Type = {m.Type} Poster = {m.Poster}/> ) }

        </div>




    </div>

      </body>
  );
}

export default App;
