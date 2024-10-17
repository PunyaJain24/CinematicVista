import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className="py-2 px-1 md:px-3 w-screen">
            <h1 className="text-lg md:text-2xl py-2 mt-3 px-3 md:py-3 font-semibold font-mono text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide py-3">
                <div className="flex">
                    {movies && movies.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path}  />)}
                </div>
            </div>
        </div>
    );
};
export default MovieList;