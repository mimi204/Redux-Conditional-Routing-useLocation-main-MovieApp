import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { deleteMovie } from "../redux/actions";
import StarRating from "./StarRating";
import EditMovie from "./EditMovie";

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteMovie(movie.id));
  return (
    <div className="movie-card">
      <StarRating rate={movie.rating} />
      <h3> {movie.name} </h3>
      <img src={movie.image} alt={movie.name} />
      <p> {movie.date} </p>
      {location.pathname === "/admin" ? (
        <div>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
          <EditMovie oldMovie={movie} />
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
