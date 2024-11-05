import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    let res;
    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }
    
    setResult(res);
  };

  return (
    <div className="Calculator">
      <h2>Basic Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First Number"
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second Number"
      />
      <button onClick={handleCalculation}>Calculate</button>

      {result !== null && (
        <div className="result">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculator;
