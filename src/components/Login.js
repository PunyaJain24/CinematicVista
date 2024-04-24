import { useRef, useState } from "react";
import { BACK_URL } from "../utils/urls";
import Header from "./Header";
import validData from "../utils/ValidData";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { setAuthState } from "../utils/Auth";

const Login = () => {
    const [toggleIcon,setToggleIcon] = useState(true);
    const [errorMessage,setErrorMessage] = useState(false);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const checkValidate = () => {
        const message = validData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(toggleIcon){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setAuthState(user);
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png"
                  }).then(() => {
                    const {uid, email, displayName } = user;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                    setAuthState(user);
                  }).catch((error) => {
                    setErrorMessage(message);
                  });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErrorMessage(errorCode.split('/')[1] + ". " + "SignIn below");
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute -z-20">
                <img src={BACK_URL} />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black mx-auto my-32 left-0 right-0 w-6/12 p-12 text-white rounded-md bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{toggleIcon ? "Sign Up" : "SignIn"}</h1>
                
                {toggleIcon && <input ref={name} type="text" placeholder="Full Name" className="my-4 p-2 w-full rounded-lg bg-gray-800" />}
                
                <input ref={email} type="text" placeholder="abc@gmail.com" className="my-4 p-2 w-full bg-gray-800 rounded-lg" />
                
                <input ref={password} type="password" placeholder="Enter Password" className="my-4 p-2 w-full bg-gray-800 rounded-lg" />
                
                <button className="my-5 p-2 bg-red-600 font-bold w-full rounded-lg" onClick={() => checkValidate()}>{toggleIcon ? "Sign Up" : "SignIn"}</button>
                {errorMessage !== null && <p className="text-red-500 my-1 py-2 font-serif font-semibold">{errorMessage}</p> }
                
                <p className="cursor-pointer hover:text-blue-400" onClick={() => setToggleIcon(!toggleIcon)}>{toggleIcon ? "Already an account ? SignIn Now" : "New to CinematicVista ? Sign Up Now"}</p>
            </form>
        </div>
    );
};

export default Login;