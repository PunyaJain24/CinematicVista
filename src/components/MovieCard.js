import { Link } from "react-router-dom";
import { POSTER_URL } from "../utils/urls";

const MovieCard = ({id, title, poster}) => {
    if(!poster) return null;
    return (
        <div className="w-[200px] mx-1 md:mx-2 md:w-[290px] md:px-2 hover:transform hover:scale-105 transition duration-330">
            <Link to={'/movie/'+id}><img className="w-[200px] h-[100px] md:w-[400px] md:h-[170px] hover:cursor-pointer rounded-lg" src={POSTER_URL+poster} /></Link>
            <h4 className="text-white py-1 md:py-2 md:font-medium font-serif px-1 md:px-2">{title}</h4>
        </div>
    );
};
export default MovieCard;