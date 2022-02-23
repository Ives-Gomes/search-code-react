import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import './styles.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log(inputValue);
  };

  return (
    <div className="container">
      <h1 className="title">Search Code</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Type your code..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          type="submit"
          className="buttonSearch"
          onClick={() => handleSearch()}
        >
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CODE: 60864-525</h2>

        <span>Rua teste</span>
        <span>Complemento: asdasdd</span>
        <span>Vila verde</span>
        <span>Ceará</span>
      </main>
    </div>
  );
}

export default App;
