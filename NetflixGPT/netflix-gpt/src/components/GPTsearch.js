import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTsearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img  className="object-cover h-screen md:h-[100%] "
				src= {BG_URL}
				alt='Background' />
      </div>
      <div className=''>
       <GptSearchBar />
      <GptMovieSuggestion /> 
			
		</div>
    </> 
  )
}

export default GPTsearch
