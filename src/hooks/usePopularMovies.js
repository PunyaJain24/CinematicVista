import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { URL_OPTIONS } from "../utils/urls";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=3',
        URL_OPTIONS);

        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    },[])
};

export default usePopularMovies;