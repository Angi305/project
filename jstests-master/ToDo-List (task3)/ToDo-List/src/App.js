import React, { Component } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/layout/header";
import { BrowserRouter as Router, Route } from "react-router-dom";


import axios from "axios";



class App extends Component {
  state = {
    todos: [],
    allTodos: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => this.setState({ todos: res.data, allTodos: res.data }));
  }

  markCopmlete = (id) => {
    console.log(`THE ID CHANGED IS ${id}`);

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  removeTd = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((_res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      );
  };

  addNew = () => {
    let newEle = {
      id: this.state.todos.length + 1,
      title: document.getElementById("text").value,
      completed: false,
    };
    if (newEle.title.length > 20 || !newEle.title.length) {
      console.log("PLEASE TYPE A PROPER MESSAGE");
      return false;
    }
    this.setState({
      todos: [...this.state.todos, newEle],
      allTodos: [...this.state.allTodos, newEle],
    });
    return false;
  };

  SearchTodo = () => {
    console.log();
    let title = document.getElementById("searchText").value;
    let temp = [];
    this.state.todos.forEach((d) => {
      if (d.title.includes(title)) {
        temp.push(d);
      }
    });

    this.setState({
      todos: temp,
    });
  };

  clearAll = () => {
    this.setState({
      todos: [],
    });
  };

  checkAll = () => {
    let temp = [];

    this.state.allTodos.forEach((d) => {
      if (d.completed) {
        temp.push(d);
      }
    });

    this.setState({
      todos: temp,
    });
  };

  unCheckAll = () => {
    let temp = [];

    this.state.allTodos.forEach((d) => {
      if (!d.completed) {
        temp.push(d);
      }
    });

    this.setState({
      todos: temp,
    });
  };

  toggleAll = () => {
    let temp = this.state.allTodos;
    this.setState({
      todos: temp,
    });
  };

  handleChange(e) {
    switch (e.target.value) {
      case "all":
        this.toggleAll();
        break;
      case "completed":
        this.checkAll();
        break;
      case "unCheckAll":
        this.unCheckAll();
        break;
    }
    console.log(e.target.value);
  }

  addTodo = (title) => {
    if (!title.length || title.length > 20) return;

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
  };

  render() {
    console.log(this.state.todos);

    return (
      <div className="filter-todo" style={containerStyle}>
        <div className="wrapper">
          <h1 style={titleStyle}> MY TODO LIST </h1>

          <Header />

          <form style={formStyle}>
            <input
              placeholder="My todo"
              type="text"
              id="text"
              style={inputTxtStyle}
            />
            <input
              type="button"
              value="Add new"
              style={inputStyle}
              onClick={this.addNew}
            />
          </form>

          <div method="POST" style={{ marginTop: "1em" }}>
            <form style={formStyle}>
              <input
                placeholder="Search title"
                type="text"
                id="searchText"
                style={inputTxtStyle}
              />
              <input
                type="button"
                value="Search"
                style={inputStyle}
                onClick={this.SearchTodo}
              />
            </form>

            <div className="dropdown-button">
              <select
                style={inputStyle}
                className="butt"
                select
                onChange={(e) => this.handleChange(e)}
              >
                <option value="all" style={inputStyle}>
                  TODOS
                </option>
                <option value="unCheckAll" style={inputStyle}>
                  Uncompleted
                </option>
                <option value="completed" style={inputStyle}>
                  Completed
                </option>
              </select>
            </div>
          </div>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Todos
                  todos={this.state.todos}
                  markCopmlete={this.markCopmlete}
                  removeTd={this.removeTd}
                />
              </React.Fragment>
            )}
          />
        </div>
      </div>
    );
  }
}

const formStyle = {
  marginTop: "1em",
};

const containerStyle = {
  backgroundColor: `white`,
  textAlign: `center`,
  height: `40em`,
};

const titleStyle = {
  textAlign: `center`,
  color: `black`,
  textShadow: `1px 1px black `,
};

const inputStyle = {
  backgroundColor: "#fa8e00",
  textShadow: `1px 1px black `,
  color: `white`,
  border: "none",
  padding: "5px 10px",
  borderRadius: "5%",
  cursor: "pointer",
};

const inputTxtStyle = {
  borderColor: "\u00A7",
  padding: "5px 10px",
};
export default App;
