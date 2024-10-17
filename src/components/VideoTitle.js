import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoTitle = ({id, title, overview}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const video_key = useSelector(store => store?.movies?.trailerVideo?.key);

    const truncateText = (text, wordLimit) => {
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

    const truncatedOverview = truncateText(overview, 10);

    return (
        <div className="pt-[27%] md:pt-[20%] aspect-video w-screen px-2 md:px-6 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-medium md:font-bold text-lg md:text-4xl">{title}</h1>
            <p className="mt-2 md:my-4 w-4/5 md:w-1/2 text-sm md:text-lg font-thin md:font-serif">
                {isSmallScreen ? truncatedOverview : overview}
            </p>
            <Link to={'/video/'+video_key}>
                <button className="bg-white p-1 md:p-3 w-20 md:w-24 text-black rounded-lg font-mono font-semibold my-3 md:my-3 hover:bg-opacity-75">Play</button>
            </Link>
            <Link to={'/movie/'+id}>
                <button className="bg-gray-500 p-1 md:p-3 w-20 md:w-24 mx-2 text-white rounded-lg hover:bg-gray-800">More Info</button>
            </Link>
        </div>
    );
};

export default VideoTitle;
