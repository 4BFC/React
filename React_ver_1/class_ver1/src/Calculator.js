//결론 eval을 사용하는 것 뿐이였다.
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => { //값을 입력받는 
    setInput(input + value);
  };

  const handleReset = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleReset}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
