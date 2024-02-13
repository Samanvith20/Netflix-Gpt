import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8 ">
      <h1 className="text-xl md:text-3xl py-4 md:py-10 text-white font-semibold ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link to ={"/movie/" + movie?.id} key={movie?.id}>
              <MovieCard 
                cardTitle={movie?.title || movie?.name}
                posterPath={movie?.poster_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;