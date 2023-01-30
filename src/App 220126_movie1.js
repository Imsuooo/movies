import './App.css';
import React, { useState } from 'react';
import Movie from './component/Movie';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [yearTitle, setMovieYear] = useState('');

  const [movies, setMovies] = useState([
    {title:'아바타', year : 2023},
    {title:'탑건2', year : 2022},
    {title:'그남자 좋은 간호사', year : 2022}
  ]);
  const rendermovies = movies.map((movie) =>{
    return(
      <Movie movie={movie} key={movie.title} />
    )
  });
  const onSubmit = (e) =>{
    e.preventDefault();
    setMovies([
      ...movies,{
        title : movieTitle,
        year : yearTitle
      }]);
      setMovieTitle('');
      setMovieYear('');
  }
  return (
   <div className='App'>
    <h1>영화 리스트</h1>
    <form action='#' onSubmit={onSubmit}>
      <input type="text" placeholder='영화 제목을 작성하세요.' value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}}/>
      <input type="text" placeholder='개봉 년도를 작성하세요.' value={yearTitle} onChange={(e)=>{setMovieYear(e.target.value)}}/>
      <button type='submit'>Movie Add</button>
    </form>
    {rendermovies}
   </div>
  );
}

export default App;
