import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const popular_movies = useSelector(store => store.movies?.popularMovies);
    const topratedMovies = useSelector(store => store.movies?.topRatedMovies);
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);
    return (
        <div className="bg-black w-screen">
            <div className="mt-0 md:py-0 py-3 md:-mt-52 relative z-20">
                <MovieList title={"Now Playing"} movies={movies} />
                <MovieList title={"Popular"} movies={popular_movies} />
                <MovieList title={"Top Rated"} movies={topratedMovies} />
                <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
            </div>
        </div>
    );
};
export default SecondaryContainer;