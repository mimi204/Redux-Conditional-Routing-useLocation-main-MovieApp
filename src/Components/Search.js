import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterName, filterRating, login } from "../redux/actions";
import StarRating from "./StarRating";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Search = () => {
  const { isAdmin, searchRating, searchValue } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [searchValue, setSearchValue] = useState();
  // const [searchRating, setSearchRating] = useState();
  //   const [admin, setAdmin] = useState(isAdmin);

  const handleSearch = (e) => dispatch(filterName(e.target.value));
  const handleRating = (rate) => dispatch(filterRating(rate));
  const handleLogin = () => dispatch(login());
  return (
    <div className="header-container">
      <h1> {isAdmin ? "Welcome admin" : "Our to movie app"} </h1>
      <div className="search-container">
        <input
          value={searchValue}
          onChange={handleSearch}
          className="inp"
          type="text"
          placeholder="enter a movie to search"
        />
      </div>
      <StarRating rate={searchRating} handleRating={handleRating} />
      <div>
        <button className="btn btn-primary" onClick={handleLogin}>
          <Link style={linkStyle} to={isAdmin ? "/" : "/admin"}>
            {!isAdmin ? "Log In" : "Log Out"}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Search;
