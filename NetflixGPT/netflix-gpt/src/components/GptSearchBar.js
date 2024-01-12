import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
   const langKey = useSelector((store) => store.config.language);
   const searchText = useRef(null);
   const dispatch = useDispatch();

   const searchMoviesTMDB = async (movie) => {
      const data = await fetch(
         "https://api.themoviedb.org/3/search/movie?query=" +
           movie +
         "&include_adult=false&language=en-US&page=1",
         API_OPTIONS
      );

      const json = await data.json()
         return json.results;
   };

   const handleGptSearchClick = async () => {
      console.log(searchText.current.value);

      //Making an API call to GPT to get the results

      const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query : " + 
               searchText.current.value + 
               ". only give me names of 6 movies, comma separated like the example result given ahead. Example Result: Golmaal, Dhol, Hera Pheri, Koi Mil Gaya, Hum Sath Sath Hai";

      const gptResults = await openai.chat.completions.create({
         messages: [{ role: 'user', content: gptQuery }],
         model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices) return "Not Found..";

      console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));

      const tmdbMoviesResult = await Promise.all(promiseArray);
       console.log(tmdbMoviesResult);
       dispatch(addGptMovieResult({moviesNames: gptMovies, movieResults: tmdbMoviesResult}));
   };
   
    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
           <form 
              className="md:w-1/2 w:full bg-black grid grid-cols-12"
              onSubmit={(e) => e.preventDefault()}
                  >
              <input 
                 ref={searchText}
                 type="text" 
                 className="p-4 m-4 rounded-lg col-span-9" 
                 placeholder={language[langKey].gptSearchPlaceholder}                  
                 />
               <button className="py-2 px-4 m-4 bg-red-700 col-span-3 rounded-lg text-white"
                  onClick={handleGptSearchClick}
                >
                  {language[langKey].search}
               </button>     
           </form>
        </div>
    )

}

export default GptSearchBar;