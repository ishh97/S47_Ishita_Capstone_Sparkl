import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Navbar.css';
import sparkles from './sparkles.png';

function Navbar() {
  const navigate = useNavigate();
  
  return (
    <nav className='nav' role='navigation' aria-label='Main Navigation'>
      <div className='logo' onClick={() => navigate('/home')} role='button'>
        <span className='app'>Sparkl  </span>
        <img src={sparkles} alt="" className='icon'></img>
      </div>
      <div>
        <input type="text" placeholder='Search...' aria-label='Search input' />
      </div>
      <div className='linkButton' role='menubar'>
        <button onClick={() => navigate('/home')} role='menuitem'> Home</button>
        <button onClick={() => navigate('/books')} role='menuitem'> Bookshelf</button>
        <button onClick={() => navigate('/watchlist')} role='menuitem'> Watchlist</button>
        <button onClick={() => navigate('/blogs')} role='menuitem'> Blogs</button>
        <button onClick={() => navigate('/profile')} role='menuitem'> Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
