import React, { useState } from 'react';
import Header from './Header/Header';
import Keypad from './Keypad/Keypad';
import './index.css';

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];

function CalCulatorApp() {

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) {
      return;
    }

    if (!usedKeyCodes.includes(keyCode)) {
      return;
    }

    if (numbers.includes(key)) {
      if (key === "0") {

        if (expression.length === 0) {
          return;
        }
        for(let i=expression.length-1;i>=0;i--)
        {
          
        }

      }
      calculateResult(expression + key)
      setExpression(expression + key);
    }
    else if (operators.includes(key)) {

      if (!expression) {
        return;
      }
      const lastChar = expression.slice(-1);

      if (operators.includes(lastChar)) {
        return
      }
      setExpression(expression + key)

    }
    else if (key === '.') {
      if (!expression) {
        return;
      }
      if (!numbers.includes(expression.slice(-1))) {
        return;
      }

      setExpression(expression + key);

    }

    else if (keyCode === 8) {
      if (!expression) {
        return;
      }

      calculateResult(expression.slice(0, -1));
      setExpression(expression.slice(0, -1));

    }
    if (keyCode === 13) {
      if (!expression) {
        return;
      }
      calculateResult(expression)

      const tempHistory = [...history];

      if (tempHistory.length > 20) tempHistory = tempHistory.splice(0, 1);
      tempHistory.push(expression);
      setHistory(tempHistory);

    }

  };

  const calculateResult = (exp) => {
    if (!exp) {
      return;
    }
    if (!numbers.includes(exp.slice(-1))) {
      exp = exp.slice(0, -1);
    }
    setResult(eval(exp).toFixed(2) + "")

  }

  return (
    <div className="app"
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}>
      <div className="app_calculator">
        <Header expression={expression} result={result} history={history} />
        <Keypad handleKeyPress={handleKeyPress} />
      </div>
    </div >
  );
}

export default CalCulatorApp;
