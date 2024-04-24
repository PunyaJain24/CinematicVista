import { LANG_TYPES, LOGO_URL } from "../utils/urls";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { switchSearchMode } from "../utils/searchSlice";
import { changeLanguage } from "../utils/langSlice";
import logoImage from "../utils/logoImage.png"


const Header = () => {
    const user = useSelector((store) => store.user);
    const searchState = useSelector(store => store.search);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName } = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate("/Browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });
          return () => unsubscribe();
    },[]);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className="absolute w-full bg-gradient-to-b z-10 from-black text-white flex justify-between">
            <img className="w-44 pt-1 mx-6 bg-transparent" src={logoImage} alt="logo" />
            {user && <div className="flex justify-between">
                {searchState.gptSearch && <select className="bg-gray-700 my-4 px-2 py-1 mx-2 rounded-md" onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                  {LANG_TYPES.map(lg => <option value={lg.identifier}>{lg.name}</option>)}
                </select>}
                <button onClick={() => dispatch(switchSearchMode())} className="text-white bg-transparent hover:text-gray-400 my-5 p-2 rounded-lg font-semibold">{searchState.gptSearch ? "Home" : "Discover Gems"}</button>
                <img className="w-12 m-3" src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png" alt="profile-icon" />
                <button onClick={() => handleSignOut()} className="mx-2 font-semibold hover:text-gray-400" >Sign out</button>
            </div>}
        </div>
    );
};

export default Header;