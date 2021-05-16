import { moviesData } from "../data";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FILTER_BY_NAME,
  FILTER_BY_RATING,
  LOGIN,
} from "./actionTypes";

const init = {
  movies: moviesData,
  searchValue: "",
  searchRating: 1,
  isAdmin: false,
};

const movieReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === payload.id ? { ...movie, ...payload } : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        searchValue: payload,
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        searchRating: payload,
      };
    case LOGIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    default:
      return state;
  }
};

export default movieReducer;
