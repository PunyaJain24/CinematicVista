import { useSelector } from "react-redux";
import usePlatingMovies from "../hooks/usePlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import SearchPage from "./SearchPage";

const Browse = () => {
    const mode = useSelector(store => store.search.gptSearch);
    usePlatingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {mode ? <SearchPage /> : <><MainContainer />
            <SecondaryContainer /></>}
        </div>
    )
};

export default Browse;