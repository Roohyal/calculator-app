import React from "react";
import { useState, useEffect } from "react";
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState(" ");
  const [display, setDisplay] = useState(" ");

 useEffect( () => {
    const handleKeyPress = (event) => {
     const { key } = event; 
     if ((/[0-9]/).test(key)){
        handleClick(key);
     } else if(['=','+','-','*','/','.'].includes(key)){
        handleClick(key)
     } else if(key === 'Enter') {
        handleCalculate();
     } else if (key === 'Escape'){
         handleClear();
     } else if (key === 'Backspace') {
        handleBackspace();
     }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
        window.removeEventListener('keydown', handleKeyPress)
    };
 }, [input] );


  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);

    setDisplay((prevInput) => prevInput + value);

  };

  const handleClear = () => {
    setInput(" ");
    setDisplay(" ");

  };

  const handleCalculate = () => {
    const result = eval(input);
    setDisplay(result);
    setInput(result);
  };

  const handleBackspace = () => {
    setDisplay((prevInput) => prevInput.slice(0, -1));
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
  <div className="body">
    <div className="calculator">
        <h1>Calc</h1>
        <div className="display">
            <div className="input">{display}</div>
        </div>
        <div className="buttons">
            <button onClick={() => {handleClick('1')}}>1</button>
            <button onClick={() => {handleClick('2')}}>2</button>
            <button onClick={() => {handleClick('3')}}>3</button>
            <button onClick={() => {handleClick('+')}}>+</button>
            <button onClick={() => {handleClick('4')}}>4</button>
            <button onClick={() => {handleClick('5')}}>5</button>
            <button onClick={() => {handleClick('6')}}>6</button>
            <button onClick={() => {handleClick('-')}}>-</button>
            <button onClick={() => {handleClick('7')}}>7</button>
            <button onClick={() => {handleClick('8')}}>8</button>
            <button onClick={() => {handleClick('9')}}>9</button>
            <button onClick={() => {handleClick('*')}}>*</button>
            <button onClick={() => {handleClick('0')}}>0</button>
            <button onClick={() => {handleClick('00')}}>00</button>
            <button onClick={() => {handleClick('.')}}>.</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => {handleClick('/')}}>/</button>
            <button onClick={handleClear}>C</button>
            



        </div>

    </div>

  </div>
  )
}

export default Calculator;
