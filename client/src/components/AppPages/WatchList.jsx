import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';
// import Watch from '../DummyDatas/WatchList.json';
import '../Styles/Watchlist.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function WatchListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [datas, setDatas] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };
  
  useEffect(() => {
    axios.get('http://localhost:2004/watchList')
      .then(datas => setDatas(datas.data))
      .catch(err => console.log(err))
  }, [])

  const filteredWatchList = datas.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter((item) => selectedPlatform === 'All' || item.whereTo === selectedPlatform);

  return (
    <>
      <Navbar />
      <h2 className="watchListTitle">Your Watch List</h2>
      <div className='search-container'>
      <input
        type="search"
        value={searchQuery}
        className='search-bar'
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />
      <button onClick={() => navigate('/watchlist/add')} className='add'>ADD</button>
      <select className='where-to' name="whereto" value={selectedPlatform} onChange={handlePlatformChange}>
        <option value="All">All Platforms</option>
        <option value="Netflix">Netflix</option>
        <option value="HBO Max">HBO Max</option>
        <option value="Disney+">Disney+</option>
        <option value="Hulu">Hulu</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Other">Other</option>
      </select>
      </div>
      
      <div className="watchList">
        {filteredWatchList.map((list) => {
          return (
            <div key={list._id} className="watchItem">
              <div>
                <img
                  src={list.coverImageURL}
                  alt=""
                  className="watchItemImg"
                />
              </div>
              <div className='watchTitle'>{list.title}</div>
              <div className='watchGenreDiv'>
              {Array.isArray(list.genre) && list.genre.map((genres, _id) => (
               <p key={_id} className='watchGenre'>{genres}</p>
              ))}
              </div>
              <p>Where to watch : {list.whereTo}</p>
              <button className='remove'>Remove</button>
              <button className='edit'>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WatchListPage;
