import React from 'react';

function App() {
  let count = 0;
  let increment = function() {
    count = count + 1;
    console.log("increment : " + count);
  }
  return (
    <div className="App">
      Counter: { count }
      <input type="button" value="increment" onClick = {increment} />
    </div>
  );
}

export default App;
