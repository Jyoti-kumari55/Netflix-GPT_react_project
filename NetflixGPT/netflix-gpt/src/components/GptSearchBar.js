import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

const GptSearchBar = () => {
   const langKey = useSelector((store) => store.config.language);
    return (
        <div className="pt-[10%] flex justify-center">
           <form className="w-1/2 bg-black grid grid-cols-12">
              <input 
                 type="text" 
                 className="p-4 m-4 rounded-lg col-span-9" 
                 placeholder={language[langKey].gptSearchPlaceholder}                  
                 />
               <button className="py-2 px-4 m-4 bg-red-700 col-span-3 rounded-lg text-white">
                  {language[langKey].search}
               </button>     
           </form>
        </div>
    )

}

export default GptSearchBar;