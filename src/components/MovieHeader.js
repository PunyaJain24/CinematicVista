import { useSelector } from "react-redux";
import { POSTER_URL } from "../utils/urls";
import { useState, useEffect } from "react";

const MovieHeader = ({ id }) => {
    const movieId = Number(id);
    const movies = useSelector(store => store.movies?.allMovies);
    const movie = movies?.find(movie => movie.id === movieId);
    
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!movie) return null;

    const truncatedOverview = truncateText(movie.overview, 10);

    return (
        <div className="grid grid-cols-12">
            <div className="mt-16 ml-6 md:ml-24 col-span-4">
                <img
                    className="w-[200px] h-[150px] md:w-[300px] md:h-[250px] rounded-2xl border-2 border-transparent hover:border-white hover:scale-105 transition duration-330"
                    src={POSTER_URL + movie.poster_path}
                    alt={movie.title}
                />
            </div>
            <div className="mt-10 ml-2 md:mt-16 col-span-8">
                <h1 className="font-medium md:font-extrabold text-xl md:text-3xl pt-8">{movie.title}</h1>
                <span>
                    <p className="mt-3 md:mt-5 w-3/4">
                        {isSmallScreen ? truncatedOverview : (movie.overview ? movie.overview.substr(0, 250) : '')}...
                    </p>
                </span>
            </div>
        </div>
    );
};

export default MovieHeader;
