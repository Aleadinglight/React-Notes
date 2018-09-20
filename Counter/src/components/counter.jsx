// Type imrc for shortcut
import React, { Component } from "react";

// Type cc for shortcut
class Counter extends Component {
  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.counter.value
    };
  }
  getBadgeClasses() {
    var classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // {x} -> get .x from {}
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={
            // if i wanna pass an argument in
            // () => this.handleIncrement(argument)
            () => this.props.onIncrement(this.props.counter)
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
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
