import React ,{useState, useEffect}from 'react'
import Navbar from '../Navbar'
// import Books from '../DummyDatas/Books.json'
import '../Styles/BookShelf.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function BookShelf() {

    const navigate = useNavigate();
    const [Books, setBooks] = useState([]);
    useEffect(() => {
      axios.get('https://sparkl.onrender.com/books')
        .then(books => setBooks(books.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <>
      <Navbar />
      <h2 className='shelfTitle'>Your Book Shelf</h2>

      <div className='bookShelf'>


        <div className='shelf'>

          <h2 className='shelfSubTitle'>Currently Reading <button className='AddBtn' onClick={() => navigate('/addbook')}> + Add Books</button></h2>
          

          <div className='books'>

            {Books.filter((book) => book.wantTo === 'reading').map((book) => (
             
             <div className='book' key={book.id}>
             <div>
             <img src={book.coverImageURL} alt={book.title} className='bookCover' />
             </div>
             <div>
             <h3 className='bookTitle'>{book.title} </h3>
             <p className='bookAuthor'>{book.author}</p>
             
             <div className='bookGenreDiv'>
              {book.genres.map((genre, id) => (
               <p key={id} className='bookGenre'>{genre}</p>
              ))}
              </div>
              

             

             <div className='bookOptions'>
                  <select name="" id="">
                    <option value="read">Want to read</option>
                    <option value="reading">Currently Reading</option>
                    <option value="already">Already Read</option>

                    
                  </select>
                  <button className='deleteBtn'>Delete</button>
                </div>
                {/* {book.fav ? <span className='bookFav'>⭐</span> : null} */}
             </div>
             
           </div>
            ))}

          </div>

        </div>
        <div className='shelf'>
          <h2 className='shelfSubTitle'>Want to Read <button className='AddBtn' onClick={() => navigate('/addbook')}> + Add Books</button></h2>
          

          <div className='books'>
            {Books.filter((book) => book.wantTo === 'read').map((book) => (
             <div className='book' key={book.id}>
             <div>
             <img src={book.coverImageURL} alt={book.title} className='bookCover' />
             </div>
             <div>
             <h3 className='bookTitle'>{book.title}</h3>
             <p className='bookAuthor'>{book.author}</p>
             
             <div className='bookGenreDiv'>
              {book.genres.map((genre, id) => (
               <p key={id} className='bookGenre'>{genre}</p>
              ))}
              </div>
                <div className='bookOptions'>
                  <select name="" id="">
                    <option value="read">Want to read</option>
                    <option value="reading">Currently Reading</option>
                    <option value="already">Already Read</option>

                    
                  </select>
                  <button className='deleteBtn'>Delete</button>
                </div>
                </div>
                
              </div>
            ))}
          </div>

        </div>

        <div className='shelf'>
          <h2 className='shelfSubTitle'>Already Read  <button className='AddBtn' onClick={() => navigate('/addbook')}> + Add Books</button></h2>
         

          <div className='books'>

            {Books.filter((book) => book.wantTo === 'already').map((book) => (
              
              <div className='book' key={book.id}>
              <div>
              <img src={book.coverImageURL} alt={book.title} className='bookCover' />
              </div>
              <div>
              <h3 className='bookTitle'>{book.title}</h3>
              <p className='bookAuthor'>{book.author}</p>
              
              <div className='bookGenreDiv'>
              {book.genres.map((genre, id) => (
               <p key={id} className='bookGenre'>{genre}</p>
              ))}
              </div>
              

                

                <div className='bookOptions'>
                  <select name="" id="">
                    <option value="read">Want to read</option>
                    <option value="reading">Currently Reading</option>
                    <option value="already">Already Read</option>
                    
                  </select>
                  <button className='deleteBtn'>Delete</button>
                </div>
                </div>
                
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default BookShelf