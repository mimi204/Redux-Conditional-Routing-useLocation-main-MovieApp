import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/admin" component={MovieList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
