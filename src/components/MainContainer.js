import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    return (
        <div className="pt-[11%] md:pt-0 bg-black">
            <VideoTitle id={id} title={original_title} overview={overview} />
            <VideoBackground trailer_key={id}/>
        </div>
    );
};

export default MainContainer;