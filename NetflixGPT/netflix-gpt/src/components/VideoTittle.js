import React from 'react';
import playLogo from "../assets/playIcon.png"

const VideoTittle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[22%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''> 

        <button 
          className='bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg'>
          {/* <img className=''
          src= {playLogo}
          alt='playIcon' 
          />  */}
          ▶ Play
        </button>

        <button 
          className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
            More Info
        </button>
      </div>  
      
    </div>
  )
}

export default VideoTittle;
