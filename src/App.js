import React from "react";
import './App.css';

class App extends React.Component {
  render() {
    function onButton(event) {
      const value = event.target.value;
      alert(value)
    }

    return (
      <div className="App">
        <div className="row1">
          <button type="button" value={1} onClick={e => onButton(e)}>1</button>
          <button type="button" value={2} onClick={e => onButton(e)}>2</button>
          <button type="button" value={3} onClick={e => onButton(e)}>3</button>
        </div>
        <div className="row2">
          <button type="button" value={4} onClick={e => onButton(e)}>4</button>
          <button type="button" value={5} onClick={e => onButton(e)}>5</button>
          <button type="button" value={6} onClick={e => onButton(e)}>6</button>
        </div>
        <div className="row3">
          <button type="button" value={7} onClick={e => onButton(e)}>7</button>
          <button type="button" value={8} onClick={e => onButton(e)}>8</button>
          <button type="button" value={9} onClick={e => onButton(e)}>9</button>
        </div>
      </div>
    );
  }
}

export default App;
