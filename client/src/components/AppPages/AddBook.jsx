import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBooks() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTerm}`);
      setResults(response.data.docs);
      console.log(response.data.docs);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchBooks();
  };

  
  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a book"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((book) => (
          <div key={book.key}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBooks