import React, { useState } from 'react';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState('');

  const calculateAge = () => {
    const currentDate = new Date();
    const inputDate = new Date(birthdate);

    if (isNaN(inputDate.getTime())) {
      setResult('Invalid date');
    } else if (inputDate > currentDate) {
      setResult('Birthdate cannot be in the future');
    } else {
      const age = Math.floor((currentDate - inputDate) / (1000 * 60 * 60 * 24 * 365));
      setResult(`You are ${age} years old.`);
    }
  };

  return (
    <div className="App">
      <h1>Birthday Calculator</h1>
      <div>
        <label>Enter your birthdate: </label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
