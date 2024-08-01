import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css'
export default function Blog() {
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const { id } = useParams();

  const getBlog = async (id) => {
    try {
      const response = await fetch('/api/get-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id }),
      });
      const data = await response.json();
      return data.blog[0];
      
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      const fetchedBlog = await getBlog(id);
      if (fetchedBlog) {
        setBlogContent(fetchedBlog.text);
        setBlogTitle(fetchedBlog.title);
      }
    };

    fetchBlog();
  }, []);
  return (
    <div className='blog-container'>
      <div dangerouslySetInnerHTML={{ __html: blogContent }} className='blog-content' />
    </div>
  );
}
