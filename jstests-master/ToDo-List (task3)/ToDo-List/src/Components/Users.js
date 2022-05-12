import React, { Component } from "react";
import { useLocation } from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    console.log("testHere");
    console.log(props);

    this.state = {
      items: [],
      userId: props.userId,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const urlUserId = window.location.search.split(":");
    const userId = urlUserId[urlUserId.length - 1];
    console.log(urlUserId[urlUserId.length - 1]);
    let url = "https://jsonplaceholder.typicode.com/users/" + userId;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userId: this.props.userId,
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      console.log(items.name);
      return (
        <div className="container">
          <div className="header">
            <h1>CARD</h1>
          </div>

          <div className="social">
            <div className="item-list">
              <p> {items.username}</p>
              <p key={items.id}></p>
            </div>
            <div className="item-list">
              <p>{items.name}</p>

              <p>
                <a href="">{items.website}</a>
              </p>
            </div>
            <div className="item-list">
              <p>{items.phone} </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Users;
