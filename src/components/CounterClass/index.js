import React, { Component } from "react";

export class CounterClass extends Component {
  constructor() {
    super();

    this.state = {
      count: 1
    };
  }

  handleClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  };

  render() {
    const {count} = this.state;
    return (
      <div>
        <h3>Welcome to the Counter of Life.</h3>

        <button onClick={this.handleClick}>
          {count}
        </button>
      </div>
    )
  }
}

export default CounterClass
