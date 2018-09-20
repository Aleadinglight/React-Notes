// Type imrc for shortcut
import React, { Component } from "react";

// Type cc for shortcut
class Counter extends Component {
  state = {
    value: this.props.value
  };
  styles = {
    fontSize: 30,
    fontWeigth: "bold"
  };
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return this.state.value === 0 ? "Zero" : value;
  }
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={
            // if i wanna pass an argument in
            // () => this.handleIncrement(argument)
            this.handleIncrement
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}
// <img src={this.state.imageURL} alt="" />
export default Counter;
