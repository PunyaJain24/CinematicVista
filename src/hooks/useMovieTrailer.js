import { useEffect } from "react";
import { URL_OPTIONS } from "../utils/urls";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (trailer_key) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+trailer_key+'/videos?language=en-US',URL_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        if(filterData.length === 0) filterData = json.results;
        const trailer = filterData[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieTrailer();
    },[]);
};
export default useMovieTrailer;