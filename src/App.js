import React, { useState, useEffect } from "react";

import './App.css'
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?apikey=dd9f6984';

const App = () => {
 const [movies, addMovies] = useState([]);  //addMovies is setter function for movies variable/propery
 const [searchTerm, setSearchTerm] = useState(''); 

 const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    addMovies(data.Search);
 }
 
 useEffect(() => {
   searchMovies('Spiderman');
 }, []);

 return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input placeholder="Search for movies" value={searchTerm} 
            onChange={(e) => {setSearchTerm(e.target.value)}}
            onKeyDown={(e) => {
              if(e.code === "Enter") {
                 searchMovies(searchTerm);
              }
            }}
           />
          <img src={searchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
        </div>

        {movies?.length > 0 
          ?
          <div className="container">
            {movies.map((movie,id) => (<MovieCard key={id} movie={movie}/>))}
          </div>
          :
          <div className="container empty">
             <h2>No movies found!</h2>
          </div>
        }  

    </div>
  )
}

export default App;