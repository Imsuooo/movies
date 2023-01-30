import './App.css';
import React, {useState, useEffect} from 'react';
import {useRef} from 'react';
import Movie from "./component/Movie";

function App() {
  useEffect(() =>{
      focusRef.current.focus();
    },[]
  )
  const [movieTitle, setMovieTitle] = useState('');
  const [movieyear, setMovieYear] = useState('');

  const [movies, setMovies] = useState([
    {title: '나이브스아웃2', year :'2022'},
    {title: '헤어질결심', year :'2022'},
    {title: '닥터스트레인지 대혼돈멀티버스', year :'2022'}
  ])
  const currentMovie =movies.map((movie)=>{
   return(
    <Movie movie={movie} key={movie.title} />
   )
  })
  const onSubmit = (e) =>{
    e.preventDefault();
    setMovies([
      ...movies,{
        title : movieTitle,
        year : movieyear
      }
    ]);
    setMovieTitle('');
    setMovieYear('');
    focusRef.current.focus();

  }
 const focusRef =useRef();
  return (
   <div>
   <h1>Movie list</h1>
   <form action='#' onSubmit={onSubmit}>
    <input type='text' placeholder='Movies Name' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}} ref={focusRef}/>
    <input type='text' placeholder='Movies year' value={movieyear} onChange={(e)=>{setMovieYear(e.target.value)}}/>
    <button type='submit'>Add</button>
   </form>
   {currentMovie}
   </div>
  );
}

export default App;
