import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {moviesNames, movieResults} = useSelector((store) => store.gpt);

  if(!moviesNames) return null;

  return (
    <div className='p-4 m-4 text-white bg-black bg-opacity-90'>
     {moviesNames.map((movieName, index) => (
      <MovieList 
        key={movieName}
        title={movieName}
        movies={movieResults[index]} 
      />

     ))}
    </div>
  )
}

export default GptMovieSuggestion
