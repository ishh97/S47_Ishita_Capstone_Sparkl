
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './components/WelcomePage.jsx'
import RegisterPage from './components/AuthPages/RegisterPage.jsx'
import LoginPage from './components/AuthPages/LoginPage.jsx'
import Home from './components/Home.jsx'
import BookShelf from './components/AppPages/BookShelf.jsx'
import AddBook from './components/AppPages/AddBook.jsx'
import WatchListPage from './components/AppPages/WatchList.jsx'
import Blog from './components/AppPages/Blog.jsx'
import BlogsPage from './components/AppPages/BlogsPage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element= {<RegisterPage/>} />
        <Route path= "/login" element={<LoginPage/>} />
        <Route path = "/home" element={<Home/>} />
        <Route path='/books' element={<BookShelf />}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/watchlist' element={<WatchListPage />}/>
        <Route path='/blogs' element = {<BlogsPage/>} />
        <Route path='/blogs/:id' element={<Blog/>}/>
      </Routes>
    </>
  )
}

export default App
