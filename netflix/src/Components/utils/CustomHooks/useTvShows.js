import { useDispatch, useSelector } from "react-redux";

import { addTvShows } from "../Store/movieSlice"
import { useEffect } from "react";
import { OPTIONS } from "../Constants";

const useTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector(store=>store.movies.tvShows);

  const moviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
  !tvShows && moviesList();
  }, []);
};

export default useTvShows;