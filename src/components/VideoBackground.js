import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({trailer_key}) => {
    
    useMovieTrailer(trailer_key);
    const trailer = useSelector(store => store.movies?.trailerVideo);

    return (
        <div className="w-screen">
            <iframe 
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&playlist="+trailer?.key+"&loop=1"} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
    );
};
export default VideoBackground;