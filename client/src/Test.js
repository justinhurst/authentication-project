import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    console.log('token: ', JSON.stringify(token));
    fetch("/api/test",{
      headers: new Headers({
        'Authorization': token,
      })
    }).then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>The Test Page</h1>
        <p>{this.state.message}</p>
      </div>
      
    );
  }
}

export default Test;
