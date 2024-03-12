import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/Navbar.css' 
import sparkles from "./sparkles.png"

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className='nav'>
      <div className='logo' onClick={() => navigate('/home')}>
        <span className='app'>Sparkl  </span>
        <img src={sparkles} alt="" className='icon'></img>
      </div>
      <div>
        <input type="text" placeholder='Search...' />
      </div>
      <div className='linkButton'>
        <button onClick={() => navigate('/home')}> Home</button>
        <button onClick={() => navigate('/books')}> Bookshelf</button>
        <button onClick={() => navigate('/watchlist')}> Watchlist</button>
        <button onClick={() => navigate('/blogs')}> Blogs</button>
        <button onClick={() => navigate('/profile')}> Profile</button>
      </div>
    </nav>
  )
}

export default Navbar