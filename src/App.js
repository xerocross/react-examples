import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
  }

  thisTester () {
    console.log(this);
  }

  increment () {
    //this.state.count += 1;
    this.setState((state, props)=>{
      return {count : state.count + 1};
    })
    console.log("increment: " + this.state.count);
  }

  render() {
    return (
      <div className="App">
        <p>
          Counter: { this.state.count }
        </p>
        <p>
          <input type="button" value="increment" onClick = {this.increment} />
        </p>
        <p>
          <input type="button" value="test value of 'this'" onClick = {this.thisTester} />
        </p>
      </div>
    );
  }
}
export default App;
