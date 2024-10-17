import { LANG_TYPES, LOGO_URL, URL_OPTIONS } from "../utils/urls";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { switchSearchMode } from "../utils/searchSlice";
import { changeLanguage } from "../utils/langSlice";
import logoImage from "../utils/logoImage.png";
import Notification from "./Notification";

const Header = () => {
    const user = useSelector((store) => store.user);
    const searchState = useSelector(store => store.search);
    const [movieName, setMovieName] = useState("");
    const [search, setSearch] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearch(true);
        }
    };

    const fetchMovieId = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US`, URL_OPTIONS);
        const json = await data.json();

        const result = json.results;
        const actualMovie = result.filter((movie) => movie.title.substr(0, movieName.length).toLowerCase() === movieName.toLowerCase());
        console.log(actualMovie);

        if (search) {
            if (actualMovie.length !== 0) {
                navigate('/movie/' + actualMovie[0]?.id);
            } else {
                setNotificationVisible(true);
            }
            setSearch(false);
        }
    };

    useEffect(() => {
        if (search) {
            fetchMovieId();
        }
    }, [search]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate("/Browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.error("Sign out error:", error);
        });
    };

    return (
        <div className="absolute w-full bg-gradient-to-b z-10 from-black text-white flex justify-between">
            <Link to={'/Browse'}>
                <img className="w-24 md:w-44 pt-2 mx-2 md:mx-6 bg-transparent" src={logoImage} alt="logo" />
            </Link>
            {!searchState.gptSearch && user && (
                <input
                    className="w-1/3 mt-4 m-3 p-2 bg-gray-900 py-0 border-2 rounded-3xl"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setMovieName(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            )}
            {user && (
                <div className="flex justify-evenly md:justify-between">
                    {searchState.gptSearch && (
                        <select className="bg-gray-700 my-4 px-2 py-1 mx-2 rounded-md" onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                            {LANG_TYPES.map(lg => <option key={lg.identifier} value={lg.identifier}>{lg.name}</option>)}
                        </select>
                    )}
                    <button onClick={() => dispatch(switchSearchMode())} className="text-white bg-transparent hover:text-gray-400 my-1 md:my-5 py-2 md:p-2 rounded-lg text-sm md:text-lg font-thin md:font-semibold">
                        {searchState.gptSearch ? "Home" : "Discover Gems"}
                    </button>
                    <img className="w-8 h-8 md:h-auto md:w-12 mt-3 mx-1 md:m-3" src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png" alt="profile-icon" />
                    <button onClick={handleSignOut} className="mx-1 md:mx-2 text-sm md:text-lg font-thin md:font-semibold hover:text-gray-400">Sign out</button>
                </div>
            )}
            <Notification 
                isVisible={notificationVisible} 
                message="Movie Not Found" 
                onClose={() => setNotificationVisible(false)} 
            />
        </div>
    );
};

export default Header;
