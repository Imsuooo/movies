import React from 'react';
import { useState} from 'react';
import Movie from '../Movie';
import Moviesfrom from '../Moviesfrom';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const addMovie = (movie) =>{
      setMovies([
        ...movies,
        movie
      ])
    }
    const removeMovie = (id) =>{
      setMovies(movies.filter(movie=>{
        return movie.id !==id;
      }))
    }
  
    const currentMovie =movies.length ? movies.map((movie)=>{
     return(
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
     )
    }):'Movie add'
   
    return (
        <div>
            <h1 className='title'>Movie list</h1>
            <Moviesfrom addMovie={addMovie}/>
            {currentMovie}
        </div>
    );
};

export default Movies;