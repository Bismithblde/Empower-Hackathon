import React, { useState, useEffect } from 'react';
import './BlogHub.css';
import { Link } from 'react-router-dom';

export default function BlogHub() {
  const [scholarships, setScholarships] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async (type) => {
    try {
      const response = await fetch('/api/get-blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });
      const data = await response.json();
      return data.blogs; // Extract blogs from the response
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedScholarships = await getBlogs('Scholarship');
      const fetchedBlogs = await getBlogs('Blog');
      setScholarships(fetchedScholarships);
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }, []);

  return (
    <div className='bloghub-page-container'>
      <div className="blogs-list-container">
        <div className="scholarship-container">
          <h1>Scholarships</h1>
          <ul>
            {scholarships.map((scholarship) => (
              <li key={scholarship._id}>
                <Link to={`/blog-hub/scholarships/${scholarship._id}`}>
                  {scholarship.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog-list-container">
          <h1>Financial Blogs</h1>
          <ul>
            {blogs.map((blog) => (
              <li key={blog._id}>
                <Link to={`/blog-hub/blogs/${blog._id}`}>
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
