import React from "react";
import './App.css';

class App extends React.Component {

  render() {
    var firstNum = '';
    var operator = '';
    var secondNum = '';
    var solution = '';

    function onButton(event) {
      const buttonVal = event.target.value;
      
      // Try to convert the passed value to a number
      try {
        let number = Number(buttonVal);

        // If the passed value is an operator
        if (isNaN(number)) {
          throw new Error('Not A Number');
        
        // If the passed value is a number
        } else {
          if (operator.length === 0) {
            firstNum += buttonVal;
            document.getElementById('output').innerHTML = firstNum;
          } else {
            secondNum += buttonVal;
            document.getElementById('output').innerHTML = secondNum;
          }
        }
      }
      
      // Handle button value of an operator
      catch(err) {
        if (buttonVal !== '=') {
          operator = buttonVal;

          if (firstNum.length === 0) {
            firstNum = solution;
          }

        } else {
          // Calculating new expression
          if (firstNum && secondNum && operator) {
            if (operator === '+') {
              solution = Number(firstNum) + Number(secondNum);

            } else if (operator === '-') {
              solution = Number(firstNum) - Number(secondNum);

            } else if (operator === '*') {
              solution = Number(firstNum) * Number(secondNum);

            } else if (operator === '/') {
              // If trying to divide by zero
              if (secondNum === '0') {
                solution = 'NaN';
              } else {
                solution = Number(firstNum) / Number(secondNum)
              }
            }
          }
          if (solution !== 'NaN') {
            solution = parseFloat(solution.toPrecision(3));
          }
          document.getElementById('output').innerHTML = solution;

          firstNum = '';
          secondNum = '';
          operator = '';
        }
      }
    }

    function onClickClear() {
      firstNum = '';
      secondNum = '';
      operator = '';
      solution = '';
      document.getElementById('output').innerHTML = '0';
    }

    return (
      <div className="App">
        <div id="calculator-div">
          <h3 id='output'>0</h3>
          <div id="calculator-buttons">
            <div id="numberPad">
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
              <div className="row4">
                <button type="button" value={0} onClick={e => onButton(e)}>0</button>
              </div>
              <div className="row5">
                <button type="button" onClick={() => onClickClear()}>Clear</button>
              </div>
            </div>

            <div id='operator-buttons'>
              <button type="button" value={'+'} onClick={e => onButton(e)}>+</button>
              <button type="button" value={'-'} onClick={e => onButton(e)}>-</button>
              <button type="button" value={'*'} onClick={e => onButton(e)}>*</button>
              <button type="button" value={'/'} onClick={e => onButton(e)}>/</button>
              <button type="button" value={'='} onClick={e => onButton(e)}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
