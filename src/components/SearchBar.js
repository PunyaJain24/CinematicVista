import { useDispatch, useSelector } from "react-redux";
import lang from "./languageConstraints";
import { useRef } from "react";
import { URL_OPTIONS } from "../utils/urls";
import { addGptMovies } from "../utils/searchSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";


const SearchBar = () => {
    const languageMode = useSelector(store => store.lang.language);
    const searchText = useRef(null);
    const genAI = new GoogleGenerativeAI("AIzaSyBglGbhCzvIHIz97VWUYA8vnbg_pl7yD7U");
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
        //const gptMovies = result.choices?.[0]?.message?.content.split(",");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(query);
        if(!result){
            return <h1>Cann't fetch data. Try Again in some time</h1>
        }
        const response = await result.response;
        const text = response.text();
        const gptMovies = text.split(",");
        console.log(gptMovies);
        const data = gptMovies.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(data);
        dispatch(addGptMovies({movieNames: gptMovies , moviesFetchData: tmdbResults}));
    }
    return (
        <div className="pt-[15%] md:pt-[4%] flex justify-center">
            <form className="w-2/3 md:w-1/2 grid grid-cols-12 z-10 rounded-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={searchText}
                    className="p-2 my-6 m-2 col-span-9 rounded-2xl font-semibold text-black" 
                    type="text" 
                    placeholder={lang[languageMode].searchPlaceholder}
                />
                <button className="bg-blue-800 p-1 col-span-3 my-6 m-2 font-mono font-bold text-sm md:text-lg rounded-lg md:rounded-2xl text-white" onClick={handleSearchText}>{lang[languageMode].search}</button>
            </form>
        </div>
    );
};

export default SearchBar;
