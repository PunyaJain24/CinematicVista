import { useDispatch, useSelector } from "react-redux";
import lang from "./languageConstraints";
import { useRef } from "react";
import openai from "../utils/openai";
import { URL_OPTIONS } from "../utils/urls";
import { addGptMovies } from "../utils/searchSlice";


const SearchBar = () => {
    const languageMode = useSelector(store => store.lang.language);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', URL_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const handleSearchText = async () => {
        
        const query = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me name of 5 movies, comma separated like the example result. Example result : Fighter, Super 30, chichore, Taare zameen par, Munna Bhai MBBS";
        // const result = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: query }],
        //     model: 'gpt-3.5-turbo',
        //   });
        // if(!result?.choices){
        //     return <h1>Cann't fetch data. Try Again in some time</h1>
        // }
        //const gptMovies = result.choices?.[0]?.message?.content.split(",");
        const gptMovies = ["Andaz Apna Apna", "Hera Pheri", "Padosan", "Angoor", "Chupke Chupke"]

        const data = gptMovies.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(data);


        dispatch(addGptMovies({movieNames: gptMovies , moviesFetchData: tmdbResults}));
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
