import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTittle from './VideoTittle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    
    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;
  return (
    <div className='pt-[30%] bg-black md:pt-0'>    
      <VideoTittle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
