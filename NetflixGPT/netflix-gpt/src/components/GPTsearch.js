import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTsearch = () => {
  return (
    <div>
       <div className='absolute -z-20 w-screen'>
			<img  className=""
				src= {BG_URL}
				alt='Background' />
		</div>
      <GptSearchBar />
      <GptMovieSuggestion />

       
    </div>
  )
}

export default GPTsearch
