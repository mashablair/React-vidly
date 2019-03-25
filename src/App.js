import React, { Component } from "react";
// import * as genresAPI from "./services/fakeMovieService";
import { getMovies } from "./services/fakeMovieService";
import Table from "./components/Table";
import "./App.css";

class App extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    return (
      <main className="container mt-5" role="main">
        <h1>Welcome to Movie Rentals</h1>
        <h2 className="movies-header">
          Showing {this.state.movies.length} movies in the database.
        </h2>
        <Table movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
