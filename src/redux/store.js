import { createStore } from "redux";
import movieReducer from "./movieReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(movieReducer, devtools);

export default store;
