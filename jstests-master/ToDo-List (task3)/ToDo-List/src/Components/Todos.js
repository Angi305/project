import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const newLocal = this;

    return this.props.todos.map((tod) => (
      <TodoItem
        userId={tod.userId}
        key={tod.id}
        todo={tod}
        markCopmlete={this.props.markCopmlete}
        removeTd={this.props.removeTd}
        style={contStyle}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  removeTd: PropTypes.func.isRequired,
};

const contStyle = {
  display: "block",
  textAlign: `center`,
  overflow: `auto`,
  verticalAlign: `middle`,
  position: `relatve`,
  marginLeft: `auto`,
  marginRight: `auto`,
};
export default Todos;
