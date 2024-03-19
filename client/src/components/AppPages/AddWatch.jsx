import React, { useState } from 'react';
import axios from 'axios';

function AddWatch() {
  const [searchTerm, setSearchTerm] = useState('');

  const [count, setCount] = useState(1)

  const options = {
    method : 'GET',
    url :`https://www.omdbapi.com/?s=${searchTerm}&t=${searchTerm}&apikey=3cb6abaf&page=${count}`,
  }
  const handleSearch = async () => {
    try {
      const response = await axios.request(options);
  
      setSearchResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

   
  



  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h2>Search Results</h2>
          
          <ul>
            {searchResult.Search && searchResult.Search.map((searchResult) => (
              <li key={searchResult.id}>
              <h3>{searchResult.Title}</h3>
               
                <img src={searchResult.Poster} alt={searchResult.Title} style={{ maxWidth: '200px' }} />
              
              <p>{searchResult.Released}</p>
              <button>Add</button>
            </li>
            ))}
              
            
          </ul>
          
        </div>
      )}
    </div>
  );
}

export default AddWatch;

