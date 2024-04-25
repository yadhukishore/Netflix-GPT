import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSiginInForm, setIsSiginInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSiginInForm(!isSiginInForm);
  };
  console.log("isSiginInForm:", isSiginInForm);
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackGround"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSiginInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSiginInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {isSiginInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSiginInForm
            ? "New to Netflix? Sign UP Now!"
            : "Alredy Registerd? Sign In Back!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
