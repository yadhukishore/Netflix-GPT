import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";

const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();


  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      Main Container
       -video bg
       -video Title
      Secondary Container
       -MovieList *n
        -cards*n
      
      */}
    </div>
  );
};

export default Browse;
