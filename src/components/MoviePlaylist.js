import { useEffect, useState } from "react";
import { URL_OPTIONS } from "../utils/urls";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const MoviePlaylist = ({ id }) => {
    const [playlist, setPlaylist] = useState([]);
    const [hoveredVideoId, setHoveredVideoId] = useState(null);

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, URL_OPTIONS);
        const json = await response.json();
        
        setPlaylist(json.results);
        console.log(json);
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleMouseEnter = (videoId) => {
        setHoveredVideoId(videoId);
    };

    const handleMouseLeave = () => {
        setHoveredVideoId(null);
    };

    if(playlist.length === 0) return <Shimmer />

    return (
        <div className="md:mx-20 pt-7 grid grid-cols-12">
            {playlist.map((video) => (
                    <div key={video.id} className="py-4 col-span-12 md:col-span-4">
                        <iframe
                            className="w-screen md:w-[300px] h-[200px] object-cover rounded-2xl border-2 border-transparent hover:border-white hover:scale-105 transition duration-330"
                            src={`https://www.youtube.com/embed/${video.key}${hoveredVideoId === video.id ? "?&autoplay=1&mute=1&playlist=" + video.key + "&loop=1" : ""}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            onMouseEnter={() => handleMouseEnter(video.id)}
                            onMouseLeave={handleMouseLeave}
                        ></iframe>
                        <div>
                            <Link to={'/video/'+video.key}>
                            <h2 className="pt-3 px-3 md:px-2 text-lg font-bold">{video.name}</h2>
                            <h4 className="px-3 md:px-2 font-bold text-gray-400">{video.type}</h4>
                            <h4 className="px-3 md:px-2 font-semibold text-gray-400 mb-3">{video.published_at.substr(0,10)}</h4>
                            </Link>
                        </div>
                    </div>
            ))}
        </div>
    );
};

export default MoviePlaylist;
