import MovieHeader from "./MovieHeader";
import MoviePlaylist from "./MoviePlaylist";
import { useParams } from "react-router-dom";

const MoviePage = () => {
    const {movieId} = useParams();
    return (
        <div className="bg-gray-950 w-full min-h-screen text-white overflow-auto">
            <MovieHeader id={movieId} />
            <MoviePlaylist id={movieId}/>
        </div>
    );
};

export default MoviePage;