import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
    const gpt = useSelector(store => store.search);
    const {gptMovieNames, gptMovies} = gpt;

    if(!gptMovieNames) return null;
    return (
        <div className="bg-black py-3 bg-opacity-30">
            <div>
            {gptMovieNames.map((movie,index) => <MovieList key={movie.id} title={movie} movies={gptMovies[index]} />)}
            </div>        
        </div>
    );
};

export default MovieSuggestions;