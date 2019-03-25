import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    return (
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
          {this.props.movies.map(movie => (
            <Row
              key={movie._id}
              title={movie.title}
              genre={movie.genre.name}
              numberInStock={movie.numberInStock}
              dailyRentalRate={movie.dailyRentalRate}
            />
          ))}
          <Row />
        </tbody>
      </table>
    );
  }
}

export default Table;
