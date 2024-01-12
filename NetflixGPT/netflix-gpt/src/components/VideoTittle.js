import React from 'react';
//import playLogo from "../assets/playIcon.png"

const VideoTittle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl font-bold md:text-6xl'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'> 

        <button 
          className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg'>
          {/* <img className=''
          src= {playLogo}
          alt='playIcon' 
          />  */}
          ▶️ Play
        </button>

        <button 
          className='hidden mx-2 md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
            More Info
        </button>
      </div>  
      
    </div>
  )
}

export default VideoTittle;
