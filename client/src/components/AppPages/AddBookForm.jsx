import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function AddBooksForm() {
  const location = useLocation();
  const { book } = location.state;
  const [title, setTitle] = useState(book.title)
  const [coverImageURL, setCoverImageURL] = useState(`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`)
  const [author, setAuthor] = useState(book.author_name[0]);
  const [userId] = useState("65e1a942800a324b5f4f1f6a");
  const [wantTo, setWantTo] = useState("read");
  const [genreInput, setGenreInput] = useState('');
  const navigate = useNavigate();

  const handleGenreInputChange = (e) => {
    setGenreInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const genreArray = genreInput.split(',').map(genre => genre.trim());

      const postData = {
        userId,
        title,
        coverImageURL,
        author,
        wantTo,
        genres: genreArray
      };

      const response = await axios.post('https://sparkl.onrender.com/books', postData);
      console.log(response.data);
      navigate('/books')
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form action="">
        <label htmlFor="">Enter Book Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="">Enter Cover Image URL</label>
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImageURL}
          onChange={(e) => setCoverImageURL(e.target.value)}
        />
        <br />
        <label htmlFor="">Enter Author</label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="">Enter Genre (separated by commas)</label>
        <input
          type="text"
          placeholder='Genre'
          value={genreInput}
          onChange={handleGenreInputChange} />
        <br />
        <label htmlFor="">Want to ?</label>
        <select name="wantTo" id="" value={wantTo} onChange={(e) => setWantTo(e.target.value)}>
          <option value="read">Read</option>
          <option value="already">Already</option>
          <option value="reading">Reading</option>
        </select>
        <br />
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  )
}
export default AddBooksForm