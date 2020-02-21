import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = ev => {
    let count = this.state.count;
    this.setState({ count: ++count });
  };

  render() {
    console.log(this.state.count);
    let arr = [];

    for (let i = 1; i <= this.state.count; i++) {
      arr.push(<div>Hello World {i}</div>);
    }

    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <div>{arr.map(elem => elem)}</div>
      </div>
    );
  }
}

export default App;
