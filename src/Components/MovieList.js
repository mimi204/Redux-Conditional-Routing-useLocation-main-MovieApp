import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Search from "./Search";
import AddMovie from "./AddMovie";

const MovieList = () => {
  const movieList = useSelector((state) => state.movies);
  const { isAdmin, searchValue, searchRating } = useSelector((state) => state);
  return (
    <div>
      <Search />
      <div className="movie-list">
        {movieList
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              el.rating >= searchRating
          )
          .map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
      {isAdmin ? <AddMovie /> : null}
    </div>
  );
};

export default MovieList;
