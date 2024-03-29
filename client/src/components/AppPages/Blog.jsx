    import React, { useState, useEffect } from 'react'
    import { useParams, useNavigate } from 'react-router-dom'
    // import Blogs from '../DummyDatas/Blogs.json'
    import '../Styles/Blog.css'
    import axios from 'axios'

    function Blog() {
        const { id } = useParams()
        const [Blogs, setBlogs] = useState([]);

        const navigate = useNavigate();
        useEffect(() => {
            axios.get('https://sparkl.onrender.com/blog')
            .then(blogs =>  setBlogs(blogs.data))
            .catch(err => console.log(err))
        }, [])
        function formatDate(dateString) {
            const formattedDate = new Date(dateString);
            return formattedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        }

        const blog1 = Blogs.find(blog => blog._id === String(id));

        if (!blog1) {
            return <div>Blog not found</div>;
        }

        return (
            <div className='Blog'>
                <button onClick={()=>navigate('/blogs')} >Back</button>
                <button onClick={() => navigate(`/blogs/${blog1._id}/edit`)}>Edit</button>
                <button>Delete</button>
                <h2> {blog1.title}</h2>

                
                <p>{blog1.content}</p>
                <p>Tags: {blog1.tags.join(', ')}</p>
                <p>Created Date: {formatDate(blog1.createdDate)}</p>
                <p>Updated Date: {formatDate(blog1.updatedDate)}</p>

                <div>
                    {blog1.image.map((image, index) => (
                        <img key={index} src={image} className='blog-image' alt="" />
                    ))}
                </div>
            </div>
        );
    }

    export default Blog