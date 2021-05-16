import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FILTER_BY_NAME,
  FILTER_BY_RATING,
  LOGIN,
} from "./actionTypes";

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id,
  };
};

export const editMovie = (editedMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: editedMovie,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const filterName = (text) => {
  return {
    type: FILTER_BY_NAME,
    payload: text,
  };
};

export const filterRating = (rating) => {
  return {
    type: FILTER_BY_RATING,
    payload: rating,
  };
};
