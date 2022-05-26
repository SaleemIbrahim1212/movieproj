import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Logo from './images.png'
import Form from 'react-bootstrap/Form'
import {FormControl} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import MovieCard from './MovieCard'
import react from "react";
import ReactDOM from 'react-dom';

function App() {

  const MovieData = [

      {
          "Title": "Enter the Anime",
          "Year": "2019",
          "imdbID": "tt10662450",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwNGI5MTAtMGJlZS00MzZlLWJjNmItZDcxYTFmY2VmMGJlXkEyXkFqcGdeQXVyMjUxMTEwNTE@._V1_SX300.jpg"
      },
      {
          "Title": "Weird Anime Excel Saga",
          "Year": "1999–2001",
          "imdbID": "tt0240493",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTIxMTM5MDY4NF5BMl5BanBnXkFtZTYwODcyNDk5._V1_SX300.jpg"
      },
      {
          "Title": "Tokyo Ghoul: Re - Anime",
          "Year": "2018",
          "imdbID": "tt8046356",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNGU5ZDA0MDUtMDBlYS00OGIyLThjYTYtMmRkODc0MGYyNDE5XkEyXkFqcGdeQXVyMjI2ODkzODY@._V1_SX300.jpg"
      },
      {
          "Title": "Marvel Anime",
          "Year": "2010–2011",
          "imdbID": "tt1945805",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzM2M2M2MmItYjE3NS00YmNhLTkyZmItYzNkZWJiYzJmYjg0XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
      },
      {
          "Title": "Anime san jushi",
          "Year": "1987–1989",
          "imdbID": "tt0294002",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BM2IzMThlNTAtNTRjZS00NzlkLThjYjgtOGU3ZmIzNGE5ZjQ3XkEyXkFqcGdeQXVyMzQ4MDczNzQ@._V1_SX300.jpg"
      },
      {
          "Title": "Your Anime Sucks: Sword Art Online II",
          "Year": "2014–2015",
          "imdbID": "tt8183792",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDZjZWMxNjItMGI0Yy00MzA1LTg0OGMtOTc1MmEzMDQwZTk2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjg4NzY5ODc@._V1_SX300.jpg"
      },
      {
          "Title": "Anime Crimes Division",
          "Year": "2017–",
          "imdbID": "tt7700928",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZTQyZWY5ZWYtNmNlZC00YTJiLWE5OTYtYjllZTc3MWQwYTAwXkEyXkFqcGdeQXVyMTQ4NDAzMDQ@._V1_SX300.jpg"
      },
      {
          "Title": "Anime Abandon",
          "Year": "2011–",
          "imdbID": "tt2293415",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDA1YTUzMGItYTlhMS00ODY0LTg3ZmUtMzJjNjM5Zjc1NTQ4XkEyXkFqcGdeQXVyNjg5MjUzMTI@._V1_SX300.jpg"
      },
      {
          "Title": "Mumkey's Anime Reviews",
          "Year": "2016–2017",
          "imdbID": "tt8252754",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZWIwYjg3NDEtYWRhYi00NjM2LWI4MzUtZTRmYjEyNWFkMjJkXkEyXkFqcGdeQXVyNjM0ODM5MTk@._V1_SX300.jpg"
      },
      {
          "Title": "The SpongeBob SquarePants Anime",
          "Year": "2020–",
          "imdbID": "tt12895414",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg"
      }


  ]

  return (

      <body>
    <div className="main">

      <div className="NavBar">
        <img className="iniLogo" src ={Logo} />


          <div className="SearchBar">
        <Form className = "d-flex">

            <FormControl
                type = "search"
                placeholder =" Search for movies"
                className = "me-2"
                aria-label = "Search"
                />
            <Button variant = "outline-success">Search</Button>
        </Form>
          </div>


      </div>
      { MovieData.map( (m) =>  <MovieCard Title = {m.Title} Year = {m.Year} imdbID = {m.imdbID} Type = {m.Type} Poster = {m.Poster}/> ) }






    </div>

      </body>
  );
}

export default App;
