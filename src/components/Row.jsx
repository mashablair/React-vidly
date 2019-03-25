import React, { Component } from "react";

class Row extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th scope="row">{this.props.title}</th>
        <td>{this.props.genre}</td>
        <td>{this.props.numberInStock}</td>
        <td>{this.props.dailyRentalRate}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Row;
