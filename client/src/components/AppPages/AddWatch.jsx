import React, { useState } from 'react';
import axios from 'axios';

function AddWatch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState('');
  const [coverImageURL, setCoverImageURL] = useState('');
  const [type , setType] = useState('');
  const [userId, setUserId] = useState();
  const [count, setCount] = useState(1)

  const options = {
    method : 'GET',
    url :`https://www.omdbapi.com/?s=${searchTerm}&t=${searchTerm}&apikey=3cb6abaf&page=${count}`,
  }

  const handleSearch = async () => {
    try {
      const response = await axios.request(options);
      const newResults = response.data.Search || []; 
      
      setSearchResult(prevResults => [...prevResults, ...newResults]); 
      console.log(response.data);
      console.log(searchResult);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCount = () => {
    setCount(count + 1);
    console.log(count);
    handleSearch();
  };

   
  const handleAdd =  async(searchResult) => {
    try {
        setTitle(searchResult.Title)
        setCoverImageURL(searchResult.Poster)
        if(searchResult.Type == "series") {
            setType("Series")
        }
        else{
            setType("Movie")  
        }
        setUserId("65e1a942800a324b5f4f1f6a")
        console.log(title)
        console.log(coverImageURL)
        console.log(type)
        console.log(userId)

        const response =  await axios.post('https://sparkl.onrender.com/watchList', {userId, title, coverImageURL, type});
        console.log(response);
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
      {searchResult.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResult.map((searchResult) => (
              <li key={searchResult.id}>
              <h3>{searchResult.Title}</h3>
                <img src={searchResult.Poster} alt={searchResult.Title} style={{ maxWidth: '200px' }} />
              <p>{searchResult.Released}</p>
              <button onClick={() => handleAdd(searchResult)}>Add</button>
              
            </li>
            
            ))
            }
                <button onClick={handleCount}>Load More...</button> 
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddWatch;

