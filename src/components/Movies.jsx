import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState(prevState => ({ movies }));
  };

  renderMessage(count) {
    // const length = this.state.movies.length;
    if (count > 0) {
      return `Showing ${count} movies in the database.`;
    } else {
      return "There are no movies.";
    }
  }

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <h2 className="movies-header">There are no movies.</h2>;
    }
    return (
      <React.Fragment>
        <h2 className="movies-header">
          {/* {this.state.movies.length > 0
            ? `Showing ${this.state.movies.length} movies in the database.`
            : `There are no movies`} */}
          {this.renderMessage(count)}
        </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
