import { POSTER_URL } from "../utils/urls";

const MovieCard = ({poster}) => {
    return (
        <div className="w-[250px] px-2">
            <img className="w-[250px] h-[200px] " src={POSTER_URL+poster} />
        </div>
    );
};
export default MovieCard;