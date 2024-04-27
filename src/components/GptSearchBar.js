import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const basha = useSelector((store)=>store.config.lang)
  return (
    
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black via-red-950 to-black">
      <form className="bg-gray-700 p-4 -mt-96 rounded-lg shadow-md flex">
        <input
          type="text"
          placeholder={lang[basha].placeholder}
          className="w-[700px] py-2 px-4 bg-gray-600 text-white rounded-l-lg outline-none focus:ring-2 focus:ring-red-500"        />
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded-r-lg hover:bg-red-700 transition-colors duration-300"
        >
          {lang[basha].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;