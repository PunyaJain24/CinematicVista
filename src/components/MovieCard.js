import { POSTER_URL } from "../utils/urls";

const MovieCard = ({title, poster}) => {
    console.log(title);
    if(!poster) return null;
    return (
        <div className="w-[290px] px-2 hover:transform hover:scale-105 transition duration-330">
            <img className="w-[400px] h-[170px] hover:cursor-pointer rounded-lg" src={POSTER_URL+poster} />
            <h4 className="text-white py-2 font-medium font-serif px-2">{title}</h4>
        </div>
    );
};
export default MovieCard;