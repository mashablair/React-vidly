import React, { Component } from "react";
// import * as genresAPI from "./services/fakeMovieService";
import Movies from "./components/Movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container mt-5" role="main">
        <h1>Welcome to Movie Rentals</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
