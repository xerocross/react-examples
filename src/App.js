import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    return (
      <div className="App">
        Counter: { this.state.count }<br/>
        <input type="button" value="increment" />
      </div>
    );
  }
}
export default App;
