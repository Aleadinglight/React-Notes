// Type imrc for shortcut
import React, { Component } from "react";

// Type cc for shortcut
class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 30,
    fontWeigth: "bold"
  };
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.state.tags.length === 0 && "Add new tag."}
        {this.renderTags()}
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
      </div>
    );
  }
}
// <img src={this.state.imageURL} alt="" />
export default Counter;
