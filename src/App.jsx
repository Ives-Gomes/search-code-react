import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from './services/api';

import './styles.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [code, setCode] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();

    if (inputValue === '') {
      alert('Type a code!');

      return;
    }

    try {
      const { data } = await api.get(`${inputValue}/json`);

      setCode(data);
      setInputValue('');
    } catch (err) {
      alert('Error... Please, try again.');

      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Search Code</h1>

      <form className="containerInput">
        <input
          type="text"
          placeholder="Type your code..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          type="submit"
          className="buttonSearch"
          onClick={(e) => handleSearch(e)}
        >
          <FiSearch size={25} color="#fff" />
        </button>
      </form>

      {Object.keys(code).length > 0 && (
        <main className="main">
          <h2>
            CODE:
            {code.cep}
          </h2>

          <span>{code.logradouro}</span>
          {code.complemento && (
            <span>
              Complement:
              {code.complemento}
            </span>
          )}
          <span>{code.bairro}</span>
          <span>
            {code.localidade}
            -
            {code.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
