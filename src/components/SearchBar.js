import { useSelector } from "react-redux";
import lang from "./languageConstraints";
import { useRef } from "react";
import openai from "../utils/openai";


const SearchBar = () => {
    const languageMode = useSelector(store => store.lang.language);
    const searchText = useRef(null);
    const handleSearchText = async () => {
        console.log(searchText.current.value);
        
        const query = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me name of 5 movies, comma separated like the example result. Example result : Fighter, Super 30, chichore, Taare zameen par, Munna Bhai MBBS";
        const result = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
          });
        console.log(result.choices);
    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12 rounded-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={searchText}
                    className="p-4 m-4 col-span-9 rounded-md font-semibold text-black" 
                    type="text" 
                    placeholder={lang[languageMode].searchPlaceholder}
                />
                <button className="bg-blue-700 p-4 col-span-3 m-4 font-mono font-bold text-lg rounded-lg text-white" onClick={handleSearchText}>{lang[languageMode].search}</button>
            </form>
        </div>
    );
};

export default SearchBar;
