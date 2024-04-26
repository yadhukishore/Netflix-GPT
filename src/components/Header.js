import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Face_Icon, LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
  const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        //When User Sign'sUp for 1st time/ Also Sign-In this will be called
        const { uid, email, name } = user;
        dispatch(addUser({ uid: uid, email: email, name: name }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when componets unmounds
    return()=>unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo-NetFlix"
      />

      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 p-2"
            alt="userIcone"
            src={Face_Icon}
          />
          <button
            className="text-lg text-white rounded-lg py-0"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
