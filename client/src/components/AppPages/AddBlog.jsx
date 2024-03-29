import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBlog() {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setInputTags] = useState();
  const userId = "65e1a942800a324b5f4f1f6a";

  const handleSubmit = (e) => {
    console.log("t :",title,"c :", content,"t :", tagsInput);
    e.preventDefault();
    
    try{
      const tagsArray = tagsInput.split(' ').map(tag => tag.trim());
      console.log(tagsArray);

      const postData ={
        userId,
        title,
        content,
        tags: tagsArray
      }
      const response = axios.post('http://localhost:1997/blog', postData);
      console.log(response.data);

      navigate('/blogs')

    } catch (error) {
      console.error(error);
    }


  };
  const handleTagsInput = (e) => {
    setInputTags(e.target.value)}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter blog title' onChange={(e) => setTitle(e.target.value)}/>
      <textarea  placeholder='Enter blog content' 
      onChange={(e) => setContent(e.target.value)}/>
      <input type="text" placeholder='Enter blog tags' 
      onChange={(e) => setInputTags(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default AddBlog