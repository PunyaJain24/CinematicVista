import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";
import backGround from "../utils/backGround.jpg"

const SearchPage = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img className="fixed h-screen object-cover md:h-auto" src={backGround} />
            </div>
            <SearchBar />
            <MovieSuggestions />
        </div>
    );
};

export default SearchPage;