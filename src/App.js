import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  thisTester () {
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <p>
          Counter: { this.state.count }
        </p>
        <p>
          <input type="button" value="increment" />
        </p>
        <p>
          <input type="button" value="test value of 'this'" onClick = {this.thisTester} />
        </p>
      </div>
    );
  }
}
export default App;
